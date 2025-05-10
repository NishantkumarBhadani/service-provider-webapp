package com.serviceHub.backend.dto;

import java.time.LocalDateTime;

import com.fasterxml.jackson.annotation.JsonIdentityInfo;
import com.fasterxml.jackson.annotation.ObjectIdGenerators;

import jakarta.validation.constraints.NotBlank;
import jakarta.validation.constraints.NotNull;
import lombok.AllArgsConstructor;
import lombok.Data;
import lombok.NoArgsConstructor;

@Data
@AllArgsConstructor
@NoArgsConstructor

@JsonIdentityInfo(
        generator = ObjectIdGenerators.PropertyGenerator.class,
        property  = "id"
)
public class BookingDto {
	private int id;
	
	@NotNull(message = "User is required")
    private UserDTO user;
	

    @NotNull(message = "Service is required")
    private ServiceDto book;
	
	  @NotBlank(message = "Payment is required")
	    private String razorpayOrderId;
	  
	  @NotNull(message = "Total amount is required")
	    private double totalAmount;
	  
	  private String bookingDate;
	  
	  private LocalDateTime createdAt = LocalDateTime.now();
	  
	  private String status = "Processing";
}
