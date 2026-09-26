package com.vishnu.hotelassistant.dto;

import com.vishnu.hotelassistant.entity.AppUser;
import com.vishnu.hotelassistant.entity.Role;

public record UserSummaryResponse(
        Long id,
        String name,
        String email,
        Role role
) {
    public static UserSummaryResponse from(AppUser user) {
        return new UserSummaryResponse(
                user.getId(),
                user.getName(),
                user.getEmail(),
                user.getRole()
        );
    }
}
