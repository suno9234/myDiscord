package com.example.myDiscord.domain;

import jakarta.persistence.*;
import lombok.Getter;
import lombok.Setter;

@Entity
@Getter @Setter
public class Friendship extends BaseEntity {
    @Id @GeneratedValue
    @Column(name = "friendship_id")
    private Long id;

    @ManyToOne(fetch = FetchType.LAZY)
    User userA;

    @ManyToOne(fetch = FetchType.LAZY)
    User userB;

    @Enumerated(EnumType.STRING)
    private FriendshipStatus status;

}
