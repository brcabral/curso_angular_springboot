package com.github.brcabral.clientes.rest.exception;

public class UsuarioCadastradoException extends RuntimeException {
    public UsuarioCadastradoException(String login) {
        super("Usuário (" + login + ") já cadastrado!");
    }
}
