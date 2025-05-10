package com.serviceHub.backend.repositories;



import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

import com.serviceHub.backend.entities.Services;

@Repository
public interface IServiceRepository extends JpaRepository<Services,Integer> {
	
}
