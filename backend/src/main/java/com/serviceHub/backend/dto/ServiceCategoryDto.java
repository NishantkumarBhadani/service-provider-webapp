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
        property  = "catid"
)
public class ServiceCategoryDto {
	    private int catid;
	    private String catname;
	    private String catdesc;
	    private List<ServiceDto> services;
}
