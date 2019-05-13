package com.kpi.voting.domain;

import com.kpi.voting.dao.MessageRepository;
import com.kpi.voting.dao.entity.Message;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.ResponseEntity;
import org.springframework.stereotype.Service;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.RequestBody;

import javax.validation.Valid;
import java.util.HashMap;
import java.util.List;
import java.util.Map;
import java.util.Optional;

@Service
public class MessageService {

    @Autowired
    private MessageRepository messageRepository;

    public List<Message> getAllMessages() {
        return messageRepository.findAll();
    }

    public ResponseEntity<Message> getMessageById(Long messageId){
        Optional<Message> mmessage = messageRepository.findById(messageId);
        Message message = mmessage.get();
        return ResponseEntity.ok().body(message);
    }

    public Message createMessage(Message message) {

        return messageRepository.save(message);
    }

    public ResponseEntity<Message> updateMessage(Long messageId, Message messageDetails) {
        Optional<Message> mmessage = messageRepository.findById(messageId);
        Message message = mmessage.get();
        message.setText(messageDetails.getText());
        message.setTime(messageDetails.getTime());

        final Message updatedMessage = messageRepository.save(message);
        return ResponseEntity.ok(updatedMessage);
    }

    public Map<String, Boolean> deleteMessage(Long messageId){
        Optional<Message> mmessage = messageRepository.findById(messageId);
        Message message = mmessage.get();
        messageRepository.delete(message);
        Map<String, Boolean> response = new HashMap<>();
        response.put("deleted", Boolean.TRUE);
        return response;
    }
}
