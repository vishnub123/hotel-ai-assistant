package com.vishnu.hotelassistant.repository;
import com.vishnu.hotelassistant.entity.*; import org.springframework.data.jpa.repository.JpaRepository; import java.util.*;
public interface BookingRepository extends JpaRepository<Booking,Long>{ Optional<Booking> findByBookingNumber(String bookingNumber); List<Booking> findByUserEmailOrderByCheckInDesc(String email); Optional<Booking> findByBookingNumberAndUserEmail(String bookingNumber,String email); }
