package com.vishnu.hotelassistant.dto;

import com.vishnu.hotelassistant.entity.Room;

public record RoomResponse(
        Long id,
        String roomNumber,
        String type,
        double pricePerNight,
        boolean available,
        String description,
        String imageUrl
) {
    public static RoomResponse from(Room room) {
        return new RoomResponse(
                room.getId(),
                room.getRoomNumber(),
                room.getType(),
                room.getPricePerNight(),
                room.isAvailable(),
                room.getDescription(),
                room.getImageUrl()
        );
    }
}
