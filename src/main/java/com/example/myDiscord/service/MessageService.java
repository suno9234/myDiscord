package com.example.myDiscord.service;

import com.example.myDiscord.domain.ChatChannel;
import com.example.myDiscord.domain.Message;
import com.example.myDiscord.domain.User;
import com.example.myDiscord.repository.ChannelRepository;
import com.example.myDiscord.repository.MessageRepository;
import com.example.myDiscord.repository.UserRepository;
import lombok.RequiredArgsConstructor;
import org.springframework.stereotype.Service;
import org.springframework.transaction.annotation.Transactional;

import java.util.List;

@Service
@Transactional
@RequiredArgsConstructor
public class MessageService {

    private final MessageRepository messageRepository;
    private final ChannelRepository channelRepository;
    private final UserRepository userRepository;

    public Message sendMessage(Long channelId, Long senderId, String content){
        Message message = new Message();
        ChatChannel channel = channelRepository.findById(channelId);
        User user = userRepository.findOne(senderId);
        if(channel == null || user ==null) {
            throw new IllegalStateException("존재하지 않는 채널 or 존재하지 않는 사용자");
        }
        message.setChannel(channel);
        message.setSender(user);
        message.setContent(content);
        messageRepository.save(message);
        return message;
    }

    public List <Message> getMessages(Long channelId, Long lastId){
        return  messageRepository.findById(channelId, lastId);
    }
}
