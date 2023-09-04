package com.example.myDiscord.domain;

import jakarta.persistence.Column;
import jakarta.persistence.Entity;
import jakarta.persistence.GeneratedValue;
import jakarta.persistence.Id;
import lombok.Getter;
import lombok.Setter;

@Entity
@Getter @Setter
public class Server extends BaseEntity{
    @Id @GeneratedValue
    @Column(name = "server_id")
    private Long id;

    @Column(name = "server_name")
    private String name;
}
