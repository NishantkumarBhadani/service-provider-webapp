package com.serviceHub.backend.controllers;

import java.time.LocalDateTime;
import java.time.format.DateTimeFormatter;
import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.DeleteMapping;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import com.serviceHub.backend.dto.BookingDto;
import com.serviceHub.backend.dto.BookingRequestDTO;
import com.serviceHub.backend.dto.ServiceDto;
import com.serviceHub.backend.dto.UserDTO;
import com.serviceHub.backend.services.IBookingService;
import com.serviceHub.backend.services.IService_Service;
import com.serviceHub.backend.services.IUsersService;

import io.swagger.v3.oas.annotations.parameters.RequestBody;


@RestController
@RequestMapping("/api/booking")
public class BookingController {
	
	 @Autowired
	    IBookingService bookingService;
	 
	 @Autowired
	 	IUsersService userService;
	 
	 @Autowired IService_Service bookService;
	 
	 @GetMapping(value="/")
	    public List<BookingDto> getAll()
	    {
	        return bookingService.getAll();
	        
	    }
	 
	  @GetMapping(value="{id}")
	    public BookingDto getBookingById(@PathVariable("id") int id)
	    {
	        return bookingService.getBookingById(id);
	    }
	  @PostMapping(value="add")
	    public BookingDto addBooking(@RequestBody BookingDto booking)
	    {
	        return bookingService.addBooking(booking);
	    }
  
	
	  
	   @DeleteMapping(value="delete/{id}")
	    public String deleteBooking(@PathVariable("id") int id)
	    {
	        return bookingService.deleteBooking(id);
	    }
	   @PostMapping("confirm")
	    public ResponseEntity<BookingDto> confirmBooking(@RequestBody BookingRequestDTO bookingRequest) {
	        System.out.println("User Id: "+bookingRequest.getUserId());
//	        int userid = bookingRequest.getUserId();
	        UserDTO user = userService.getUserById(bookingRequest.getUserId());
	        ServiceDto service = bookService.getServiceById(bookingRequest.getServiceId());
	        BookingDto booking = new BookingDto();
	        if(user==null)
	        {
	            return ResponseEntity.ok(booking);
	        }
	        DateTimeFormatter formatter = DateTimeFormatter.ofPattern("dd-MMM-yyyy HH:mm:ss");
	        String formattedDate = booking.getCreatedAt().format(formatter);
	        booking.setBookingDate(formattedDate);
	        booking.setTotalAmount(bookingRequest.getTotalAmount());
	        System.out.println("Booking Date "+booking.getBookingDate().toString());
	        booking.setUser(user);
	        booking.setBook(service);
	        bookingService.addBooking(booking);
	        return ResponseEntity.ok(booking);
	    }
	   
	  
}

