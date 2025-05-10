package com.serviceHub.backend.entities;

import java.io.Serializable;
import java.util.List;

import jakarta.persistence.Column;
import jakarta.persistence.Entity;
import jakarta.persistence.GeneratedValue;
import jakarta.persistence.GenerationType;
import jakarta.persistence.Id;
import jakarta.persistence.JoinColumn;
import jakarta.persistence.ManyToOne;
import jakarta.persistence.OneToMany;
import jakarta.persistence.Table;
import lombok.AllArgsConstructor;
import lombok.Data;
import lombok.NoArgsConstructor;

@Entity
@Table(name="services")
@Data
@NoArgsConstructor
@AllArgsConstructor
public class Services implements Serializable {


	@Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    @Column(name="ServiceId")
    private Integer serviceId;

    @Column(name="ServiceName")
    private String serviceName;

    @Column(name="ServicePrice")
    private int servicePrice;

    @Column(name = "filename")
    private String filename;

    @ManyToOne
    @JoinColumn(name="id")
    private ServiceCategory cat;
    
    @OneToMany(mappedBy = "book")
    private List<BookingEntity> bookings;
    

    
}
