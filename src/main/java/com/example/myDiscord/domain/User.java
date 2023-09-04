package com.example.myDiscord.domain;

import jakarta.persistence.*;
import lombok.Getter;
import lombok.Setter;

@Entity
@Getter @Setter
public class User extends BaseEntity{

    @Id @GeneratedValue
    @Column(name = "user_id")
    private Long id;

    private String email;

    private String username;

    private String password;

    private String profile_image;

    @Enumerated(EnumType.STRING)
    private UserStatus status;
}
