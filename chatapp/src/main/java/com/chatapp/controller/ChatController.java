package com.chatapp.controller;

import com.chatapp.model.Message;
import com.chatapp.repository.MessageRepository;
import org.springframework.messaging.handler.annotation.MessageMapping;
import org.springframework.messaging.handler.annotation.Payload;
import org.springframework.messaging.simp.SimpMessagingTemplate;
import org.springframework.stereotype.Controller;

@Controller
public class ChatController {

    private final SimpMessagingTemplate messagingTemplate;
    private final MessageRepository repository;

    public ChatController(SimpMessagingTemplate messagingTemplate,
                          MessageRepository repository) {
        this.messagingTemplate = messagingTemplate;
        this.repository = repository;
    }

    // 🔥 MUST MATCH FRONTEND: "/app/sendMessage"
    @MessageMapping("/sendMessage")
    public void sendMessage(@Payload Message message) {

        // Save to MongoDB
        repository.save(message);

        // 🔥 MUST MATCH FRONTEND SUBSCRIBE: "/topic/room1"
        messagingTemplate.convertAndSend(
                "/topic/" + message.getChatId(),
                message
        );
    }
}