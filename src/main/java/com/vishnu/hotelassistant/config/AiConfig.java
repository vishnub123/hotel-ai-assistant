package com.vishnu.hotelassistant.config;

import dev.langchain4j.memory.ChatMemory;
import dev.langchain4j.memory.chat.ChatMemoryProvider;
import dev.langchain4j.memory.chat.MessageWindowChatMemory;
import org.springframework.context.annotation.Bean;
import org.springframework.context.annotation.Configuration;

import java.util.Map;
import java.util.concurrent.ConcurrentHashMap;

@Configuration
public class AiConfig {

    @Bean
    public ChatMemoryProvider chatMemoryProvider() {

        Map<Object, ChatMemory> memories = new ConcurrentHashMap<>();

        return memoryId -> memories.computeIfAbsent(
                memoryId,
                id -> MessageWindowChatMemory.withMaxMessages(20));
    }
}