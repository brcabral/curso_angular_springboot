package com.github.brcabral.clientes.model.repository;

import com.github.brcabral.clientes.model.entity.Cliente;
import org.springframework.data.jpa.repository.JpaRepository;

public interface ClienteRepository extends JpaRepository<Cliente, Integer> {
    //
}
