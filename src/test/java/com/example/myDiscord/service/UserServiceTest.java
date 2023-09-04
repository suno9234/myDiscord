package com.example.myDiscord.service;

import com.example.myDiscord.domain.User;
import com.example.myDiscord.repository.UserRepository;
import com.example.myDiscord.utils.PasswordUtil;
import lombok.extern.slf4j.Slf4j;
import org.junit.Test;
import org.junit.runner.RunWith;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.boot.test.context.SpringBootTest;
import org.springframework.test.context.junit4.SpringRunner;
import org.springframework.transaction.annotation.Transactional;

import static org.junit.Assert.*;

@RunWith(SpringRunner.class)
@SpringBootTest
@Transactional
@Slf4j
public class UserServiceTest {

    @Autowired
    private UserRepository userRepository;
    @Autowired
    private UserService userService;
    @Autowired
    private PasswordUtil passwordUtil;

    @Test
    public void join() throws Exception {
        //given
        User user = getMember();

        // 다른 객체를 반환하는 이유는 member을 저장하는게 아니라 service에서
        // 비밀번호가 암호화된 encodedMember을 새로 생성하여 저장하기 때문임
        //when
        Long savedId = userService.join(user);

        User findUser = userRepository.findOne(savedId);
        //then
        assertEquals(user.getUsername(), findUser.getUsername());
        assertEquals(user.getEmail(), findUser.getEmail());
        assertTrue(passwordUtil.matchesPassword(user.getPassword(), findUser.getPassword()));

    }

    @Test
    public void invalidEmail() throws Exception{
        //given
        User user = new User();
        user.setEmail("abssd");

        //when
        userService.join(user);

        //then


    }

    private static User getMember() {
        User user = new User();
        user.setEmail("ssh9234@gmail.com");
        user.setPassword("as39as!@#$");
        user.setUsername("suno");
        return user;
    }

    @Test
    public void login() throws Exception {
        //given
        User user = getMember();
        userService.join(user);

        //when
        //String token =  userService.login(user.getEmail(), user.getPassword());

        //then
        //assertNotNull(token);
    }

    @Test(expected = IllegalStateException.class)
    public void email_not_exist() throws Exception {
        // given
        User user = getMember();
        userService.join(user);

        //when
        userService.login("abcde@naver.com","sdat");

        //then
        fail("Expected exception");
    }

    @Test(expected = IllegalStateException.class)
    public void password_missmatch() throws Exception {
        User user = getMember();
        userService.join(user);
        // when
        userService.login(user.getEmail(),"safddt");

        //then
        fail("Expected exception");
    }

}