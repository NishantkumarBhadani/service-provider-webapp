package com.serviceHub.backend.dto;


import jakarta.validation.constraints.*;
import lombok.AllArgsConstructor;
import lombok.Data;
import lombok.NoArgsConstructor;

@Data
@AllArgsConstructor
@NoArgsConstructor
public class UserDTO {
	private int userid;
	private String name;
    private String emailid;
    private String password;
    private String role;

	
}
