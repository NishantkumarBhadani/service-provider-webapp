package com.serviceHub.backend.repositories;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

import com.serviceHub.backend.entities.BookingEntity;

@Repository
public interface IBookingRepository extends JpaRepository<BookingEntity, Integer>{
	BookingEntity findByRazorpayOrderId(String razorpayOrderId);
}
