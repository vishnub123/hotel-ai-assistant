package com.vishnu.hotelassistant.controller;

import com.vishnu.hotelassistant.dto.BookingResponse;
import com.vishnu.hotelassistant.dto.RoomResponse;
import com.vishnu.hotelassistant.entity.Booking;
import com.vishnu.hotelassistant.entity.Room;
import com.vishnu.hotelassistant.service.BookingService;
import com.vishnu.hotelassistant.service.RoomService;
import org.springframework.web.bind.annotation.*;

import java.util.List;

@RestController
@RequestMapping("/api/admin")
public class AdminController {

    private final RoomService rooms;
    private final BookingService bookings;

    public AdminController(RoomService rooms, BookingService bookings) {
        this.rooms = rooms;
        this.bookings = bookings;
    }

    @PutMapping("/rooms/{id}")
    public RoomResponse updateRoom(
            @PathVariable Long id,
            @RequestBody Room room) {
        Room updatedRoom = rooms.update(id, room);
        return RoomResponse.from(updatedRoom);
    }

    @DeleteMapping("/rooms/{id}")
    public void deleteRoom(@PathVariable Long id) {
        rooms.delete(id);
    }

    @GetMapping("/bookings")
    public List<BookingResponse> bookings() {
        return bookings.all()
                .stream()
                .map(BookingResponse::from)
                .toList();
    }
}