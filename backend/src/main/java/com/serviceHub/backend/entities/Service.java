package com.serviceHub.backend.entities;

import java.io.Serializable;

import com.serviceHub.backend.entities.ServiceCategory;

import jakarta.persistence.Column;
import jakarta.persistence.Entity;
import jakarta.persistence.GeneratedValue;
import jakarta.persistence.GenerationType;
import jakarta.persistence.Id;
import jakarta.persistence.JoinColumn;
import jakarta.persistence.ManyToOne;
import jakarta.persistence.Table;



@Entity
@Table(name="services")
public class Service implements Serializable {
	@Id
	@Column(name="ServiceId")
	@GeneratedValue(strategy = GenerationType.IDENTITY)
	private Integer serviceId;
	
	@Column(name="ServiceName")
	private String ServiceName;
	
	
	@Column(name="ServicePrice")
	private int ServicePrice;
	@Column(name = "filename")
	private String filename;   	
	//---------------------------------------item mapped to category------------------------------------------//
	@ManyToOne
	 @JoinColumn(name="categoryId")
	private ServiceCategory servicecategory;
	//--------------------------------------------------------------------------------------------------------//
}
