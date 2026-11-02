package com.financerto.controller;

import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import com.financerto.dto.UserRequestDto;
import com.financerto.dto.UserResponseDto;
import com.financerto.services.UserService;

import jakarta.validation.Valid;

@RestController
@RequestMapping("/users")
public class UserController {

	private final UserService userService;

	public UserController(UserService userService) {
		this.userService = userService;
	}

	@PostMapping
	public ResponseEntity<UserResponseDto> register(@Valid @RequestBody UserRequestDto request) {
		UserResponseDto response = userService.register(request);
		return ResponseEntity.status(HttpStatus.CREATED).body(response);
	}
}
