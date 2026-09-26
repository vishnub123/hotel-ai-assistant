package com.vishnu.hotelassistant.ai;

import dev.langchain4j.service.MemoryId;
import dev.langchain4j.service.SystemMessage;
import dev.langchain4j.service.UserMessage;
import dev.langchain4j.service.spring.AiService;

@AiService
public interface HotelAssistant {
    @SystemMessage("You are the Hotel AI Assistant for a Spring Boot hotel booking system. Help authenticated guests with room and booking questions. Use tools whenever the user asks for booking information, booking lookup, or cancellation. Never invent booking data. Keep answers concise and professional.")
    String chat(@MemoryId String memoryId, @UserMessage String userMessage);
}
