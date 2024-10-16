create database if not exists proc6;
use proc6;

DELIMITER $$

CREATE PROCEDURE saudacaoTeste()
BEGIN
    SELECT 'Olá, Mundo!';
END $$

DELIMITER ;

CALL saudacaoTeste();
 -- teste de sintaxe para exibir a mensagem
 
DELIMITER $$

CREATE PROCEDURE saudacao()
BEGIN
	declare	Mensagem varchar(30);
    SET Mensagem = 'Esta é uma mensagem';
    SELECT Mensagem;
END $$

DELIMITER ;

CALL saudacao();
 -- seleciona o titulo e o valor dele



DELIMITER $$

CREATE PROCEDURE saudacaoParaAlguem( IN Nome varchar(25) )
BEGIN
	declare	Mensagem varchar(60);
    SET Mensagem = concat('Esta é uma mensagem para ', Nome);
    SELECT Mensagem;
END $$
 -- concatenação para juntar variaveis e informações
DELIMITER ;

CALL saudacaoParaAlguem('Roger');


DELIMITER $$

CREATE PROCEDURE saudacaoParanum( IN a int, in b int, out saida int )
 -- realização de contas
 -- aproveitando a sintaxe do exercicios anterior
BEGIN
    SET saida = a + b ;
    if (saida >= 10) then
    set saida = saida * 10 ;
    else
	select saida;
    end if;
END $$
DELIMITER ;

CALL saudacaoParanum(5, 5, @sai);
CALL saudacaoParanum(2, 5, @sai);

 -- select @sai;
 -- ambos select vão entregar um mesmo resultado porém com títulos diferentes 
 
 DELIMITER $$

CREATE PROCEDURE eDivisivel( in val int )

BEGIN
	declare result int;
    SET result = val % 3;
    if (result = 0) then
    -- pode usar o concat() para mostrar junto
    select val, ' é divisivel por 3' ;
    else
	select val, ' não é divisivel por 3';
    end if;
END $$
DELIMITER ;

CALL eDivisivel(5);


 DELIMITER $$
CREATE PROCEDURE diaDaSemana()
BEGIN
	declare result int;
    SET result = dayofweek(curdate());
    CASE 
		when result = 1 then select 'Domingo';
        when result = 2 then select 'Segunda';
        when result = 3 then select 'Terça';
        when result = 4 then select 'Quarta';
        when result = 5 then select 'Quinta';
        when result = 6 then select 'Sexta';
        when result = 7 then select 'Sábado';
        -- if (tanana) then
        -- tanana;
        -- elseif (tanana) then
        -- tanan;
        -- else
        -- tanana;
        -- end if;
	END CASE;
END $$
DELIMITER ;

CALL diaDaSemana();


 DELIMITER $$
CREATE PROCEDURE whileLoop(in Valor int)
BEGIN
	declare floop, I int;
		calculo: while (Valor >= I ) DO
		Set floop = floop * I;
		set I = I + 1;
    end while calculo;
    select floop;    
    
    -- calc: loop
    -- tanana;
    -- if (restrição no final)
    -- leave calc;
    -- end if ;
    -- end loop
    
    -- outra forma 
    
    -- calc: repeat 
    -- tanana ;
    -- until (algo) end repeat calc;
END $$
DELIMITER ;

CALL whileLoop();

SHOW procedure status LIKE 'whileLoop';
 -- mostra as informações do procedure especifico

drop procedure whileLoop;
 -- deleta as informações do procedure
 
 SHOW procedure status;
  -- mostra as informações dos procedure DE TUDO (carregado na maquina)

 