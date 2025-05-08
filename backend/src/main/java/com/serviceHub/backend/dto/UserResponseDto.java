package com.serviceHub.backend.dto;

import lombok.AllArgsConstructor;
import lombok.Data;
import lombok.NoArgsConstructor;

@Data
@AllArgsConstructor
@NoArgsConstructor
public class UserResponseDto {
	 private int userid;
	 private String name;
	 private String emailid;
	 private String role;

}


