package com.github.brcabral.agendaapi;

import com.github.brcabral.agendaapi.model.entity.Contato;
import com.github.brcabral.agendaapi.model.repository.ContatoRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.boot.CommandLineRunner;
import org.springframework.boot.SpringApplication;
import org.springframework.boot.autoconfigure.SpringBootApplication;
import org.springframework.context.annotation.Bean;

@SpringBootApplication
public class AgendaApiApplication {
	@Autowired
	private ContatoRepository repository;

	@Bean
	public CommandLineRunner commandLineRunner() {
		return args -> {
			Contato contato = new Contato();
			contato.setNome("Nathan Renato Barros");
			contato.setEmail("nathan_barros@planicoop.com.br");
			contato.setFavorito(false);
			repository.save(contato);
		};
	}


	public static void main(String[] args) {
		SpringApplication.run(AgendaApiApplication.class, args);
	}

}
