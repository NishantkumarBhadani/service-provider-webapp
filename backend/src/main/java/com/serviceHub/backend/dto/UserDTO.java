package com.serviceHub.backend.dto;


import java.util.List;

import com.fasterxml.jackson.annotation.JsonIdentityInfo;
import com.fasterxml.jackson.annotation.ObjectIdGenerators;

import jakarta.validation.constraints.*;
import lombok.AllArgsConstructor;
import lombok.Data;
import lombok.NoArgsConstructor;

@Data
@AllArgsConstructor
@NoArgsConstructor

@JsonIdentityInfo(
		generator = ObjectIdGenerators.PropertyGenerator.class,
		property  = "userid"
)
public class UserDTO {
	private int userid;
	private String name;
    private String emailid;
    private String password;
    private String role;
    private List<BookingDto> bookings;
	
}
