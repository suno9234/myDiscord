package com.example.myDiscord.service;

import com.example.myDiscord.domain.ChannelType;
import com.example.myDiscord.domain.ChatChannel;
import com.example.myDiscord.domain.User;
import com.example.myDiscord.domain.UserChat;
import com.example.myDiscord.repository.ChannelRepository;
import com.example.myDiscord.repository.UserChatRepository;
import com.example.myDiscord.repository.UserRepository;
import lombok.RequiredArgsConstructor;
import org.springframework.stereotype.Service;
import org.springframework.transaction.annotation.Transactional;

import java.util.List;

@Service
@Transactional
@RequiredArgsConstructor
public class ChannelService {

    private final ChannelRepository channelRepository;
    private final UserRepository userRepository;

    private final UserChatRepository userChatRepository;

    public Long createChannel(String sender,String receiver){
        // dm을 처음 보낸 경우 유저간 채팅 채널 자동 생성
        ChatChannel channel = new ChatChannel();
        channel.setChannelType(ChannelType.DIRECT_MESSAGE);
        channelRepository.save(channel);

        List<User> findUserA = userRepository.findByUsername(sender);
        List<User> findUserB = userRepository.findByUsername(receiver);

        if(findUserA.isEmpty() || findUserB.isEmpty()){
            throw new IllegalStateException("존재하지 않는 사용자입니다.");
        }

        User userA = findUserA.get(0);
        User userB = findUserB.get(0);

        UserChat userChatA = new UserChat();
        userChatA.setUser(userA);
        userChatA.setChannel(channel);
        userChatRepository.save(userChatA);

        UserChat userChatB = new UserChat();
        userChatB.setUser(userB);
        userChatB.setChannel(channel);
        userChatRepository.save(userChatB);

        return channel.getId();
    }

    public List<ChatChannel> findChannelByUsers(String sender, String receiver){
        List<User> findUserA = userRepository.findByUsername(sender);
        List<User> findUserB = userRepository.findByUsername(receiver);
        if(findUserA.isEmpty() || findUserB.isEmpty()){
            throw new IllegalStateException("존재하지 않는 사용자입니다");
        }
        return channelRepository.findByUsers(findUserA.get(0), findUserB.get(0));
    }
    public ChatChannel findById(Long id){
        return channelRepository.findById(id);
    }
}
