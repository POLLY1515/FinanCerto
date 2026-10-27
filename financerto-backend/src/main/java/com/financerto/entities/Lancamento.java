package com.financerto.entities;

import java.math.BigDecimal;
import java.time.LocalDate;
import java.util.UUID;

import com.financerto.enuns.Tipo;

import jakarta.persistence.Entity;

@Entity
public class Lancamento {
	
	private UUID id;
	private String descricao;
	private BigDecimal valor;
	private Tipo tipoTransacao;
	private LocalDate data;
	

}
