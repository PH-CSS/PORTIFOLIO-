create database if not exists expo_Data_Base;
use expo_Data_Base;

create table if not exists usuarios(
	id_usuario  INT(11) not null auto_increment primary key,
    name_usu varchar(150) not null,
    CPF varchar(14) not null,
    data_Nascimento DATE not null,
    -- pode dar erro dependendo da formatação que estiver
    email varchar(150) not null,
    senha varchar(45) not null
);

create table if not exists formacao_academica(
	id_formacao_academica  INT(11) not null auto_increment primary key,
    id_usuario  INT(11) not null ,
    inicio_Date DATE not null,
    fim_Date DATE,
    descricao varchar(45 ) 
);

create table if not exists experiencia_profissional(
	id_experiencia_profissional INT(11) not null auto_increment primary key,
    id_usuario  INT(11) not null ,
    inicio_Date DATE not null,
    fim_Date DATE,
    empresa varchar(45),
    descricao varchar(45) 
);




