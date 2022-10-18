package com.github.brcabral.clientes.util;

import org.springframework.stereotype.Component;

import java.math.BigDecimal;

@Component
public class BigDecimalConverter {
    public BigDecimal converter(String value) {
        if (value == null) {
            return null;
        }

        String valor = value.replace(".", "").replace(",", ".");
        return new BigDecimal(valor);
    }
}
