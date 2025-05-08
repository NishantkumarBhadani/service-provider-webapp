package com.serviceHub.backend.controllers;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import com.serviceHub.backend.dto.UserDTO;
import com.serviceHub.backend.dto.UserResponseDto;
import com.serviceHub.backend.services.UsersService;

@RestController
@RequestMapping("/api/users")
public class UserController {

    @Autowired
    private UsersService userService;

//    // Get all users
//    @GetMapping("/")
//    public ResponseEntity<List<UserResponseDto>> getAllUsers() {
//        return ResponseEntity.ok(userService.getAllUsers());
//    }

    // Get user by ID
    @GetMapping("/get/{id}")
    public ResponseEntity<UserResponseDto> getUserById(@PathVariable int id) {
        UserResponseDto user = userService.getUserById(id);
        if (user != null)
            return ResponseEntity.ok(user);
        else
            return ResponseEntity.notFound().build();
    }

    // Create new user
    @PostMapping("/create")
    public ResponseEntity<UserResponseDto> createUser(@RequestBody UserDTO userDTO) {
        return ResponseEntity.ok(userService.createUser(userDTO));
    }

    // Update user
    @PutMapping("/edit")
    public ResponseEntity<UserResponseDto> updateUser(@RequestBody UserDTO userDTO) {
        return ResponseEntity.ok(userService.updateUser(userDTO));
    }

    // Delete user
    @DeleteMapping("/delete/{id}")
    public ResponseEntity<String> deleteUser(@PathVariable int id) {
        return ResponseEntity.ok(userService.deleteUser(id));
    }

//    // Login 
//    @PostMapping("/login")
//    public ResponseEntity<UserResponseDto> loginUser(@RequestParam String emailid, @RequestParam String password) {
//        UserResponseDto user = userService.validateUser(emailid, password);
//        if (user != null)
//            return ResponseEntity.ok(user);
//        else
//            return ResponseEntity.status(401).body(null);
//    }
    
    @PostMapping("/login")
    public ResponseEntity<UserResponseDto> loginUser(@RequestBody UserDTO userDTO) {
        UserResponseDto user = userService.validateUser(userDTO.getEmailid(), userDTO.getPassword());
        if (user != null)
            return ResponseEntity.ok(user);
        else
            return ResponseEntity.status(401).body(null);
    }

}
