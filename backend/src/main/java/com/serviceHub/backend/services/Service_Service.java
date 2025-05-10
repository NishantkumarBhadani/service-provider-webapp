package com.serviceHub.backend.services;

import com.serviceHub.backend.dto.ServiceDto;
import com.serviceHub.backend.entities.ServiceCategory;
import com.serviceHub.backend.entities.Services;
import com.serviceHub.backend.repositories.IServiceCategoryRepository;
import com.serviceHub.backend.repositories.IServiceRepository;
import org.modelmapper.ModelMapper;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.List;
import java.util.Optional;
import java.util.stream.Collectors;

@Service
public class Service_Service implements IService_Service {

    @Autowired
    private IServiceRepository serviceRepository;

    @Autowired
    private IServiceCategoryRepository categoryRepository;

    private ModelMapper mapper = new ModelMapper();

    @Override
    public ServiceDto addService(ServiceDto dto) {
        Services service = mapper.map(dto, Services.class);
        Services saved = serviceRepository.save(service);
        return mapper.map(saved, ServiceDto.class);
    }

    @Override
    public ServiceDto updateService(ServiceDto dto) {
    	  Services service = mapper.map(dto, Services.class);
    	  if (service.getServiceId()!=null){
              return mapper.map(serviceRepository.save(service),ServiceDto.class);
          }
          return null;
    }

    @Override
    public String deleteServiceById(int id) {
//        Services service = serviceRepository.findById(id)
//                .orElseThrow(() -> new RuntimeException("Service not found with id: " + id));
//        serviceRepository.delete(service);
    	 Optional<Services> entity = serviceRepository.findById(id);
         if(entity.isPresent()){
        	 serviceRepository.delete(entity.get());
             return "City deleted.";
         }
         return "Cit does not exist with id: "+id;
        
        
    }

    @Override
    public ServiceDto getServiceById(int id) {
        Services service = serviceRepository.findById(id)
                .orElseThrow(() -> new RuntimeException("Service not found with id: " + id));
        return mapper.map(service, ServiceDto.class);
    }

    @Override
    public List<ServiceDto> getAllServices() {
        return serviceRepository.findAll().stream()
                .map(service -> mapper.map(service, ServiceDto.class))
                .collect(Collectors.toList());
    }

	@Override
	public String deleteService(ServiceDto dto) {
		// TODO Auto-generated method stub
		return null;
	}
}
