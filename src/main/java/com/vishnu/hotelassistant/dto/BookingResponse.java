package com.vishnu.hotelassistant.dto;

import com.vishnu.hotelassistant.entity.Booking;
import com.vishnu.hotelassistant.entity.BookingStatus;

import java.time.LocalDate;

public record BookingResponse(
        Long id,
        String bookingNumber,
        UserSummaryResponse user,
        RoomResponse room,
        LocalDate checkIn,
        LocalDate checkOut,
        BookingStatus status,
        double totalAmount
) {
    public static BookingResponse from(Booking booking) {
        return new BookingResponse(
                booking.getId(),
                booking.getBookingNumber(),
                UserSummaryResponse.from(booking.getUser()),
                RoomResponse.from(booking.getRoom()),
                booking.getCheckIn(),
                booking.getCheckOut(),
                booking.getStatus(),
                booking.getTotalAmount()
        );
    }
}