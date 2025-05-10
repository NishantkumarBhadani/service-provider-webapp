package com.serviceHub.backend.entities;

import java.time.LocalDateTime;

import jakarta.persistence.Column;
import jakarta.persistence.Entity;
import jakarta.persistence.FetchType;
import jakarta.persistence.GeneratedValue;
import jakarta.persistence.GenerationType;
import jakarta.persistence.Id;
import jakarta.persistence.JoinColumn;
import jakarta.persistence.ManyToOne;
import jakarta.persistence.Table;
import lombok.AllArgsConstructor;
import lombok.Data;
import lombok.NoArgsConstructor;

@Entity
@Table(name="bookings")
@Data
@NoArgsConstructor
@AllArgsConstructor

public class BookingEntity {
	@Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
	@Column(name="id")
    private int id;

    // Many bookings → One user
    @ManyToOne(fetch = FetchType.LAZY)
    @JoinColumn(name = "userid")
    private UserEntity user;
    
    @ManyToOne(fetch = FetchType.LAZY)
    @JoinColumn(name = "serviceId")
    private Services book;
    

    @Column(name="razorpay_order_id")
    private String razorpayOrderId;
    
    @Column(name = "total_amount", nullable = false)
    private double totalAmount;
    
    @Column(name = "booking_date")
    private String bookingDate;
    
    @Column(name = "status")
    private String status = "Processing";
    
    private LocalDateTime createdAt = LocalDateTime.now();
}
