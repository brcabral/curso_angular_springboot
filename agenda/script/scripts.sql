create table contato (
	id serial not null primary key,
	nome varchar(150) not null,
	email varchar(150) not null,
	favorito boolean
);

insert into contato (nome, email, favorito)
	values ('Sandra Isabela Sales', 'sandraisabelasales@outershoes.com.br', true);

select * from contato c;
