package com.serviceHub.backend.services;

import java.util.List;
import java.util.stream.Collectors;

import org.modelmapper.ModelMapper;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.serviceHub.backend.dto.ServiceCategoryDto;
import com.serviceHub.backend.entities.ServiceCategory;
import com.serviceHub.backend.repositories.IServiceCategoryRepository;

@Service
public class ServiceCategoryService implements IServiceCategoryService {
	
	
	
    @Autowired
    private IServiceCategoryRepository categoryRepo;
    private ModelMapper mapper = new ModelMapper();

   
    @Override
    public ServiceCategoryDto createCategory(ServiceCategoryDto dto) {
        ServiceCategory serviceCategory = mapper.map(dto, ServiceCategory.class);
        ServiceCategory savedCategory = categoryRepo.save(serviceCategory);
        return mapper.map(savedCategory, ServiceCategoryDto.class);
    }

    @Override
    public ServiceCategoryDto updateCategory(int id, ServiceCategoryDto dto) {
        ServiceCategory existingCategory = categoryRepo.findById(id)
                .orElseThrow(() -> new RuntimeException("Category not found with id: " + id));

        // Update values
        existingCategory.setCatname(dto.getCatname());
        existingCategory.setCatdesc(dto.getCatdesc());

        ServiceCategory updatedCategory = categoryRepo.save(existingCategory);
        return mapper.map(updatedCategory, ServiceCategoryDto.class);
    }

    @Override
    public void deleteCategory(int id) {
        ServiceCategory category = categoryRepo.findById(id)
                .orElseThrow(() -> new RuntimeException("Category not found with id: " + id));
        categoryRepo.delete(category);
    }

    @Override
    public ServiceCategoryDto getCategoryById(int id) {
        ServiceCategory category = categoryRepo.findById(id)
                .orElseThrow(() -> new RuntimeException("Category not found with id: " + id));
        return mapper.map(category, ServiceCategoryDto.class);
    }


    @Override
    public List<ServiceCategoryDto> getAllCategories() {
        return categoryRepo.findAll().stream()
                .map(category -> mapper.map(category, ServiceCategoryDto.class))
                .collect(Collectors.toList());
    }
}
