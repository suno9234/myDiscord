package com.example.myDiscord.utils;

import lombok.RequiredArgsConstructor;
import org.springframework.security.crypto.password.PasswordEncoder;
import org.springframework.stereotype.Component;

@Component
@RequiredArgsConstructor
public class PasswordUtil {
    private final PasswordEncoder passwordEncoder;

    public String encodePassword(String password){
        return passwordEncoder.encode(password);
    }

    public boolean matchesPassword(String rawPassword, String encodedPassword){
        return passwordEncoder.matches(rawPassword, encodedPassword);
    }

}
