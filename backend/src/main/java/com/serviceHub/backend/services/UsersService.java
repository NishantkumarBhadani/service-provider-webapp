package com.serviceHub.backend.services;

import java.util.List;
import java.util.Optional;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.serviceHub.backend.dto.UserDTO;
import com.serviceHub.backend.dto.UserResponseDto;
import com.serviceHub.backend.entities.UserEntity;
import com.serviceHub.backend.repositories.IUserrepository;


@Service
public class UsersService implements IUsersService{
	
	@Autowired
	private IUserrepository userRepository;
	
	//covert userDto to useEntity
	private UserEntity convertToEntity(UserDTO userDTO) {
		return new UserEntity(
					userDTO.getUserid(),
					userDTO.getName(),
					userDTO.getEmailid(),
					userDTO.getPassword(),
					userDTO.getRole()
					
				);
	}
	
	//covert useEntity to userResponseDto
	private UserResponseDto convertToResponseDto(UserEntity userEntity) {
		return new UserResponseDto(
				userEntity.getUserid(),
				userEntity.getName(),
				userEntity.getEmailid(),
				userEntity.getRole()
			);
	}
	@Override
	public UserResponseDto createUser(UserDTO userdto) {
		// TODO Auto-generated method stub
		UserEntity userEntity=convertToEntity(userdto);
		UserEntity savedUser=userRepository.save(userEntity);
		return convertToResponseDto(savedUser);
	}

	@Override
	public UserResponseDto updateUser(UserDTO userdto) {
	   //checkinng user is present or not
	    UserEntity existingUser = userRepository.findById(userdto.getUserid())
	        .orElseThrow(() -> new RuntimeException("User not found with id: " + userdto.getUserid()));

	
	    existingUser.setName(userdto.getName());
	    existingUser.setEmailid(userdto.getEmailid());
	   
	    UserEntity updatedUser = userRepository.save(existingUser);

	
	    return convertToResponseDto(updatedUser);
	}


	@Override
	public String deleteUser(int id) {
		// Check if user exists
        Optional<UserEntity> userOptional = userRepository.findById(id);
        
        if (userOptional.isPresent()) {
            // If user exists, delete it
            userRepository.delete(userOptional.get());
            return "User is deleted successfully.";
        }
        
        return "User not found with ID: " + id;
	}

	@Override
	public UserResponseDto getUserById(int id) {
		 // Find user by ID
        Optional<UserEntity> userOptional = userRepository.findById(id);
        
        if (userOptional.isPresent()) {
            // Convert UserEntity to UserResponseDto and return it
            return convertToResponseDto(userOptional.get());
        }
        
        return null; // Or throw custom exception if needed
	}

//	@Override
//	public List<UserResponseDto> getAllUsers() {
//		List<UserEntity> users=userRepository.findAll();
//		
//		//conversion of each user to 
//		}

	@Override
	public UserResponseDto validateUser(String emailid, String password) {
		// TODO Auto-generated method stub
		
		Optional<UserEntity> optionalUser=userRepository.findByEmailid(emailid);
		if(optionalUser.isPresent()) {
			UserEntity userEntity=optionalUser.get();
		
			if(userEntity.getPassword().equals(password))
			{
				return convertToResponseDto(userEntity);
			}
		}
		return null;
	}
	

}
