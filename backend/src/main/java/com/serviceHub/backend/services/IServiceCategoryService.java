package com.serviceHub.backend.services;

import java.util.List;

import com.serviceHub.backend.dto.ServiceCategoryDto;
import com.serviceHub.backend.entities.ServiceCategory;

;

public interface IServiceCategoryService {
	   ServiceCategoryDto createCategory(ServiceCategoryDto categoryDto);
	    ServiceCategoryDto updateCategory(int id, ServiceCategoryDto categoryDto);
	    void deleteCategory(int id);
	    ServiceCategoryDto getCategoryById(int id);
	    List<ServiceCategoryDto> getAllCategories();
}
