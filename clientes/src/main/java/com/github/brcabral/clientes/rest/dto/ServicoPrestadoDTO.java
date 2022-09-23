package com.github.brcabral.clientes.rest.dto;

import lombok.Data;
import lombok.NoArgsConstructor;

import javax.validation.constraints.NotEmpty;
import javax.validation.constraints.NotNull;

@Data
@NoArgsConstructor
public class ServicoPrestadoDTO {
    @NotEmpty(message = "{campo.descricao.obrigatorio}")
    private String descricao;

    @NotNull(message = "{campo.cliente.obrigatorio}")
    private Integer idCliente;

    @NotEmpty(message = "{campo.data.obrigatorio}")
    private String data;

    @NotEmpty(message = "{campo.preco.obrigatorio}")
    private String preco;
}
