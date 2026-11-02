package com.financerto.dto;

import jakarta.validation.constraints.Email;
import jakarta.validation.constraints.NotBlank;
import jakarta.validation.constraints.Size;

public record UserRequestDto(
		
		@NotBlank(message="O nome do usuario é obrigatório!")
		@Size(min = 3, max = 100, message= "O nome deve ter entre 3 e 100 caracteres")
		String name,
		
		@NotBlank(message = "O email é obrigatório")
		@Email( message= "Informe um email válido")
		String email,
		
		@NotBlank(message="A senha é obrigatória!")
		@Size(min= 10 , max= 20, message=" a senha deve ter entre 10 e 20 caracteres")
		String password) {

}
