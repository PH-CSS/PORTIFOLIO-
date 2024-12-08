INSERT INTO filmes (nome, sinopse, duracao, diretor, artistas_principais, categoria, ano, classificacao)
VALUES
('O Grande Riso', 'Uma comédia sobre erros e reencontros.', '1h45', 'João Silva', 'Maria Alves, Carlos Souza', 'Comédia', 2023, 12),
('Amor Infinito', 'Um casal supera barreiras pelo amor eterno.', '2h', 'Ana Martins', 'Fernanda Lima, Pedro Paulo', 'Romance', 2024, 14),
('Noite Sombria', 'Uma noite assustadora em uma cidade deserta.', '1h30', 'Lucas Almeida', 'Marcos Pereira, Laura Dias', 'Terror', 2022, 18),
('Além da Terra', 'Uma jornada de exploração espacial.', '2h15', 'Sara Costa', 'Paulo Sérgio, Ana Clara', 'Ficção', 2024, 10),
('Aventura Inesquecível', 'Um grupo de amigos em busca de um tesouro.', '1h50', 'Rafael Torres', 'Clara Souza, Eduardo Gomes', 'Aventura', 2023, 12),
('Missão Explosiva', 'Uma operação cheia de ação e suspense.', '2h', 'Gabriel Mendes', 'Roberto Lima, Carolina Dias', 'Ação', 2022, 16),
('Caminhos do Coração', 'Um drama sobre superação e amizade.', '2h10', 'Juliana Rocha', 'Joana Prado, Luís Carlos', 'Drama', 2021, 14),
('Histórias da Terra', 'Um documentário sobre a biodiversidade.', '1h30', 'Renato Nogueira', 'Especialistas em meio ambiente', 'Documentário', 2020, 10),
('Ano Novo, Vida Nova', 'Uma comédia romântica cheia de reviravoltas.', '1h40', 'Letícia Moura', 'Sofia Lima, Bruno Ferreira', 'Comédia', 2023, 12),
('Mistério na Mansão', 'Uma investigação cheia de suspense e drama.', '1h55', 'Carlos Henrique', 'André Santos, Paula Silva', 'Drama', 2024, 16);

SELECT * FROM filmes WHERE categoria = 'Comédia';

SELECT * FROM filmes WHERE categoria = 'Romance';

SELECT * FROM filmes WHERE categoria = 'Terror';

SELECT * FROM filmes WHERE categoria = 'Ficção';

SELECT * FROM filmes WHERE categoria = 'Aventura';

SELECT * FROM filmes WHERE categoria = 'Ação';

SELECT * FROM filmes WHERE categoria = 'Drama';

SELECT * FROM filmes WHERE categoria = 'Documentário';

SELECT * FROM filmes WHERE ano = 2024;

SELECT * FROM filmes WHERE duracao = '1h30';

SELECT * FROM filmes WHERE classificacao >= 18;
