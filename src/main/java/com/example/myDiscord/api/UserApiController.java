package com.example.myDiscord.api;

import com.example.myDiscord.domain.Friendship;
import com.example.myDiscord.domain.FriendshipStatus;
import com.example.myDiscord.domain.User;
import com.example.myDiscord.domain.UserStatus;
import com.example.myDiscord.service.UserService;
import jakarta.validation.Valid;
import jakarta.validation.constraints.Email;
import jakarta.validation.constraints.NotBlank;
import jakarta.validation.constraints.Pattern;
import lombok.AllArgsConstructor;
import lombok.Data;
import lombok.RequiredArgsConstructor;
import lombok.extern.slf4j.Slf4j;
import org.springframework.web.bind.annotation.*;

import java.util.List;
import java.util.stream.Collectors;

@RestController
@RequestMapping("/api/user")
@RequiredArgsConstructor
@Slf4j
@CrossOrigin(methods={RequestMethod.OPTIONS , RequestMethod.PUT, RequestMethod.POST, RequestMethod.GET})
public class UserApiController {
    private final UserService userService;

    @PostMapping("/signUp")
    public CreateMemberResponse saveMember(@RequestBody @Valid CreateMemberRequest request ){

        User user = new User();
        user.setEmail(request.getEmail());
        user.setUsername(request.getUserName());
        user.setPassword(request.getPassword());
        Long id = userService.join(user);
        return new CreateMemberResponse(id);
    }

    @PostMapping("/login")
    public CreateLoginResponse login(@RequestBody @Valid CreateLoginRequest request){
        List<String> results =  userService.login(request.getEmail(),request.getPassword());
        String token = results.get(0);
        String username = results.get(1);
        Long id = Long.parseLong(results.get(2));
        return new CreateLoginResponse(token,username,id);
    }


    @PostMapping("/addFriend")
    public CreateAddFriendResponse addFriend(@RequestBody @Valid CreateAddFriendRequest request){
        boolean result = userService.addFriend(request.getSender(),request.getReceiver());
        return new CreateAddFriendResponse(result);
    }

    @PutMapping("friendships/{senderUsername}/accept")
    public void acceptFriend(
            @PathVariable("senderUsername") String senderUsername,
            @RequestBody @Valid UsernameDto request){
        userService.updateFriendShip(senderUsername,request.getUsername(), FriendshipStatus.FRIEND);
    }

    @GetMapping("/friendships")
    public CreateFriendshipResponse getFriendships(@RequestParam Long id){
        List<UserDto> friends = userService.getFriendships(id).stream()
                .map(user -> new UserDto(user.getUsername(), user.getStatus(),user.getId())).toList();
        List<UserDto> sendRequests = userService.getSendFriendRequests(id).stream()
                .map(user -> new UserDto(user.getUsername(),user.getStatus(),user.getId()))
                .collect(Collectors.toList());;
        List<UserDto> receivedRequests = userService.getReceiveFriendRequests(id).stream()
                .map(user -> new UserDto(user.getUsername(),user.getStatus(),user.getId()))
                .collect(Collectors.toList());;
        return new CreateFriendshipResponse(friends, sendRequests,receivedRequests);
    }


    @Data
    static class CreateMemberResponse {
        public CreateMemberResponse(Long id){
            this.id = id;
        }
        private Long id;
    }

    @Data
    static class CreateMemberRequest {
        @NotBlank(message = "필수 입력 값입니다.")
        @Email(message = "이메일 형식에 맞지 않습니다")
        private String email;

        @NotBlank
        private String userName;

        @Pattern(regexp="(?=.*[0-9])(?=.*[a-zA-Z])(?=.*\\W)(?=\\S+$).{8,20}",
                message = "비밀번호는 영문 대,소문자와 숫자, 특수기호가 적어도 1개 이상씩 포함된 8자 ~ 20자의 비밀번호여야 합니다.")
        private String password;
    }

    @Data
    static class CreateLoginResponse {
        private String token;
        private String username;
        private Long id;
        public CreateLoginResponse(String token , String username,Long id) {
            this.username = username;
            this.token = token;
            this.id = id;
        }
    }

    @Data
    static class CreateLoginRequest {
        private String email;
        private String password;
    }

    @Data
    @AllArgsConstructor
    static class CreateAddFriendResponse {
        @NotBlank
        private boolean isRequestSuccess;
    }

    @Data
    static class CreateAddFriendRequest {
        private String sender;
        private String receiver;

    }

    @Data
    @AllArgsConstructor
    static class CreateFriendshipResponse {
        private List <UserDto> friends;
        private List<UserDto> sended;
        private List<UserDto> received;

    }

    @Data
    static class UsernameDto {
        private String username;
        protected UsernameDto(){}
        public UsernameDto(String username) {
            this.username = username;
        }
    }

    @Data
    @AllArgsConstructor
    static class UserDto{
        private String username;
        private UserStatus status;
        private Long id;
    }
}
