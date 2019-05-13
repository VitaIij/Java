package com.kpi.voting.controller;

import com.kpi.voting.dao.entity.Message;
import com.kpi.voting.domain.MessageService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import javax.validation.Valid;
import java.util.HashMap;
import java.util.List;
import java.util.Map;
import java.util.Optional;

@RestController
//@CrossOrigin(origins = {"http://localhost:4200"})
@RequestMapping("/api/v1")
public class MessageController {
    @Autowired
    private MessageService messageService;

    @GetMapping("/chat")
    public List<Message> getAllMessages() {
        return messageService.getAllMessages();
    }

    @GetMapping("/chat/{id}")
    public ResponseEntity<Message> getMessageById(@PathVariable(value = "id") Long messageId){
        return messageService.getMessageById(messageId);
    }

    @PostMapping("/chat")
    public Message createMessage(@Valid @RequestBody Message message) {

        return messageService.createMessage(message);
    }

    @PutMapping("/chat/{id}")
    public ResponseEntity<Message> updateMessage(@PathVariable(value = "id") Long messageId,
                                                   @Valid @RequestBody Message messageDetails) {
        return messageService.updateMessage(messageId, messageDetails);
    }

    @DeleteMapping("/chat/{id}")
    public Map<String, Boolean> deleteMessage(@PathVariable(value = "id") Long messageId){

        return messageService.deleteMessage(messageId);
    }
}
