package com.example.myDiscord.repository;

import com.example.myDiscord.domain.ChannelType;
import com.example.myDiscord.domain.UserChat;
import jakarta.persistence.EntityManager;
import lombok.RequiredArgsConstructor;
import org.springframework.stereotype.Repository;
import org.springframework.transaction.annotation.Transactional;

@Repository
@Transactional
@RequiredArgsConstructor
public class UserChatRepository {
    private final EntityManager em;
    public void save(UserChat userChat){
        em.persist(userChat);
    }

}

