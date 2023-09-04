package com.example.myDiscord.repository;

import com.example.myDiscord.domain.ChannelType;
import com.example.myDiscord.domain.ChatChannel;
import com.example.myDiscord.domain.User;
import jakarta.persistence.EntityManager;
import lombok.RequiredArgsConstructor;
import org.springframework.stereotype.Repository;

import java.util.List;

@Repository
@RequiredArgsConstructor
public class ChannelRepository {
    private final EntityManager em;

    public void save(ChatChannel channel){
        em.persist(channel);
    }

    public ChatChannel findById(Long id){
        return em.find(ChatChannel.class,id);
    }

    public List<ChatChannel> findByUsers(User userA, User userB){
        return em.createQuery("select uc.channel from UserChat uc where uc.user= :userA and uc.channel.channelType= :channelType and uc.channel.id in("+
                "select uc2.channel.id from UserChat uc2 where uc2.user =:userB)",ChatChannel.class
                ).setParameter("userA", userA).setParameter("userB", userB).setParameter("channelType", ChannelType.DIRECT_MESSAGE)
                .getResultList();
    }

    public ChatChannel findOne(Long id){
        return em.find(ChatChannel.class, id);
    }
}
