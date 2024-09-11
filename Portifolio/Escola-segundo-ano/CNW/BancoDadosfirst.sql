create database PH31;
use PH31;

CREATE TABLE dep01 (
  codigo int NOT NULL auto_increment ,
  nomeFuncionario varchar(255) not null,
  funcoes varchar(255) default NULL,
  salarios decimal default NULL,
  mesAdm varchar(255) not null,
  departamento varchar(255) not null,
  PRIMARY KEY (codigo)
) ;

INSERT INTO `dep01` (`nomeFuncionario`,`funcoes`,`salarios`,`mesAdm`, `departamento`) VALUES ("Malesuada Rez","construtora",1847,"Outubro", "01");
INSERT INTO `dep01` (`nomeFuncionario`,`funcoes`,`salarios`,`mesAdm`, `departamento`) VALUES ("Aliquam Rez","vendedor",1835,"Outubro", "01");
INSERT INTO `dep01` (`nomeFuncionario`,`funcoes`,`salarios`,`mesAdm`, `departamento`) VALUES ("Union Carbide Rez","vendedor",2055,"Outubro", "01");
INSERT INTO `dep01` (`nomeFuncionario`,`funcoes`,`salarios`,`mesAdm`, `departamento`) VALUES ("Magna Carta Rez","Produtora",3071,"Outubro", "01");
INSERT INTO `dep01` (`nomeFuncionario`,`funcoes`,`salarios`,`mesAdm`, `departamento`) VALUES ("Nunc Rez","Gerente",3859,"Outubro", "01");
INSERT INTO `dep01` (`nomeFuncionario`,`funcoes`,`salarios`,`mesAdm`, `departamento`) VALUES ("Ivan Rez","Diretor",4440,"Outubro", "01");

INSERT INTO `dep01` (`nomeFuncionario`,`funcoes`,`salarios`,`mesAdm`, `departamento`) VALUES ("Malesuada Leo","construtora",4847,"Fevereiro", "02");
INSERT INTO `dep01` (`nomeFuncionario`,`funcoes`,`salarios`,`mesAdm`, `departamento`) VALUES ("Aliquam Leo","construtora",4135,"Janeiro", "02");
INSERT INTO `dep01` (`nomeFuncionario`,`funcoes`,`salarios`,`mesAdm`, `departamento`) VALUES ("Union Carbide Leo","vendedor",3755,"Fevereiro", "02");
INSERT INTO `dep01` (`nomeFuncionario`,`funcoes`,`salarios`,`mesAdm`, `departamento`) VALUES ("Magna Carta Leo","vendedor",3071,"Dezembro", "02");
INSERT INTO `dep01` (`nomeFuncionario`,`funcoes`,`salarios`,`mesAdm`, `departamento`) VALUES ("Nunc Leo","Gerente",3859,"Fevereiro", "02");
INSERT INTO `dep01` (`nomeFuncionario`,`funcoes`,`salarios`,`mesAdm`, `departamento`) VALUES ("Ivan Leo","Gerente",4440,"Dezembro", "02");

INSERT INTO `dep01` (`nomeFuncionario`,`funcoes`,`salarios`,`mesAdm`, `departamento`) VALUES ("Malesuada Silva","vendedor",4847,"Fevereiro", "03");
INSERT INTO `dep01` (`nomeFuncionario`,`funcoes`,`salarios`,`mesAdm`, `departamento`) VALUES ("Aliquam Silva","vendedor",4135,"Fevereiro", "03");
INSERT INTO `dep01` (`nomeFuncionario`,`funcoes`,`salarios`,`mesAdm`, `departamento`) VALUES ("Union Carbide Silva ","vendedor",3755,"Dezembro", "03");
INSERT INTO `dep01` (`nomeFuncionario`,`funcoes`,`salarios`,`mesAdm`, `departamento`) VALUES ("Magna Carta Silva","Gerente",3071,"Fevereiro", "03");
INSERT INTO `dep01` (`nomeFuncionario`,`funcoes`,`salarios`,`mesAdm`, `departamento`) VALUES ("Nunc Silva","Gerente",3859,"Fevereiro", "03");
INSERT INTO `dep01` (`nomeFuncionario`,`funcoes`,`salarios`,`mesAdm`, `departamento`) VALUES ("Invan Silva","Gerente",4440,"Fevereiro", "03");

INSERT INTO `dep01` (`nomeFuncionario`,`funcoes`,`salarios`,`mesAdm`, `departamento`) VALUES ("Malesuada C ","vendedor",4847,"Fevereiro", "04");
INSERT INTO `dep01` (`nomeFuncionario`,`funcoes`,`salarios`,`mesAdm`, `departamento`) VALUES ("Aliquam C","vendedor",4135,"Fevereiro", "04");
INSERT INTO `dep01` (`nomeFuncionario`,`funcoes`,`salarios`,`mesAdm`, `departamento`) VALUES ("Union Carbide C","Gerente",3755,"Outubro", "04");
INSERT INTO `dep01` (`nomeFuncionario`,`funcoes`,`salarios`,`mesAdm`, `departamento`) VALUES ("Magna Carta C","Gerente",3071,"Fevereiro", "04");
INSERT INTO `dep01` (`nomeFuncionario`,`funcoes`,`salarios`,`mesAdm`, `departamento`) VALUES ("Nunc C","None",0,"Janeiro", "04");
INSERT INTO `dep01` (`nomeFuncionario`,`funcoes`,`salarios`,`mesAdm`, `departamento`) VALUES ("Ivan C","Diretor",4440,"Fevereiro", "04");

INSERT INTO `dep01` (`nomeFuncionario`,`funcoes`,`salarios`,`mesAdm`, `departamento`) VALUES ("Malesuada H ","vendedor",4847,"Dezembro", "05");
INSERT INTO `dep01` (`nomeFuncionario`,`funcoes`,`salarios`,`mesAdm`, `departamento`) VALUES ("Aliquam H ","construtora",4135,"Dezembro", "05");
INSERT INTO `dep01` (`nomeFuncionario`,`funcoes`,`salarios`,`mesAdm`, `departamento`) VALUES ("Union Carbide H","construtora",3755,"Outubro", "05");
INSERT INTO `dep01` (`nomeFuncionario`,`funcoes`,`salarios`,`mesAdm`, `departamento`) VALUES ("Magna Carta H ","Diretor",3071,"Outubro", "05");
INSERT INTO `dep01` (`nomeFuncionario`,`funcoes`,`salarios`,`mesAdm`, `departamento`) VALUES ("Nunc H ","Diretor",3859,"Outubro", "05");
INSERT INTO `dep01` (`nomeFuncionario`,`funcoes`,`salarios`,`mesAdm`, `departamento`) VALUES ("Ivan H","Diretor",4440,"Outubro", "05");

SELECT * FROM dep01;

 
 SELECT  nomeFuncionario
 FROM dep01
 WHERE departamento = '05'
 union all
 
 SELECT  nomeFuncionario
 FROM dep01
 WHERE funcoes = 'vendedor';
 
 SELECT  salarios
 FROM dep01
 where departamento = "03";
 
 SELECT funcoes, nomeFuncionario
FROM dep01
ORDER BY funcoes DESC;

 SELECT funcoes, nomeFuncionario
FROM dep01
ORDER BY funcoes ASC, nomeFuncionario DESC ;


  SELECT  nomeFuncionario, funcoes, salarios
 FROM dep01
 WHERE mesAdm = 'Outubro';



