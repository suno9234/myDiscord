package com.example.myDiscord.repository;

import com.example.myDiscord.domain.Message;
import jakarta.persistence.EntityManager;
import lombok.RequiredArgsConstructor;
import org.springframework.stereotype.Repository;

import java.util.List;

@Repository
@RequiredArgsConstructor
public class MessageRepository {

    private final EntityManager em;

    public void save(Message message){
        em.persist(message);
    }

    public List<Message> findById(Long id, Long lastId){
        if (lastId == 0) {
            return em.createQuery("select m from Message m where m.channel.id = :channelId order by m.id desc", Message.class)
                    .setMaxResults(30)
                    .setParameter("channelId", id)
                    .getResultList();
        }
        return em.createQuery("select m from Message m where m.id < :lastId and m.channel.id = :channelId order by m.id desc", Message.class)
                .setMaxResults(30)
                .setParameter("lastId",lastId)
                .setParameter("channelId", id)
                .getResultList();
    }

}
