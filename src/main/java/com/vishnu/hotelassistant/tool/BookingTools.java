package com.vishnu.hotelassistant.tool;
import com.vishnu.hotelassistant.entity.Booking; import com.vishnu.hotelassistant.service.BookingService; import dev.langchain4j.agent.tool.Tool; import org.springframework.stereotype.Component;
@Component public class BookingTools {private final BookingService service; public BookingTools(BookingService s){service=s;}
 @Tool("Find a guest booking by booking number and authenticated guest email") public String findBooking(String bookingNumber,String guestEmail){Booking b=service.findForUser(bookingNumber,guestEmail);return format(b);}
 @Tool("Cancel a guest booking by booking number and authenticated guest email") public String cancelBooking(String bookingNumber,String guestEmail){Booking b=service.cancelForUser(bookingNumber,guestEmail);return "Booking "+b.getBookingNumber()+" is now "+b.getStatus()+".";}
 @Tool("List all bookings belonging to the authenticated guest") public String listMyBookings(String guestEmail){var list=service.mine(guestEmail);if(list.isEmpty())return "No bookings found.";return list.stream().map(this::format).reduce((a,b)->a+"\n"+b).orElse("No bookings found.");}
 private String format(Booking b){return "Booking %s | room %s (%s) | check-in %s | check-out %s | status %s | total %.2f".formatted(b.getBookingNumber(),b.getRoom().getRoomNumber(),b.getRoom().getType(),b.getCheckIn(),b.getCheckOut(),b.getStatus(),b.getTotalAmount());}
}
