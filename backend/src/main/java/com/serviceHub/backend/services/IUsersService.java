package com.serviceHub.backend.services;

import java.util.List;

import com.serviceHub.backend.dto.UserDTO;
import com.serviceHub.backend.dto.UserResponseDto;


public interface IUsersService {
	
	UserDTO createUser(UserDTO userdto);
	UserDTO updateUser(UserDTO userdto);
	String deleteUser(int id);
	UserDTO getUserById(int id);
	List<UserDTO> getAllUsers();
	UserDTO validateUser(String emailid,String password);
	
	
}
