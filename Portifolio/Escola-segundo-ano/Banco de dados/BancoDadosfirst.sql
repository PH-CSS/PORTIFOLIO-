create database if not exists PH88;
use PH88;

CREATE TABLE if not exists dep01 (
  codigo int NOT NULL auto_increment ,
  nomeFuncionario varchar(255) not null,
  funcoes varchar(255) default NULL,
  salarios decimal default NULL,
  departamento varchar(255) not null,
  Filhos int not null,
  dataAdimicao date ,
  PRIMARY KEY (codigo)
) ;

INSERT INTO `dep01` (`nomeFuncionario`,`funcoes`,`salarios`, `departamento`, `Filhos`, `dataAdimicao`) 
VALUES 
 ("Malesuada Rez","vendedor",1200, "01", 1, '2024-04-15'),
 ("Aliquam Rez","Programador",1335, "01", 1, '2024-04-15'),
 ("Union Carbide Rez","Programador",1200, "01", 1, '2024-08-15'),
 ("Magna Carta Rez","Produtora",3071, "01", 1, '2024-08-15'),
 ("Silvence Rez","Designer",3859, "01", 0, '2024-08-15'),
 ("Ivan Rez","Diretor",4440, "01", 0, '2024-08-15'),
 
 ("Malesuada Santos","construtora",1700, "02", 2, '2024-10-15'),
 ("Silclana Santos","Designer",4135, "02", 2, '2024-08-20'),
 ("Union Silva Leo","vendedor",3755, "02", 2, '2024-10-20'),
 ("Magna Carta Leo","Programador",3071, "02", 0, '2024-08-18'),
 ("Silverina Leo","Produtor",3859, "02", 0, '2024-10-15'),
 ("Ivan Leo","Produtor",4440, "02", 0, '2023-04-15'),
 
 ("Malesuada ","Gerente",1700, "03", 0, '2020-04-15'),
 ("Aliquam Silva","Gerente",4135, "03", 1, '2020-04-19'),
 ("Union Carbide  ","Gerente",3755, "03", 1, '2020-04-09'),
 ("Magna Carta ","Gerente",1203, "03", 1, '2020-04-05'),
 ("Nunc Silva","Gerente",3859, "03", 0, '2020-04-25'),
 ("Invan Silva","Gerente",4440, "03", 0, '2020-04-16'),
 
 ("Malesuada Santos ","Analista",1700, "04", 0, '2015-04-10'),
 ("Aliquam Santos","Analista",1280, "04", 0, '2015-10-15'),
 ("Union Carbide Santos","Analista",3755, "04", 2, '2015-04-07'),
 ("Magna Silva C","Analista",3071, "04", 2, '2015-04-15'),
 ("Nunc C","Estagiario",700, "04", 0, '2015-04-15'),
 ("Ivan C","Analista",4440, "04", 0, '2015-04-09'),
 
 ("Malesuada H ","vendedor",1700, "05", 0, '1993-04-03'),
 ("Aliquam H ","Condicionador de equipamentos",4135, "05", 0, '1993-09-01'),
 ("Silvia Carbide H","construtora",3755, "05", 0, '1993-08-15'),
 ("Magna Carta Silva ","Diretor",3071, "05", 0, '1993-04-09'),
 ("Nunc H ","Diretor",759, "05", 0, '1999-10-23'),
 ("Ivan H","Diretor",4440, "05", 0, '1983-10-15');

--  SELECT  nomeFuncionario
--  FROM dep01
--  WHERE departamento = '05'
--  union all
 
--  SELECT  nomeFuncionario
--  FROM dep01
--  WHERE funcoes = 'vendedor';
 
--  SELECT  salarios
--  FROM dep01
--  where departamento = "03";
 
--  SELECT funcoes, nomeFuncionario
-- FROM dep01
-- ORDER BY funcoes DESC;

--  SELECT funcoes, nomeFuncionario
-- FROM dep01
-- ORDER BY funcoes ASC, nomeFuncionario DESC ;


--   SELECT  nomeFuncionario, funcoes, salarios
--  FROM dep01
--  WHERE mesAdm = 'Outubro';


--  SELECT codigo, nomeFuncionario, salarios * 1.20
--  FROM dep01;

-- SELECT codigo, nomeFuncionario, salarios - salarios * 0.07 
--  FROM dep01;

--  SELECT * 
--  FROM dep01 
--  WHERE funcoes = "Analista";

--  SELECT * 
--  FROM dep01 
--  WHERE salarios >= 1700;

--  SELECT * 
--  FROM dep01 
--  WHERE salarios <= 1700;

--  SELECT * 
--  FROM dep01 
--  WHERE salarios = 1700;

--  SELECT * 
--  FROM dep01 
--  WHERE salarios >= 2000 and departamento = 05;

--  SELECT * 
--  FROM dep01 
--  WHERE funcoes = "Programador" or funcoes = "Analista" ;
 
--  SELECT * 
--  FROM dep01 
--  WHERE (funcoes = "Programador" or funcoes = "Analista")
--  and salarios >= 1700;
 
 UPDATE dep01 set Filhos = 1 
 WHERE codigo <= 4 ;
 UPDATE dep01 set Filhos = 3 
 WHERE codigo >= 5 and codigo <= 9 ;
 UPDATE dep01 set Filhos = 2 
 WHERE codigo >= 10 and codigo < 15 ;
 UPDATE dep01 set Filhos = 0 
 WHERE codigo >= 15 ;
 UPDATE dep01 set Filhos = 4 
 WHERE codigo >= 25 ;

-- SELECT * 
-- from dep01 
-- WHERE Filhos >= 2 and Filhos <= 4;

-- SELECT * 
-- from dep01 
-- WHERE Filhos >= 2 and Filhos <= 4 and salarios < 2000;

-- SELECT * 
-- from dep01 
-- WHERE Filhos < 2 or Filhos > 3;

-- SELECT * 
-- from dep01 
-- WHERE Filhos < 2 and Filhos != 0 or Filhos > 3 ;

-- SELECT * 
-- FROM dep01 
-- WHERE Filhos IN ("2","3");

-- SELECT * 
-- FROM dep01 
-- WHERE nomeFuncionario Like "%Silva%";

-- SELECT * 
-- FROM dep01 
-- WHERE nomeFuncionario Like "Silv%";

-- SELECT * 
-- FROM dep01 
-- WHERE nomeFuncionario Like "%Santos%";

-- SELECT departamento 
-- FROM dep01 
-- WHERE funcoes Like "%Analista%" or funcoes Like "%Gerente%";

-- SELECT codigo, nomeFuncionario, departamento 
-- FROM dep01 
-- WHERE codigo Like "2" or codigo Like "3" or codigo like "9";

-- SELECT  nomeFuncionario, departamento 
-- FROM dep01 
-- WHERE departamento NOT Like "%05%";

-- SELECT * 
-- FROM dep01 
-- WHERE salarios NOT Like "%2000%";

-- select * 
-- from dep01 ;

-- SELECT floor(avg(Filhos)) as MédiaDeFilhos 
-- FROM dep01;
-- -- lembrando que os filhos foram alterados nos processos anteriores 
-- -- no (UPDATE) 
-- SELECT floor(avg(Filhos)) as MédiaDeFilhos 
-- FROM dep01 
-- WHERE departamento = "05";

-- select salarios 
-- from dep01;

-- select count(nomeFuncionario) 
-- from dep01 
-- where departamento = "05";

-- select count(nomeFuncionario) 
-- from dep01 
-- where departamento = "05" and  salarios >= 2000;

-- select count(nomeFuncionario) 
-- from dep01 
-- where departamento = "04" and salarios >= 1000 and salarios <= 1500;

-- SELECT count(*) 
-- FROM dep01 
-- WHERE nomeFuncionario Like "%Santos%";

-- select max(salarios) 
-- from dep01 
-- where departamento = "04";

-- select salarios 
-- from dep01 
-- where funcoes = "Analista";

-- select salarios 
-- from dep01 
-- where funcoes = "Analista" and departamento = "02" ;

-- select nomeFuncionario 
-- from dep01 
-- where day(dataAdimicao) = 10 ;

-- select nomeFuncionario, dataAdimicao 
-- from dep01 
-- where day(dataAdimicao) >= 5 and day(dataAdimicao) <= 10;

-- select nomeFuncionario, dataAdimicao 
-- from dep01 
-- where day(dataAdimicao) >= 5  and day(dataAdimicao) <= 10
-- order by dataAdimicao ASC;

-- select nomeFuncionario, dataAdimicao 
-- from dep01 
-- where dataAdimicao <= '2006-09-20' ;

-- select nomeFuncionario, dataAdimicao, month(dataAdimicao)
-- from dep01 
-- where departamento = "04" ;

-- select lower(nomeFuncionario), departamento
-- from dep01 
-- where departamento = "04" or departamento = "05" ;

-- select nomeFuncionario, dataAdimicao
-- from dep01 
-- where day(dataAdimicao) >= 5  and day(dataAdimicao) <= 10
-- and departamento = "04" or departamento = "05" ;

INSERT INTO `dep01` (`nomeFuncionario`,`funcoes`,`salarios`, `departamento`, `Filhos`, `dataAdimicao`) 
VALUES 
 ("Janainu Rez","construtora",1200, "01", 1, '2024-07-15'),
 ("Praesent Donec","arquiteto",1300, "02", 2, '2024-07-16'),
 ("Suspendisse Arcu","engenharia",1400, "03", 3, '2024-07-17'),
 ("Lorem Ipsum","consultoria",1500, "04", 4, '2024-07-18'),
 ("Aliquam Eget","imobiliária",1600, "05", 5, '2024-07-19'),
 ("Vestibulum Consectetuer","design",1700, "01", 6, '2024-04-20'),
 ("Curabitur Amet","construção",1800, "02", 7, '2024-04-21'),
 ("Integer Pellentesque","arquitetura",1900, "03", 8, '2024-04-22'),
 ("Nunc Efficitur","engenharia",2000, "04", 9, '2024-04-23'),
 ("Ut Integer","consultoria",2100, "05", 10, '2024-04-24'),
 ("Sed Egestas","imobiliária",2200, "01", 11, '2024-07-25'),
 ("Aenean Accumsan","design",2300, "02", 12, '2024-07-26'),
 ("Mauris Nunc","construção",2400, "03", 13, '2024-07-27'),
 ("Quisque Ligula","arquitetura",2500, "04", 14, '2024-04-28'),
 ("Pellentesque Condimentum","engenharia",2600, "05", 15, '2024-04-29'),
 ("Ornare Nunc","consultoria",2700, "01", 16, '2024-04-30'),
 ("Duis Efficitur","imobiliária",2800, "02", 17, '2024-05-01'),
 ("Etiam Commodo","design",2900, "03", 18, '2024-05-02'),
 ("Phasellus Pulvinar","construção",3000, "04", 19, '2024-07-03'),
 ("Vivamus Tempus","arquitetura",3100, "05", 20, '2024-07-04'),
 ("Fusce Ut","engenharia",3200, "01", 21, '2024-05-05'),
 ("Vestibulum Elit","consultoria",3300, "02", 22, '2024-05-06'),
 ("Maecenas Risus","imobiliária",3400, "03", 23, '2024-05-07'),
 ("In Euismod","design",0.35, "04", 24, '2024-05-08'),
 ("Aliquam Nulla","construção",3600, "05", 25, '2024-05-09'),
 ("Nullam Gravida","arquitetura",3700, "01", 26, '2024-05-10'),
 ("Lacinia Enim","engenharia",3800, "02", 27, '2024-05-11'),
 ("Etiam Accumsan","consultoria",3900, "03", 28, '2024-05-12'),
 ("Curabitur Ipsum","imobiliária",4000, "04", 29, '2024-05-13'),
 ("Phasellus Mauris","design",4100, "05", 30, '2024-05-14'),
 ("Nulla Ut","construção",4200, "01", 31, '2024-05-15'),
 ("Aliquam Leo","arquitetura",4300, "02", 32, '2024-05-16'),
 ("Sed Est","engenharia",4400, "03", 33, '2024-05-17'),
 ("Quisque Efficitur","consultoria",4500, "04", 34, '2024-05-18'),
 ("Aenean Auctor","imobiliária",4600, "05", 35, '2024-05-19'),
 ("Ut Vulputate","design",4700, "01", 36, '2024-05-20'),
 ("Donec Vitae","construção",4800, "02", 37, '2024-05-21'),
 ("Vestibulum Condimentum","vendedor",4900, "03", 38, '2024-05-22'),
 ("Orci Aliquam","engenharia",5000, "04", 39, '2024-05-23'),
 ("Aliquam Volutpat","consultoria",5100, "05", 40, '2024-05-24'),
 ("Phasellus Risus","imobiliária",5200, "01", 41, '2024-05-25'),
 ("Nam Vulputate","design",5300, "02", 42, '2024-05-26'),
 ("Praesent Dapibus","construção",5400, "03", 43, '2024-05-27'),
 ("Ut Convallis","arquitetura",5500, "04", 44, '2024-05-28'),
 ("Nullam Et","engenharia",5600, "05", 45, '2024-05-29'),
 ("Curabitur Pretium","consultoria",5700, "01", 46, '2024-05-30'),
 ("Sed Donec","imobiliária",5800, "02", 47, '2024-05-31'),
 ("Pellentesque Fermentum","design",5900, "03", 48, '2024-06-01'),
 ("Aliquam Tellus","construção",6000, "04", 49, '2024-06-02'),
 ("Vestibulum Amet","arquitetura",6100, "05", 50, '2024-06-03');

 select floor(avg(salarios))
 from dep01
 where departamento = "05";

 select nomeFuncionario
 from dep01
 where salarios < 2000;

 select MAX(salarios) 
 from dep01
 where departamento = "03";

  select nomeFuncionario
 from dep01
 where salarios < 2000 and departamento = "05";

 select nomeFuncionario
 from dep01
 where DAY(dataAdimicao) = 15 ;

 select nomeFuncionario
 from dep01
 where MONTH(dataAdimicao) = 07;
 
  -- colocar a mudança de genero aqui

create table if not exists morto (
  codigo int NOT NULL auto_increment ,
  nomeFuncionario varchar(255) not null,
  funcoes varchar(255) default NULL,
  salarios decimal default NULL,
  departamento varchar(255) not null,
  Filhos int not null,
  dataAdimicao date ,
  PRIMARY KEY (codigo)
);

Insert into morto select * from dep01 where codigo = 15;
Insert into morto select * from dep01 where codigo = 5;
Insert into morto select * from dep01 where codigo = 1;
Insert into morto select * from dep01 where codigo = 17;
Insert into morto select * from dep01 where codigo = 22;
Insert into morto select * from dep01 where codigo = 13;
Insert into morto select * from dep01 where codigo = 11;
Insert into morto select * from dep01 where codigo = 34;
Insert into morto select * from dep01 where codigo = 40;

delete from dep01 where codigo = 15;
delete from dep01 where codigo = 5;
delete from dep01 where codigo = 1;
delete from dep01 where codigo = 17;
delete from dep01 where codigo = 22;
delete from dep01 where codigo = 13;
delete from dep01 where codigo = 11;
delete from dep01 where codigo = 34;
delete from dep01 where codigo = 40;
 
SELECT funcoes, count(*)
FROM dep01
GROUP BY funcoes;

 SELECT funcoes, count(*)
FROM dep01
where departamento = 5
GROUP BY funcoes;

 SELECT count(Filhos), nomeFuncionario
FROM dep01
where Filhos >= 1
GROUP BY nomeFuncionario;

 SELECT  count(*), Filhos
FROM dep01
where Filhos >= 1
GROUP BY Filhos;

(Select *
from dep01
where departamento = 5)
union
(Select *
from morto
where departamento = 5)
order by nomeFuncionario asc;

 -- select *
 -- from morto;

(Select *
from dep01
where funcoes = "vendedor")
union
(Select *
from morto
where funcoes = "vendendor")
order by nomeFuncionario asc;

select count(*)
from dep01
where nomeFuncionario like "%Silva%"
group by departamento;	

CREATE TABLE if not exists cliente (
	COD char(3) not null primary key,
    NOM char(40) not null,
    Endereço char(50) not null,
    Cidade varchar(20) not null,
    Estado char(2) not null,
    CEP char(9) not null
);

insert into `cliente` 
values 
(001, 'Mecânica Rio de Janeiro', 'Rua Amazonas, 321', 'Centro', 'RJ', '12345-678'),
(002, 'Mecânica Belo Horizonte', 'Avenida Brasil, 456', 'Funcionários', 'MG', '23456-789'),
(003, 'Mecânica Porto Alegre', 'Rua das Flores, 789', 'Moinhos de Vento', 'RS', '34567-890'),
(004, 'Micro informatica S.A', 'Rua XV de Novembro, 101', 'Centro', 'PR', '45678-901'),
(005, 'Mecânica Fortaleza', 'Avenida Beira-Mar, 202', 'Aldeota', 'CE', '56789-012'),
(006, 'Mecânica Recife', 'Rua do Príncipe, 303', 'Boa Vista', 'PE', '67890-123'),
(007, 'Mecânica Salvador', 'Rua dos Mares, 404', 'Barra', 'BA', '78901-234'),
(008, 'Mecânica Campinas', 'Rua das Palmeiras, 505', 'Cambuí', 'SP', '89012-345'),
(009, 'Mecânica Brasília', 'Avenida das Nações, 606', 'Asa Sul', 'DF', '90123-456');

select * from cliente;

CREATE TABLE if not exists vendas (
	duplic char(6) not null primary key,
    valor decimal(10,2) not null,
    vencimento date not null,
	COD char(3) not null
    );
    
insert into `vendas` 
values 
('23012', 945.20, '2020-01-07', 002),
('23013', 1123.75, '2021-02-08', 001),
('23014', 1300.60, '2022-05-09', 003),
('23015', 980.50, '2023-01-10', 004),
('23016', 1678.90, '2024-03-11', 005),
('23017', 1245.30, '2025-09-12', 001),
('23018', 1350.25, '2026-01-01', 004),
('23019', 1012.40, '2027-01-02', 007),
('23020', 1598.70, '2028-02-03', 009),
('23021', 1678.90, '2024-03-11', 004),
('23022', 1245.30, '2025-10-12', 008),
('23023', 1350.25, '2026-01-01', 006),
('23024', 1012.40, '2027-01-02', 007),
('23025', 1598.70, '2028-02-03', 002),
('23026', 1175.85, '2029-02-04', 003);

select * from vendas;

select cliente.NOM, vendas.duplic from cliente, vendas
where cliente.COD = vendas.COD;

select vendas.* from vendas, cliente
where cliente.COD = vendas.COD and cliente.NOM = "Micro informatica S.A"
order by cliente.NOM;""