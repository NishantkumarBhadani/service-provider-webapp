package com.serviceHub.backend.dto;

import java.time.LocalDate;

import java.util.List;

import com.fasterxml.jackson.annotation.JsonIgnoreProperties;

import jakarta.validation.constraints.Email;
import jakarta.validation.constraints.NotBlank;
import jakarta.validation.constraints.NotNull;
import jakarta.validation.constraints.Pattern;
import jakarta.validation.constraints.Size;
import lombok.AllArgsConstructor;
import lombok.Data;
import lombok.NoArgsConstructor;


@Data
@AllArgsConstructor
@NoArgsConstructor

public class UserDTO {
	private long id;
	
	@NotBlank(message="Full name is required")
	@Size(max=100,message="Full name can't ")
	private String fullName;
	@Email(message = "Invalid email format")
    @NotBlank(message = "Email is required")
	private String email;
	private String address;
	@Pattern(regexp = "^\\+?[0-9]{10,13}$", message = "Invalid phone number format")
	private String number;
	@NotNull(message = "Password is required")
    @Size(min = 8, message = "Password must be at least 8 characters")
	private String password;
//	@Past(message = "Date of birth must be in the past")
//	private LocalDate dob;
//	private enum Gender{
//		male,female
//	}
//	private Gender gender;
	private enum Role{
		customer,provider
	}
	private Role role;

	@JsonIgnoreProperties("user") // To prevent infinite recursion
	private List<BookingsDTO>bookings;

}
