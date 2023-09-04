package com.example.myDiscord.repository;

import com.example.myDiscord.domain.Friendship;
import com.example.myDiscord.domain.FriendshipStatus;
import jakarta.persistence.EntityManager;
import lombok.RequiredArgsConstructor;
import org.springframework.stereotype.Repository;

import java.util.List;

@Repository
@RequiredArgsConstructor
public class FriendshipRepository {

    private final EntityManager em;

    public void save(Friendship friendship){
        em.persist(friendship);
    }

    public List<Friendship> findByUserId(Long userAId, Long userBId){
        return em.createQuery("select f from Friendship f where f.userA.id = :userAId and f.userB.id = :userBId",Friendship.class)
                .setParameter("userAId",userAId)
                .setParameter("userBId",userBId)
                .getResultList();
    }

    public List<Friendship> findAllSendRequestByUserId(Long userId){
        return em.createQuery("select f from Friendship f where f.userA.id = :userId and f.status = :status",Friendship.class)
                .setParameter("status", FriendshipStatus.SEND)
                .setParameter("userId",userId)
                .getResultList();
    }
    public List<Friendship> findAllReceivedRequestByUserId(Long userId){
        return em.createQuery("select f from Friendship f where f.userA.id = :userId and f.status = :status",Friendship.class)
                .setParameter("status", FriendshipStatus.RECEIVE)
                .setParameter("userId",userId)
                .getResultList();
    }
    public List<Friendship> findAllBannedByUserId(Long userId){
        return em.createQuery("select f from Friendship f where f.userA.id = :userId and f.status = :status",Friendship.class)
                .setParameter("status", FriendshipStatus.BANNED)
                .setParameter("userId",userId)
                .getResultList();
    }
    public List<Friendship> findAllFriendsByUserId(Long userId){
        return em.createQuery("select f from Friendship f where f.userA.id = :userId and f.status = :status",Friendship.class)
                .setParameter("status", FriendshipStatus.FRIEND)
                .setParameter("userId",userId)
                .getResultList();
    }


}
