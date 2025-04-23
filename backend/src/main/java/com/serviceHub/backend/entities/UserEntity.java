package com.serviceHub.backend.entities;

import java.util.List;

import com.fasterxml.jackson.annotation.JsonIgnore;

import jakarta.persistence.CascadeType;
import jakarta.persistence.Column;
import jakarta.persistence.Entity;
import jakarta.persistence.EnumType;
import jakarta.persistence.Enumerated;
import jakarta.persistence.GeneratedValue;
import jakarta.persistence.GenerationType;
import jakarta.persistence.Id;
import jakarta.persistence.OneToMany;
import jakarta.persistence.Table;
import lombok.AllArgsConstructor;
import lombok.Data;
import lombok.NoArgsConstructor;


@Entity
@Table(name="users")

@Data
@AllArgsConstructor
@NoArgsConstructor

public class UserEntity {
	
	@Id
	@GeneratedValue(strategy=GenerationType.IDENTITY)
	@Column(name="userId")
	private long id;
	@Column(nullable=false,length=20)
	private String fullName;
	@Column(unique = true, nullable = false)
	private String email;
	@Column(nullable=false)
	private String address;
	@Column(length=13,nullable=false)
	private String number;
	private String password;
	private enum Role{
		customer,provider,
	}
	@Enumerated(EnumType.STRING)
    @Column(nullable = false)
	private Role role=Role.customer;
	@OneToMany(mappedBy = "user", cascade = CascadeType.ALL)
	@JsonIgnore

	private List<BookingEntity>bookings;
}
