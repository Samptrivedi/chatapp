package com.chatapp.repository;

import com.chatapp.model.Message;
import org.springframework.data.mongodb.repository.MongoRepository;
import org.springframework.stereotype.Repository;

import java.util.List;

@Repository
public interface MessageRepository extends MongoRepository<Message, String> {

    // 🔥 ADD THIS METHOD (IMPORTANT FIX)
    List<Message> findByChatId(String chatId);
}