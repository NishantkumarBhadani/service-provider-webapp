package com.serviceHub.backend.dto;

import lombok.AllArgsConstructor;
import lombok.Data;
import lombok.NoArgsConstructor;

@Data
@AllArgsConstructor
@NoArgsConstructor
public class BookingRequestDTO {
	  private String bookingDate;
	    private double totalAmount;
	    private int userId;
	    private int serviceId;
}
