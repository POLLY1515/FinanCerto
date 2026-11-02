package com.financerto.mapper;


import org.mapstruct.Mapper;

import com.financerto.dto.UserRequestDto;
import com.financerto.dto.UserResponseDto;
import com.financerto.entities.User;


@Mapper(componentModel = "spring")
public interface UserMapper {
	
	
	 // Converte UserRequestDto em User
    User toEntity(UserRequestDto dto);

    // Converte User em UserResponseDto
    UserResponseDto toResponseDto(User user);

}
