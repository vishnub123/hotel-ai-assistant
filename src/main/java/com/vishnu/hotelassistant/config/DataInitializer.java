package com.vishnu.hotelassistant.config;

import com.vishnu.hotelassistant.entity.AppUser;
import com.vishnu.hotelassistant.entity.Role;
import com.vishnu.hotelassistant.entity.Room;
import com.vishnu.hotelassistant.repository.AppUserRepository;
import com.vishnu.hotelassistant.repository.RoomRepository;
import org.springframework.boot.CommandLineRunner;
import org.springframework.context.annotation.Bean;
import org.springframework.context.annotation.Configuration;
import org.springframework.security.crypto.password.PasswordEncoder;

@Configuration
public class DataInitializer {

//     @Bean
    CommandLineRunner seed(
            AppUserRepository users,
            RoomRepository rooms,
            PasswordEncoder encoder) {
        return args -> {

            if (!users.existsByEmail("admin@hotel.local")) {
                users.save(
                        AppUser.builder()
                                .name("Hotel Admin")
                                .email("admin@hotel.local")
                                .password(encoder.encode("Admin@123"))
                                .role(Role.ADMIN)
                                .build());
            }

            if (!users.existsByEmail("guest@hotel.local")) {
                users.save(
                        AppUser.builder()
                                .name("Demo Guest")
                                .email("guest@hotel.local")
                                .password(encoder.encode("Guest@123"))
                                .role(Role.USER)
                                .build());
            }

            if (rooms.count() == 0) {
                rooms.save(
                        Room.builder()
                                .roomNumber("101")
                                .type("Deluxe King")
                                .pricePerNight(120)
                                .available(true)
                                .description("Deluxe room with king bed and breakfast.")
                                .build());

                rooms.save(
                        Room.builder()
                                .roomNumber("202")
                                .type("Executive Suite")
                                .pricePerNight(220)
                                .available(true)
                                .description("Large suite with living area and city view.")
                                .build());

                rooms.save(
                        Room.builder()
                                .roomNumber("303")
                                .type("Standard Queen")
                                .pricePerNight(90)
                                .available(true)
                                .description("Comfortable queen room for two guests.")
                                .build());
            }
        };
    }
}