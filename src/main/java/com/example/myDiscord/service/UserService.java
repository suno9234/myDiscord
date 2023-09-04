package com.example.myDiscord.service;

import com.example.myDiscord.domain.Friendship;
import com.example.myDiscord.domain.FriendshipStatus;
import com.example.myDiscord.domain.User;
import com.example.myDiscord.domain.UserStatus;
import com.example.myDiscord.repository.FriendshipRepository;
import com.example.myDiscord.repository.UserRepository;
import com.example.myDiscord.utils.JwtUtil;
import com.example.myDiscord.utils.PasswordUtil;
import lombok.RequiredArgsConstructor;
import org.springframework.beans.factory.annotation.Value;
import org.springframework.stereotype.Service;
import org.springframework.transaction.annotation.Transactional;

import java.util.ArrayList;
import java.util.List;
import java.util.stream.Collectors;

@Service
@Transactional
@RequiredArgsConstructor
public class UserService {

    private final UserRepository userRepository;
    private final FriendshipRepository friendShipRepository;
    private final PasswordUtil passwordUtil;

    @Value("${jwt.secret}")
    private String secret;

    public Long join(User user){
        validateDuplicateMember(user);

        User encodedUser = new User();
        encodedUser.setEmail(user.getEmail());
        encodedUser.setUsername(user.getUsername());
        encodedUser.setPassword(passwordUtil.encodePassword(user.getPassword()));
        encodedUser.setStatus(UserStatus.OFFLINE);

        userRepository.save(encodedUser);
        return encodedUser.getId();
    }

    public List<String> login(String email, String password){

        // 인증 과정
        List<User> findUser = userRepository.findByEmail(email);
        if(findUser.isEmpty()) {
            throw new IllegalStateException("존재하지 않는 이메일입니다.");
        }
        User user = findUser.get(0);
        String savedPassword  = user.getPassword();

        if ( !passwordUtil.matchesPassword(password,savedPassword)){
            throw new IllegalStateException("비밀번호가 틀렸습니다.");
        }
        List<String> result = new ArrayList<>();
        result.add(JwtUtil.generateJwt(email,secret));
        result.add(user.getUsername());
        result.add(user.getId().toString());
        return  result;
    }

    public List<User> findByUsername(String username){
        return userRepository.findByUsername(username);
    }

    public boolean addFriend(String senderName, String receiverName){
        User sender  = userRepository.findByUsername(senderName).get(0);
        List<User> findReceiver = userRepository.findByUsername(receiverName);
        if (findReceiver.isEmpty()){
            throw new IllegalStateException("존재하지 않는 사용자입니다.");
        }
        User receiver = findReceiver.get(0);
        List<Friendship> findFriendship = friendShipRepository.findByUserId(receiver.getId(),sender.getId());
        if(!findFriendship.isEmpty()){
            Friendship friendship = findFriendship.get(0);
            FriendshipStatus status = friendship.getStatus();
            switch (status){
                case FRIEND -> {
                    throw new IllegalStateException("이미 친구입니다.");
                }
                case BANNED -> {
                    throw new IllegalStateException("차단당한 친구입니다");
                }
                case RECEIVE -> {
                    throw new IllegalStateException("이미 요청을 보냈습니다.");
                }
                default -> {
                    break;
                }
            }
            return false;
        }
        Friendship friendshipA = new Friendship();
        friendshipA.setUserA(sender);
        friendshipA.setUserB(receiver);
        friendshipA.setStatus(FriendshipStatus.SEND);

        Friendship friendshipB = new Friendship();
        friendshipB.setUserA(receiver);
        friendshipB.setUserB(sender);
        friendshipB.setStatus(FriendshipStatus.RECEIVE);

        friendShipRepository.save(friendshipA);
        friendShipRepository.save(friendshipB);

        return true;
    }

    public void updateFriendShip(String usernameA, String usernameB ,FriendshipStatus status){
        List<User> findUserA = userRepository.findByUsername(usernameA);
        if(findUserA.isEmpty()){
            throw new IllegalStateException("존재하지 않는 사용자입니다");
        }
        User userA = findUserA.get(0);
        List<User> findUserB = userRepository.findByUsername(usernameB);
        if(findUserB.isEmpty()){
            throw new IllegalStateException("존재하지 않는 사용자입니다.");
        }
        User userB = findUserB.get(0);

        List<Friendship> findFriendShipA = friendShipRepository.findByUserId(userA.getId(),userB.getId());
        List<Friendship> findFriendShipB = friendShipRepository.findByUserId(userB.getId(),userA.getId());
        if(findFriendShipA.isEmpty()){
            throw new IllegalStateException("존재하지 않는 관계입니다.");
        }
        if(findFriendShipB.isEmpty()){
            throw new IllegalStateException("존재하지 않는 관계입니다.");
        }
        Friendship fA = findFriendShipA.get(0);
        Friendship fB = findFriendShipB.get(0);
        if(status.equals(FriendshipStatus.FRIEND)) {
            fA.setStatus(status);
            fB.setStatus(status);
        }
    }

    public List<User> getFriendships(Long id){
        User user = userRepository.findOne(id);
        if(user == null){
            throw new IllegalStateException("존재하지 않는 사용자입니다.");
        }
        return friendShipRepository.findAllFriendsByUserId(id).stream().map(friendship -> {
            List<User> findUser = userRepository.findByUsername(friendship.getUserB().getUsername());
            return findUser.get(0);
        }).collect(Collectors.toList());
    }

    public List<User> getSendFriendRequests(Long id){
        User user = userRepository.findOne(id);
        if(user==null){
            throw new IllegalStateException("존재하지 않는 사용자입니다.");
        }
        return  friendShipRepository.findAllSendRequestByUserId(id).stream().map(friendship -> {
            List<User> findUser = userRepository.findByUsername(friendship.getUserA().getUsername());
            return findUser.get(0);
        }).collect(Collectors.toList());
    }

    public List<User> getReceiveFriendRequests(Long id){
        User user = userRepository.findOne(id);
        if(user==null){
            throw new IllegalStateException("존재하지 않는 사용자입니다.");
        }
        return  friendShipRepository.findAllReceivedRequestByUserId(id).stream().map(friendship -> {
            List<User> findUser = userRepository.findByUsername(friendship.getUserB().getUsername());
            return findUser.get(0);
        }).collect(Collectors.toList());
    }
    private void validateDuplicateMember(User user) {
        List<User> findEmails = userRepository.findByEmail(user.getEmail());
        if(!findEmails.isEmpty()) {
            throw new IllegalStateException("이미 존재하는 회원입니다.");
        }
        List<User> findUsernames = userRepository.findByUsername(user.getUsername());
        if(!findEmails.isEmpty()) {
            throw new IllegalStateException("이미 존재하는 사용자명입니다");
        }
    }




}
