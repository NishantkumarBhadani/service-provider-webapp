package com.serviceHub.backend.controllers;

import org.springframework.web.bind.annotation.GetMapping;

public class UserController {
	@GetMapping
	public String test() {
		return "kya kar rahe ho bhai";
	}

}
