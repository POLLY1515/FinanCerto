package com.financerto.controller;

import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import com.financerto.SaudeResponse;

@RestController
@RequestMapping("/api/saude")
public class SaudeController {

    @GetMapping
    public SaudeResponse verificarSaude() {
        return new SaudeResponse(
            "UP",
            "FinanCerto está funcionando!"
        );
    }
}