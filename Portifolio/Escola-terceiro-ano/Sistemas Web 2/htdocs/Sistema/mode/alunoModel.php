<?php
// conecão com o banco de dados
// a classe contribui com as informações para o acesso do banco de dados alocado para esse serviço 
class Database {
    private $dsn = 'mysql:host=localhost;dbname=expo_data_base';
    private $usuario = 'root';
    private $senha = '';
    private $conexao;

    // Construtor da classe, estabelece a conexão
    public function __construct() {
        $this->conectar();
    }

    // Método para estabelecer a conexão
    private function conectar() {
        try {
            $this->conexao = new PDO($this->dsn, $this->usuario, $this->senha);
            $this->conexao->setAttribute(PDO::ATTR_ERRMODE, PDO::ERRMODE_EXCEPTION);
        } catch (PDOException $e) {
            die("Conexão falhou: " . $e->getMessage());
        }
    }

    // Método para obter a conexão
    public function getConexao() {
        return $this->conexao;
    }


}

?>
