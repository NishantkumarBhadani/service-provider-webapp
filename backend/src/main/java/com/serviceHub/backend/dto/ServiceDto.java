package com.serviceHub.backend.dto;


import java.util.List;

import com.fasterxml.jackson.annotation.JsonIdentityInfo;
import com.fasterxml.jackson.annotation.ObjectIdGenerators;

import lombok.*;

@Data
@AllArgsConstructor
@NoArgsConstructor
@JsonIdentityInfo(
        generator = ObjectIdGenerators.PropertyGenerator.class,
        property  = "serviceId"
)
public class ServiceDto {
	 private Integer serviceId;
	 private String serviceName;
	 private int servicePrice;
	 private String filename;
	 private ServiceCategoryDto cat;  
	 private List<BookingDto> bookings;
}
