package com.financerto.controller;

import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

@RestController
@RequestMapping("/api/saude")
public class saudeController {

	@GetMapping
	public String verificarSaude() {
		return "FinanCerto esta funcionando!";
	}
}
