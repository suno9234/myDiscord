package com.example.myDiscord.api;

import com.example.myDiscord.domain.ChatChannel;
import com.example.myDiscord.domain.Message;
import com.example.myDiscord.domain.User;
import com.example.myDiscord.service.ChannelService;
import com.example.myDiscord.service.MessageService;
import com.example.myDiscord.service.UserService;
import lombok.AllArgsConstructor;
import lombok.Data;
import lombok.RequiredArgsConstructor;
import lombok.extern.slf4j.Slf4j;
import org.springframework.web.bind.annotation.*;

import java.time.LocalDateTime;
import java.util.ArrayList;
import java.util.List;

@RestController
@RequestMapping("/api/directMessage")
@RequiredArgsConstructor
@Slf4j
public class MessageApiController {

    private final UserService userService;
    private final ChannelService channelService;
    private final MessageService messageService;

    @GetMapping()
    public createGetDirectMessagesResponse getDirectMessages(@RequestParam String sender,
                                  @RequestParam String receiver,
                                  @RequestParam Long lastId){
        log.info("DM REQUEST" +sender+receiver+lastId.toString());
        List<ChatChannel> findChannel = channelService.findChannelByUsers(sender, receiver);
        ChatChannel channel = null;
        List<User> findUser = userService.findByUsername(receiver);
        if(findChannel.isEmpty()) {
            Long channelId = channelService.createChannel(sender,receiver);
            channel = channelService.findById(channelId);
            log.info("DM_CHANNEL_CREATED");
        }else{
            channel = findChannel.get(0);
            log.info("DM_CHANNEL_FOUND");
        }
        User receiveUser = findUser.get(0);
        List<MessageDto> messages = messageService.getMessages(channel.getId(),lastId).stream().map(message->{
            MessageDto messageDto = new MessageDto();
            messageDto.setId(message.getId());
            messageDto.setUserId(message.getSender().getId());
            messageDto.setUsername(message.getSender().getUsername());
            messageDto.setCreatedAt(message.getCreatedAt());
            messageDto.setUpdatedAt((message.getUpdatedAt()));
            messageDto.setContent(message.getContent());
            return messageDto;
        }).toList();
        return new createGetDirectMessagesResponse(channel.getId(),receiver,receiveUser.getId(),messages);
    }

    @PostMapping("/{channelId}")
    public DMResponse sendMessage(@PathVariable Long channelId, @RequestBody CreateDirectMessageRequest request){
        log.info("DIRECT MESSAGE POSTED");
        Message message = messageService.sendMessage(channelId,request.getSenderId(),request.getContent());
        return new DMResponse(message.getChannel().getId(),message.getSender().getId(), message.getSender().getUsername(),message.getContent(),
                message.getCreatedAt(),message.getUpdatedAt());
    }



    @Data
    @AllArgsConstructor
    static class createGetDirectMessagesResponse{
        private Long channelId;
        private String username;
        private Long userId;
        private List<MessageDto> messages;
    }

    @Data
    @AllArgsConstructor
    static class CreateDirectMessageRequest{
        protected CreateDirectMessageRequest(){}
        private Long senderId;
        private String content;
    }

    @Data
    @AllArgsConstructor
    static class DMResponse{
        private Long channelId;
        private Long userId;
        private String username;
        private String content;
        private LocalDateTime createdAt;
        private LocalDateTime updatedAt;
    }

    @Data
    @AllArgsConstructor
    static class MessageDto{
        protected MessageDto(){}
        private Long id;
        private Long userId;
        private String username;
        private LocalDateTime createdAt;
        private LocalDateTime updatedAt;
        private String content;
    }
}
