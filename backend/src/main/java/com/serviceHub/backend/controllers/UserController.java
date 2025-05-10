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

    // Get all users
    @GetMapping("/allUsers")
    public ResponseEntity<List<UserDTO>> getAllUsers() {
        return ResponseEntity.ok(userService.getAllUsers());
    }
    

    // Get user by ID
    @GetMapping("/get/{id}")
    public ResponseEntity<UserDTO> getUserById(@PathVariable int id) {
    	UserDTO user = userService.getUserById(id);
        if (user != null)
            return ResponseEntity.ok(user);
        else
            return ResponseEntity.notFound().build();
    }

    // Create new user
    @PostMapping("/create")
    public ResponseEntity<UserDTO> createUser(@RequestBody UserDTO userDTO) {
        return ResponseEntity.ok(userService.createUser(userDTO));
    }
    

    // Update user
    @PutMapping("/edit")
    public ResponseEntity<UserDTO> updateUser(@RequestBody UserDTO userDTO) {
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
    
    @PostMapping(value="login")
	public UserDTO userLogin(@RequestParam("emailid") String email,
			@RequestParam("password") String password)
	{
		return userService.validateUser(email, password);
	}

}
