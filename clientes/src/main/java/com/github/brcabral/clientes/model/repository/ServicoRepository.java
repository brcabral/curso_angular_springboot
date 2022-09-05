package com.github.brcabral.clientes.model.repository;

import com.github.brcabral.clientes.model.entity.Cliente;
import com.github.brcabral.clientes.model.entity.Servico;
import org.springframework.data.jpa.repository.JpaRepository;

public interface ServicoRepository extends JpaRepository<Servico, Integer> {
    //
}
