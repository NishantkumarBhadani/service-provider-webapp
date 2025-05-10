package com.serviceHub.backend.entities;

import java.util.List;

import jakarta.persistence.Column;
import jakarta.persistence.Entity;
import jakarta.persistence.GeneratedValue;
import jakarta.persistence.GenerationType;
import jakarta.persistence.Id;
import jakarta.persistence.OneToMany;
import jakarta.persistence.Table;
import lombok.AllArgsConstructor;
import lombok.Data;
import lombok.NoArgsConstructor;


@Entity
@Table(name = "service_categories")
@Data
@NoArgsConstructor
@AllArgsConstructor
public class ServiceCategory {
	
	@Id //PK
	@GeneratedValue(strategy = GenerationType.IDENTITY)
	@Column(name="id")
	private int catid;
	@Column(name="catname",length=40,nullable = false,unique = true)
	private String catname;
	@Column(name="catdesc",length=100,nullable = false)
	private String catdesc;
	@OneToMany(mappedBy = "cat")
    private List<Services> services;
}
