package com.vishnu.hotelassistant.service;

import com.vishnu.hotelassistant.dto.AuthResponse;
import com.vishnu.hotelassistant.dto.LoginRequest;
import com.vishnu.hotelassistant.dto.RegisterRequest;
import com.vishnu.hotelassistant.entity.AppUser;
import com.vishnu.hotelassistant.entity.Role;
import com.vishnu.hotelassistant.repository.AppUserRepository;
import com.vishnu.hotelassistant.security.JwtService;
import org.junit.jupiter.api.BeforeEach;
import org.junit.jupiter.api.Test;
import org.junit.jupiter.api.extension.ExtendWith;
import org.mockito.Mock;
import org.mockito.junit.jupiter.MockitoExtension;
import org.springframework.security.crypto.password.PasswordEncoder;
import org.springframework.web.server.ResponseStatusException;

import java.util.Optional;

import static org.junit.jupiter.api.Assertions.*;
import static org.mockito.ArgumentMatchers.any;
import static org.mockito.Mockito.*;

@ExtendWith(MockitoExtension.class)
class AuthServiceTest {

    @Mock
    private AppUserRepository repository;

    @Mock
    private PasswordEncoder passwordEncoder;

    @Mock
    private JwtService jwtService;

    private AuthService authService;

    @BeforeEach
    void setUp() {
        authService = new AuthService(
                repository,
                passwordEncoder,
                jwtService);
    }

    @Test
    void login_shouldReturnTokenForValidCredentials() {
        AppUser user = AppUser.builder()
                .id(1L)
                .name("Demo Guest")
                .email("guest@hotel.local")
                .password("encoded-password")
                .role(Role.USER)
                .build();

        when(repository.findByEmail("guest@hotel.local"))
                .thenReturn(Optional.of(user));

        when(passwordEncoder.matches("Guest@123", "encoded-password"))
                .thenReturn(true);

        when(jwtService.generate("guest@hotel.local"))
                .thenReturn("test-jwt-token");

        AuthResponse response = authService.login(
                new LoginRequest(
                        "guest@hotel.local",
                        "Guest@123"));

        assertNotNull(response);
        assertEquals("test-jwt-token", response.token());
        assertEquals("guest@hotel.local", response.email());
        assertEquals("USER", response.role());

        verify(repository).findByEmail("guest@hotel.local");
        verify(passwordEncoder).matches(
                "Guest@123",
                "encoded-password");
        verify(jwtService).generate("guest@hotel.local");
    }

    @Test
    void login_shouldRejectInvalidPassword() {
        AppUser user = AppUser.builder()
                .id(1L)
                .name("Demo Guest")
                .email("guest@hotel.local")
                .password("encoded-password")
                .role(Role.USER)
                .build();

        when(repository.findByEmail("guest@hotel.local"))
                .thenReturn(Optional.of(user));

        when(passwordEncoder.matches("WrongPassword", "encoded-password"))
                .thenReturn(false);

        ResponseStatusException exception = assertThrows(
                ResponseStatusException.class,
                () -> authService.login(
                        new LoginRequest(
                                "guest@hotel.local",
                                "WrongPassword")));

        assertEquals(401, exception.getStatusCode().value());
        verify(jwtService, never()).generate(any());
    }

    @Test
    void login_shouldRejectUnknownUser() {
        when(repository.findByEmail("unknown@hotel.local"))
                .thenReturn(Optional.empty());

        ResponseStatusException exception = assertThrows(
                ResponseStatusException.class,
                () -> authService.login(
                        new LoginRequest(
                                "unknown@hotel.local",
                                "Password123")));

        assertEquals(401, exception.getStatusCode().value());
        verify(passwordEncoder, never()).matches(any(), any());
        verify(jwtService, never()).generate(any());
    }
}