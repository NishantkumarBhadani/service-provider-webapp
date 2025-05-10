package com.serviceHub.backend.controllers;

import com.serviceHub.backend.dto.ServiceDto;
import com.serviceHub.backend.services.IService_Service;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import java.util.List;

@RestController
@RequestMapping("/api/services")
@CrossOrigin(origins = "*")
public class ServiceController {

    @Autowired
    private IService_Service serviceService;

    // ✅ Create Service
    @PostMapping("/create")
    public ResponseEntity<ServiceDto> createService(@RequestBody ServiceDto serviceDto) {
        ServiceDto savedService = serviceService.addService(serviceDto);
        return ResponseEntity.ok(savedService);
    }

    // ✅ Update Service
    @PutMapping("/update")
    public ResponseEntity<ServiceDto> updateService(@RequestBody ServiceDto serviceDto) {
        ServiceDto updatedService = serviceService.updateService(serviceDto);
        return ResponseEntity.ok(updatedService);
    }

    // ✅ Delete by Entity
    @DeleteMapping("/delete")
    public ResponseEntity<String> deleteService(@RequestBody ServiceDto serviceDto) {
        String message = serviceService.deleteService(serviceDto);
        return ResponseEntity.ok(message);
    }

    // ✅ Delete by ID
    @DeleteMapping("/delete/{id}")
    public ResponseEntity<String> deleteServiceById(@PathVariable int id) {
        String message = serviceService.deleteServiceById(id);
        return ResponseEntity.ok(message);
    }

    // ✅ Get All Services
    @GetMapping("/all")
    public ResponseEntity<List<ServiceDto>> getAllServices() {
        List<ServiceDto> services = serviceService.getAllServices();
        return ResponseEntity.ok(services);
    }

    // ✅ Get Service by ID
    @GetMapping("/{id}")
    public ResponseEntity<ServiceDto> getServiceById(@PathVariable int id) {
        ServiceDto service = serviceService.getServiceById(id);
        if (service != null) {
            return ResponseEntity.ok(service);
        } else {
            return ResponseEntity.notFound().build();
        }
    }
}
