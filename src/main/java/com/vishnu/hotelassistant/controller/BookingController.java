package com.vishnu.hotelassistant.controller;

import com.vishnu.hotelassistant.dto.BookingRequest;
import com.vishnu.hotelassistant.dto.BookingResponse;
import com.vishnu.hotelassistant.entity.Booking;
import com.vishnu.hotelassistant.service.BookingService;
import jakarta.validation.Valid;
import org.springframework.web.bind.annotation.*;

import java.security.Principal;
import java.util.List;

@RestController
@RequestMapping("/api/bookings")
public class BookingController {

    private final BookingService service;

    public BookingController(BookingService service) {
        this.service = service;
    }

    @PostMapping
    public BookingResponse create(
            Principal principal,
            @Valid @RequestBody BookingRequest request
    ) {
        Booking booking = service.create(principal.getName(), request);
        return BookingResponse.from(booking);
    }

    @GetMapping("/mine")
    public List<BookingResponse> mine(Principal principal) {
        return service.mine(principal.getName())
                .stream()
                .map(BookingResponse::from)
                .toList();
    }

    @GetMapping("/{number}")
    public BookingResponse get(
            Principal principal,
            @PathVariable String number
    ) {
        Booking booking = service.findForUser(number, principal.getName());
        return BookingResponse.from(booking);
    }

    @DeleteMapping("/{number}")
    public BookingResponse cancel(
            Principal principal,
            @PathVariable String number
    ) {
        Booking booking = service.cancelForUser(number, principal.getName());
        return BookingResponse.from(booking);
    }
}