package com.github.brcabral.clientes.rest;

import com.github.brcabral.clientes.model.entity.Cliente;
import com.github.brcabral.clientes.model.entity.ServicoPrestado;
import com.github.brcabral.clientes.model.repository.ClienteRepository;
import com.github.brcabral.clientes.model.repository.ServicoPrestadoRepository;
import com.github.brcabral.clientes.rest.dto.ServicoPrestadoDTO;
import lombok.RequiredArgsConstructor;
import org.springframework.http.HttpStatus;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;
import org.springframework.web.server.ResponseStatusException;

import java.time.LocalDate;
import java.time.format.DateTimeFormatter;

@RestController
@RequestMapping("/api/servicos-prestados")
@RequiredArgsConstructor
public class ServicoPrestadoController {
    private final ClienteRepository clienteRepository;
    private final ServicoPrestadoRepository repository;

    @PostMapping
    public ServicoPrestado salvar(@RequestBody ServicoPrestadoDTO dto) {
        LocalDate dataFormatada = LocalDate.parse(dto.getData(), DateTimeFormatter.ofPattern("dd/MM/yyyy"));

        Integer idCliente = dto.getIdCliente();
        Cliente cliente = clienteRepository.findById(idCliente)
                .orElseThrow(() -> new ResponseStatusException(HttpStatus.BAD_REQUEST, "Cliente inexistente"));

        ServicoPrestado servicoPrestado = new ServicoPrestado();
        servicoPrestado.setDescricao(dto.getDescricao());
        servicoPrestado.setData(dataFormatada);
        servicoPrestado.setCliente(cliente);
        //servicoPrestado.setValor();
    }
}
