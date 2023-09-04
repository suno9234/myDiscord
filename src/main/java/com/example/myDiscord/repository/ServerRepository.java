package com.example.myDiscord.repository;

import com.example.myDiscord.domain.Server;
import jakarta.persistence.EntityManager;
import lombok.RequiredArgsConstructor;
import org.springframework.stereotype.Repository;

@Repository
@RequiredArgsConstructor
public class ServerRepository {

    private final EntityManager em;

    public void save(Server server){
        em.persist(server);
    }

    public Server findOne(Long id){
        return em.find(Server.class, id);
    }

}
