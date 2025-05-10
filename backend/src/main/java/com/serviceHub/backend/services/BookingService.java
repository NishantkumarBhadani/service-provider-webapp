package com.serviceHub.backend.services;

import java.time.LocalDateTime;
import java.util.List;
import java.util.Optional;
import java.util.stream.Collectors;

import org.modelmapper.ModelMapper;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.serviceHub.backend.dto.BookingDto;
import com.serviceHub.backend.entities.BookingEntity;
import com.serviceHub.backend.entities.Services;
import com.serviceHub.backend.entities.UserEntity;
import com.serviceHub.backend.repositories.IBookingRepository;
import com.serviceHub.backend.repositories.IServiceRepository;
import com.serviceHub.backend.repositories.IUserrepository;

@Service
public class BookingService implements IBookingService {
	@Autowired
    private IBookingRepository bookingRepository;
	private IUserrepository userRepository;
	private IServiceRepository servicesRepository;

    private final ModelMapper mapper = new ModelMapper();

    @Override
    public BookingDto addBooking(BookingDto booking) {
        BookingEntity entity = mapper.map(booking, BookingEntity.class);
        return mapper.map(bookingRepository.save(entity), BookingDto.class);
    }
    @Override
    public BookingDto updateBooking(BookingDto booking) {
        BookingEntity entity = mapper.map(booking, BookingEntity.class);
        if (entity.getId()>0){
            return mapper.map(bookingRepository.save(entity), BookingDto.class);
        }
        return null;
    }

    @Override
    public String deleteBooking(int id) {
        Optional<BookingEntity> entity = bookingRepository.findById(id);
        if (entity.isPresent()){
            bookingRepository.delete(entity.get());
            return "Booking deleted, Non refundable.";
        }
        return "No booking found with id "+id;
    }

    @Override
    public List<BookingDto> getAll() {
        List<BookingEntity> entities = bookingRepository.findAll();
        return entities.stream().map(entity -> mapper.map(entity, BookingDto.class)).collect(Collectors.toList());
    }

    @Override
    public BookingDto getBookingById(int id) {
        Optional<BookingEntity> entity = bookingRepository.findById(id);
        if (entity.isPresent()){
            return mapper.map(entity.get(),BookingDto.class);
        }
        return null;
    }

    @Override
    public BookingDto getRazorpayOrderId(String id) {
        BookingEntity entity = bookingRepository.findByRazorpayOrderId(id);
        if (entity!=null){
            return mapper.map(entity,BookingDto.class);
        }
        return null;
        
    }
}
