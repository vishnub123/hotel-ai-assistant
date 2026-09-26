package com.vishnu.hotelassistant.entity;

import jakarta.persistence.*;
import lombok.*;

@Entity
@Table(name = "rooms")
@Getter
@Setter
@NoArgsConstructor
@AllArgsConstructor
@Builder
public class Room {

    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Long id;

    @Column(nullable = false, unique = true)
    private String roomNumber;

    @Column(nullable = false)
    private String type;

    @Column(nullable = false)
    private double pricePerNight;

    @Builder.Default
    @Column(nullable = false)
    private boolean available = true;

    @Column(length = 2000)
    private String description;

    @Column(length = 1000)
    private String imageUrl;
}