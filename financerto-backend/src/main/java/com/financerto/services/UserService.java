package com.financerto.services;

import org.springframework.stereotype.Service;

import com.financerto.dto.UserRequestDto;
import com.financerto.dto.UserResponseDto;
import com.financerto.entities.User;
import com.financerto.mapper.UserMapper;
import com.financerto.repositories.UserRepository;

import lombok.RequiredArgsConstructor;

@Service
@RequiredArgsConstructor
public class UserService {

	private final UserRepository userRepository;
	private final UserMapper userMapper;

	public UserResponseDto register(UserRequestDto dto) {
		User user = userMapper.toEntity(dto);
		if (userRepository.existsByEmail(dto.email())) {
			throw new RuntimeException("Usuário já cadastrado!");
		}
		User userSalvo = userRepository.save(user);
		return userMapper.toResponseDto(userSalvo);

	}
}
