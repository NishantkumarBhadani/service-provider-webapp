package com.serviceHub.backend.controllers;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import com.serviceHub.backend.dto.ServiceCategoryDto;
import com.serviceHub.backend.services.IServiceCategoryService;

@RestController
@RequestMapping("/api/categories")
//@CrossOrigin("*")
public class ServiceCategoryController {

	 @Autowired
	    private IServiceCategoryService categoryService;

	    @PostMapping("/create")
	    public ResponseEntity<ServiceCategoryDto> create(@RequestBody ServiceCategoryDto dto) {
	        return ResponseEntity.ok(categoryService.createCategory(dto));
	    }

	    @PutMapping("/update/{id}")
	    public ResponseEntity<ServiceCategoryDto> update(@PathVariable int id, @RequestBody ServiceCategoryDto dto) {
	        return ResponseEntity.ok(categoryService.updateCategory(id, dto));
	    }

	    @GetMapping("/getAll")
	    public ResponseEntity<List<ServiceCategoryDto>> getAll() {
	        return ResponseEntity.ok(categoryService.getAllCategories());
	    }

	    @GetMapping("/get/{id}")
	    public ResponseEntity<ServiceCategoryDto> getOne(@PathVariable int id) {
	        return ResponseEntity.ok(categoryService.getCategoryById(id));
	    }

	    @DeleteMapping("/delete/{id}")
	    public ResponseEntity<String> delete(@PathVariable int id) {
	        categoryService.deleteCategory(id);
	        return ResponseEntity.ok("Deleted Successfully");
	    }
}

