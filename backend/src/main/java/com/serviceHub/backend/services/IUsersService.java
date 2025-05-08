package com.serviceHub.backend.services;

import java.util.List;

import com.serviceHub.backend.dto.UserDTO;
import com.serviceHub.backend.dto.UserResponseDto;


public interface IUsersService {
	
	UserResponseDto createUser(UserDTO userdto);
	UserResponseDto updateUser(UserDTO userdto);
	String deleteUser(int id);
	UserResponseDto getUserById(int id);
//	List<UserResponseDto> getAllUsers();
	UserResponseDto validateUser(String emailid,String password);
}
