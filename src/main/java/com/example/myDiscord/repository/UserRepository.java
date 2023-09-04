package com.example.myDiscord.repository;

import com.example.myDiscord.domain.User;
import jakarta.persistence.EntityManager;
import lombok.RequiredArgsConstructor;
import org.springframework.stereotype.Repository;

import java.util.List;

@Repository
@RequiredArgsConstructor
public class UserRepository {

    private final EntityManager em;

    public void save(User user){
        em.persist(user);
    }

    public User findOne(Long id){
        return em.find(User.class, id);
    }

    public List<User> findAll(){
        return em.createQuery("select u from User u", User.class).getResultList();
    }

    public List<User> findByEmail(String email){
        return em.createQuery("select u from User u where u.email = :email", User.class)
                .setParameter("email",email)
                .getResultList();
    }

    public List<User> findByUsername(String username){
        return em.createQuery("select u from User u where u.username = :username", User.class)
                .setParameter("username",username)
                .getResultList();
    }

}
