package com.example.myDiscord.utils;

import io.jsonwebtoken.Claims;
import io.jsonwebtoken.Header;
import io.jsonwebtoken.Jwts;
import io.jsonwebtoken.SignatureAlgorithm;
import org.springframework.beans.factory.annotation.Value;
import org.springframework.security.core.userdetails.UserDetails;

import java.util.Date;
import java.util.HashMap;
import java.util.Map;
import java.util.function.Function;

public class JwtUtil {

    public static final Long JWT_TOKEN_VALIDITY = 30*60*1000L; //30분

    public static boolean isExpired(String token, String secret){
        return Jwts.parser().setSigningKey(secret).parseClaimsJws(token).getBody()
                .getExpiration().before(new Date());
    }

    public static String generateJwt(String email, String secret){
        Claims claims = Jwts.claims();
        claims.put("email", email);

        return Jwts.builder()
                .setClaims(claims)
                .setIssuedAt(new Date(System.currentTimeMillis())) //발생시간
                .setExpiration(new Date(System.currentTimeMillis()+JWT_TOKEN_VALIDITY)) //만료시간
                .signWith(SignatureAlgorithm.HS256,secret)
                .compact();
    }

    public static String getUsernameFromToken(String token , String secret) {
        return Jwts.parser().setSigningKey(secret).parseClaimsJws(token)
                .getBody().get("userName",String.class);
    }


    public static String getEmail(String token,String secret){
        return Jwts.parser().setSigningKey(secret).parseClaimsJws(token)
                .getBody().get("email",String.class);
    }


    //토큰 만료 확인


}
