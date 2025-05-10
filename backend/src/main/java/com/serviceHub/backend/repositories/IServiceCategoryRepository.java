package com.serviceHub.backend.repositories;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

import com.serviceHub.backend.entities.ServiceCategory;

@Repository
public interface IServiceCategoryRepository extends JpaRepository<ServiceCategory, Integer> {
//	 boolean existsByCatid(int id);
}
