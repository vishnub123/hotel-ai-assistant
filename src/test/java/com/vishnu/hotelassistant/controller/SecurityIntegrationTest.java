package com.vishnu.hotelassistant.controller;

import org.junit.jupiter.api.Test;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.boot.test.autoconfigure.web.servlet.AutoConfigureMockMvc;
import org.springframework.boot.test.context.SpringBootTest;
import org.springframework.security.test.context.support.WithMockUser;
import org.springframework.test.web.servlet.MockMvc;

import static org.springframework.test.web.servlet.request.MockMvcRequestBuilders.get;
import static org.springframework.test.web.servlet.result.MockMvcResultMatchers.status;

@SpringBootTest
@AutoConfigureMockMvc
class SecurityIntegrationTest {

    @Autowired
    private MockMvc mockMvc;

    @Test
    void unauthenticatedRequestToRooms_shouldReturnForbidden() throws Exception {

        mockMvc.perform(
                get("/api/rooms"))
                .andExpect(status().isForbidden());
    }

    @Test
    void unauthenticatedRequestToAdmin_shouldReturnForbidden() throws Exception {

        mockMvc.perform(
                get("/api/admin/bookings"))
                .andExpect(status().isForbidden());
    }

    @Test
    @WithMockUser(username = "guest@hotel.local", roles = "USER")
    void userRequestToAdmin_shouldReturnForbidden() throws Exception {

        mockMvc.perform(
                get("/api/admin/bookings"))
                .andExpect(status().isForbidden());
    }

    @Test
    @WithMockUser(username = "admin@hotel.local", roles = "ADMIN")
    void adminRequestToAdmin_shouldReturnOk() throws Exception {

        mockMvc.perform(
                get("/api/admin/bookings"))
                .andExpect(status().isOk());
    }

    @Test
    @WithMockUser(username = "guest@hotel.local", roles = "USER")
    void userRequestToRooms_shouldReturnOk() throws Exception {

        mockMvc.perform(
                get("/api/rooms"))
                .andExpect(status().isOk());
    }
}