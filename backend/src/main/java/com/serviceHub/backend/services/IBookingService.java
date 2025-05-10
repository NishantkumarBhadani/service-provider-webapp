package com.serviceHub.backend.services;

import java.util.List;

import com.serviceHub.backend.dto.BookingDto;

public interface IBookingService {
    public BookingDto addBooking(BookingDto booking);
    public BookingDto updateBooking(BookingDto booking);
    public String deleteBooking(int id);
    public List<BookingDto> getAll();
    public BookingDto getBookingById(int id);
    public BookingDto getRazorpayOrderId(String id);
}
