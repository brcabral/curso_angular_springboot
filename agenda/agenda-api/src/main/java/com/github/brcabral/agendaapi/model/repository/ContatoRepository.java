package com.github.brcabral.agendaapi.model.repository;

import com.github.brcabral.agendaapi.model.entity.Contato;
import org.springframework.data.jpa.repository.JpaRepository;

public interface ContatoRepository extends JpaRepository<Contato, Integer> {
}
