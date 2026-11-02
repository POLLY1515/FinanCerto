package com.financerto.repositories;

import java.util.UUID;

import org.springframework.data.jpa.repository.JpaRepository;

import com.financerto.entities.User;

public interface UserRepository  extends JpaRepository<User, UUID>{
	
	 boolean existsByEmail(String email);

}
