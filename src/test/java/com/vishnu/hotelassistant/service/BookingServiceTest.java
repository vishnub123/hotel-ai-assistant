package com.vishnu.hotelassistant.service;

import com.vishnu.hotelassistant.dto.BookingRequest;
import com.vishnu.hotelassistant.entity.AppUser;
import com.vishnu.hotelassistant.entity.Booking;
import com.vishnu.hotelassistant.entity.BookingStatus;
import com.vishnu.hotelassistant.entity.Role;
import com.vishnu.hotelassistant.entity.Room;
import com.vishnu.hotelassistant.repository.AppUserRepository;
import com.vishnu.hotelassistant.repository.BookingRepository;
import com.vishnu.hotelassistant.repository.RoomRepository;
import org.junit.jupiter.api.BeforeEach;
import org.junit.jupiter.api.Test;
import org.junit.jupiter.api.extension.ExtendWith;
import org.mockito.Mock;
import org.mockito.junit.jupiter.MockitoExtension;
import org.springframework.web.server.ResponseStatusException;

import java.time.LocalDate;
import java.util.Optional;

import static org.junit.jupiter.api.Assertions.*;
import static org.mockito.Mockito.*;

@ExtendWith(MockitoExtension.class)
class BookingServiceTest {

    @Mock
    private BookingRepository bookingRepository;

    @Mock
    private RoomRepository roomRepository;

    @Mock
    private AppUserRepository userRepository;

    private BookingService bookingService;

    @BeforeEach
    void setUp() {
        bookingService = new BookingService(
                bookingRepository,
                roomRepository,
                userRepository);
    }

    @Test
    void create_shouldCreateConfirmedBooking() {
        Room room = Room.builder()
                .id(1L)
                .roomNumber("101")
                .type("Deluxe King")
                .pricePerNight(120)
                .available(true)
                .build();

        AppUser user = AppUser.builder()
                .id(2L)
                .name("Demo Guest")
                .email("guest@hotel.local")
                .role(Role.USER)
                .build();

        BookingRequest request = new BookingRequest(
                1L,
                LocalDate.of(2026, 11, 1),
                LocalDate.of(2026, 11, 3));

        when(roomRepository.findById(1L))
                .thenReturn(Optional.of(room));

        when(userRepository.findByEmail("guest@hotel.local"))
                .thenReturn(Optional.of(user));

        when(bookingRepository.save(any(Booking.class)))
                .thenAnswer(invocation -> invocation.getArgument(0));

        Booking booking = bookingService.create(
                "guest@hotel.local",
                request);

        assertNotNull(booking);
        assertEquals(BookingStatus.CONFIRMED, booking.getStatus());
        assertEquals("guest@hotel.local", booking.getUser().getEmail());
        assertEquals("101", booking.getRoom().getRoomNumber());
        assertEquals(240.0, booking.getTotalAmount());

        verify(bookingRepository).save(any(Booking.class));
    }

    @Test
    void create_shouldRejectInvalidDates() {
        BookingRequest request = new BookingRequest(
                1L,
                LocalDate.of(2026, 11, 3),
                LocalDate.of(2026, 11, 1));

        ResponseStatusException exception = assertThrows(
                ResponseStatusException.class,
                () -> bookingService.create(
                        "guest@hotel.local",
                        request));

        assertEquals(400, exception.getStatusCode().value());

        verify(roomRepository, never()).findById(any());
        verify(bookingRepository, never()).save(any());
    }

    @Test
    void create_shouldRejectUnavailableRoom() {
        Room room = Room.builder()
                .id(1L)
                .roomNumber("101")
                .type("Deluxe King")
                .pricePerNight(120)
                .available(false)
                .build();

        BookingRequest request = new BookingRequest(
                1L,
                LocalDate.of(2026, 11, 1),
                LocalDate.of(2026, 11, 3));

        when(roomRepository.findById(1L))
                .thenReturn(Optional.of(room));

        ResponseStatusException exception = assertThrows(
                ResponseStatusException.class,
                () -> bookingService.create(
                        "guest@hotel.local",
                        request));

        assertEquals(409, exception.getStatusCode().value());

        verify(bookingRepository, never()).save(any());
    }
}