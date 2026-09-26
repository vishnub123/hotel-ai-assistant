package com.vishnu.hotelassistant.controller;

import com.vishnu.hotelassistant.entity.AppUser;
import com.vishnu.hotelassistant.entity.Role;
import com.vishnu.hotelassistant.repository.AppUserRepository;
import org.junit.jupiter.api.BeforeEach;
import org.junit.jupiter.api.Test;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.boot.test.autoconfigure.web.servlet.AutoConfigureMockMvc;
import org.springframework.boot.test.context.SpringBootTest;
import org.springframework.security.crypto.password.PasswordEncoder;
import org.springframework.test.web.servlet.MockMvc;

import static org.springframework.test.web.servlet.request.MockMvcRequestBuilders.post;
import static org.springframework.test.web.servlet.result.MockMvcResultMatchers.*;

@SpringBootTest
@AutoConfigureMockMvc
class AuthControllerIntegrationTest {

    @Autowired
    private MockMvc mockMvc;

    @Autowired
    private AppUserRepository userRepository;

    @Autowired
    private PasswordEncoder passwordEncoder;

    @BeforeEach
    void setUp() {
        if (!userRepository.existsByEmail("test@example.com")) {
            userRepository.save(
                    AppUser.builder()
                            .name("Test User")
                            .email("test@example.com")
                            .password(passwordEncoder.encode("Test@123"))
                            .role(Role.USER)
                            .build());
        }
    }

    @Test
    void login_shouldReturnJwtForValidCredentials() throws Exception {

        mockMvc.perform(
                post("/api/auth/login")
                        .contentType("application/json")
                        .content("""
                                {
                                    "email": "test@example.com",
                                    "password": "Test@123"
                                }
                                """))
                .andExpect(status().isOk())
                .andExpect(jsonPath("$.token").exists())
                .andExpect(jsonPath("$.email").value("test@example.com"))
                .andExpect(jsonPath("$.role").value("USER"));
    }

    @Test
    void login_shouldReturn401ForInvalidPassword() throws Exception {

        mockMvc.perform(
                post("/api/auth/login")
                        .contentType("application/json")
                        .content("""
                                {
                                    "email": "test@example.com",
                                    "password": "WrongPassword"
                                }
                                """))
                .andExpect(status().isUnauthorized());
    }
}