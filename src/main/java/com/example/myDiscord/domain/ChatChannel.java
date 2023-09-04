package com.example.myDiscord.domain;

import jakarta.persistence.*;
import lombok.Getter;
import lombok.Setter;

@Entity
@Getter @Setter
public class ChatChannel extends BaseEntity{

    @Id @GeneratedValue
    @Column(name = "chat_channel_id")
    private Long id;

    @ManyToOne(fetch = FetchType.LAZY)
    @JoinColumn(name = "server_id")
    private Server server;


    @Enumerated(EnumType.STRING)
    private ChannelType channelType;

}
