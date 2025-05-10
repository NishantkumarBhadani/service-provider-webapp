package com.serviceHub.backend.repositories;

import java.util.Optional;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

import com.serviceHub.backend.entities.UserEntity;

@Repository
public interface IUserrepository extends JpaRepository<UserEntity,Integer>{
	Optional<UserEntity>findByEmailid(String emailid);
}
