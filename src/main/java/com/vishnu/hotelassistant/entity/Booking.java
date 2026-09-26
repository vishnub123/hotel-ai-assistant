package com.vishnu.hotelassistant.entity;

import jakarta.persistence.*;
import lombok.*;
import java.time.LocalDate;

@Entity @Table(name="bookings") @Getter @Setter @NoArgsConstructor @AllArgsConstructor @Builder
public class Booking {
 @Id @GeneratedValue(strategy=GenerationType.IDENTITY) private Long id;
 @Column(nullable=false,unique=true) private String bookingNumber;
 @ManyToOne(optional=false) private AppUser user;
 @ManyToOne(optional=false) private Room room;
 @Column(nullable=false) private LocalDate checkIn;
 @Column(nullable=false) private LocalDate checkOut;
 @Enumerated(EnumType.STRING) @Column(nullable=false) private BookingStatus status;
 @Column(nullable=false) private double totalAmount;
}
