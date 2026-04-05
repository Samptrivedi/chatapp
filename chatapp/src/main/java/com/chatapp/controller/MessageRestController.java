package com.chatapp.controller;

import com.chatapp.model.Message;
import com.chatapp.repository.MessageRepository;
import org.springframework.web.bind.annotation.*;

import java.util.List;

@RestController
@RequestMapping("/api/messages")
public class MessageRestController {

    private final MessageRepository repository;

    public MessageRestController(MessageRepository repository) {
        this.repository = repository;
    }

    @GetMapping("/{chatId}")
    public List<Message> getMessages(@PathVariable String chatId) {
        return repository.findByChatId(chatId);
    }
}