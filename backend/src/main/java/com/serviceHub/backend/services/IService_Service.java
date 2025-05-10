package com.serviceHub.backend.services;

import java.util.List;

import com.serviceHub.backend.dto.ServiceDto;
import com.serviceHub.backend.entities.Services;

public interface IService_Service {
    ServiceDto addService(ServiceDto dto );
    ServiceDto updateService(ServiceDto dto );
    String deleteService(ServiceDto dto );
    String deleteServiceById(int id);
    List<ServiceDto> getAllServices();
    ServiceDto getServiceById(int id);
}
