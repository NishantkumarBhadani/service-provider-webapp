package com.serviceHub.backend.services;

import java.util.List;
import java.util.Optional;
import java.util.stream.Collectors;

import org.modelmapper.ModelMapper;
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
	
	private final ModelMapper mapper = new ModelMapper();
	
//	//covert userDto to useEntity
//	private UserEntity convertToEntity(UserDTO userDTO) {
//		return new UserEntity(
//					userDTO.getUserid(),
//					userDTO.getName(),
//					userDTO.getEmailid(),
//					userDTO.getPassword(),
//					userDTO.getRole()
//					
//				);
//	}
//	
//	//covert useEntity to userResponseDto
//	private UserResponseDto convertToResponseDto(UserEntity userEntity) {
//		return new UserResponseDto(
//				userEntity.getUserid(),
//				userEntity.getName(),
//				userEntity.getEmailid(),
//				userEntity.getRole()
//			);
//	}
	@Override
	public UserDTO createUser(UserDTO user) {
		// TODO Auto-generated method stub
		UserEntity userEntity=mapper.map(user, UserEntity.class);
		return mapper.map(userRepository.save(userEntity), UserDTO.class);
	}


	@Override
	public UserDTO updateUser(UserDTO user) {
	   //checkinng user is present or not
		UserEntity userEntity = mapper.map(user, UserEntity.class);
		if (userEntity.getUserid()>0){
			return mapper.map(userRepository.save(userEntity), UserDTO.class);
		}
		return null;
		
	}


	@Override
	public String deleteUser(int id) {
		// Check if user exists
        Optional<UserEntity> user = userRepository.findById(id);
        
        if (user.isPresent()) {
            // If user exists, delete it
            userRepository.delete(user.get());
            return "User is deleted successfully.";
        }
        
        return "User not found with ID: " + id;
	}

	@Override
	public UserDTO getUserById(int id) {
		 // Find user by ID
        Optional<UserEntity> user = userRepository.findById(id);
        
        if (user.isPresent()) {
        	return mapper.map(user.get(), UserDTO.class);
        }
        
        return null; // Or throw custom exception if needed
	}

	@Override
	public List<UserDTO> getAllUsers() {
	    List<UserEntity> entities = userRepository.findAll();

	   
	    return entities.stream().map(entity -> mapper.map(entity, UserDTO.class)).collect(Collectors.toList());
	}


	@Override
	public UserDTO validateUser(String emailid, String password) {
	    Optional<UserEntity> user = userRepository.findByEmailid(emailid);

	    if (user.isPresent()) {
	        if (user.get().getPassword().equals(password)) {
	            return mapper.map(user.get(), UserDTO.class);
	        }
	    }

	    return null;
	}

	

}
