package com.serviceHub.backend.entities;
import jakarta.persistence.*;
import java.util.List;
import com.fasterxml.jackson.annotation.JsonIgnore;
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
	@GeneratedValue(strategy = GenerationType.IDENTITY)
	@Column(name="userid")
	private int userid;
	@Column(name="name",nullable = false,length=50)
	private String name;
	@Column(name="emailid",nullable = false,length=50,unique = true)
	private String emailid;
	@Column(name="password",nullable = false,length=20)
	private String password;
	@Column(name="role",nullable = false,length=20)
	private String role;
	
	@OneToMany(mappedBy = "user", cascade = CascadeType.ALL)
	@JsonIgnore
	private List<BookingEntity> bookings;
}
