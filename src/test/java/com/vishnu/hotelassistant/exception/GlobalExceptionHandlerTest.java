package com.vishnu.hotelassistant.exception;

import jakarta.servlet.http.HttpServletRequest;
import org.junit.jupiter.api.Test;
import org.springframework.http.ResponseEntity;
import org.springframework.web.server.ResponseStatusException;

import java.util.Map;

import static org.junit.jupiter.api.Assertions.*;

class GlobalExceptionHandlerTest {

    private final GlobalExceptionHandler handler = new GlobalExceptionHandler();

    @Test
    void responseStatusException_shouldReturnCorrectStatusAndMessage() {

        ResponseStatusException exception = new ResponseStatusException(
                org.springframework.http.HttpStatus.NOT_FOUND,
                "Room not found");

        HttpServletRequest request = org.mockito.Mockito.mock(HttpServletRequest.class);

        org.mockito.Mockito
                .when(request.getRequestURI())
                .thenReturn("/api/rooms/999");

        ResponseEntity<Map<String, Object>> response = handler.handleResponseStatusException(exception, request);

        assertEquals(404, response.getStatusCode().value());
        assertNotNull(response.getBody());

        assertEquals(404, response.getBody().get("status"));
        assertEquals("Room not found", response.getBody().get("message"));
        assertEquals("/api/rooms/999", response.getBody().get("path"));
    }

    @Test
    void genericException_shouldReturnInternalServerError() {

        Exception exception = new RuntimeException("Database failure");

        HttpServletRequest request = org.mockito.Mockito.mock(HttpServletRequest.class);

        org.mockito.Mockito
                .when(request.getRequestURI())
                .thenReturn("/api/test");

        ResponseEntity<Map<String, Object>> response = handler.handleGenericException(exception, request);

        assertEquals(500, response.getStatusCode().value());
        assertNotNull(response.getBody());

        assertEquals(500, response.getBody().get("status"));
        assertEquals(
                "An unexpected error occurred",
                response.getBody().get("message"));
        assertEquals("/api/test", response.getBody().get("path"));
    }
}