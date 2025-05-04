import { useSQLiteContext } from "expo-sqlite";

export type UsuarioDatabase = {
  id: number;
  name: string;
  senha: string;
};

export function useUsuarioDatabase() {
  const database = useSQLiteContext();

  // Função para criar um novo usuário
  async function create(data: Omit<UsuarioDatabase, "id">) {
    const statement = await database.prepareAsync(
      "INSERT INTO usuarios (name, senha) VALUES ($name, $senha)"
    );
    try {
      const result = await statement.executeAsync({
        $name: data.name,
        $senha: data.senha,
      });
      const insertID = result.lastInsertRowId.toLocaleString();
      return { insertID };
    } catch (error) {
      throw error;
    } finally {
      await statement.finalizeAsync();
    }
  }

  // Função para buscar um usuário pelo nome
  async function searchName(name: string) {
    try {
      const query = "SELECT * FROM usuarios WHERE name LIKE ?";
      const response = await database.getAllAsync<UsuarioDatabase>(query, `%${name}%`);
      return response;
    } catch (error) {
      throw error;
    }
  }

  // Função para atualizar o usuário
  async function atualizarUsuario(data: { id: number, name: string, senha: string }) {
    const statement = await database.prepareAsync(
      "UPDATE usuarios SET name = $name, senha = $senha WHERE id = $id"
    );
  
    try {
      const result = await statement.executeAsync({
        $id: data.id,
        $name: data.name,
        $senha: data.senha,
      });
  
      return { atualizados: result.changes }; // opcional
    } catch (error) {
      throw error;
    } finally {
      await statement.finalizeAsync();
    }
  }
  

  // Função para excluir um usuário pelo nome
  async function deleteUsuario(id: number) {
    const statement = await database.prepareAsync(
      "DELETE FROM usuarios WHERE id = $id"  // Aqui usamos o id em vez de name
    );
  
    try {
      const result = await statement.executeAsync({ $id: id });  // Passamos id para a consulta
  
      return { deletados: result.changes }; // changes = número de linhas afetadas
    } catch (error) {
      throw error;
    } finally {
      await statement.finalizeAsync(); // sempre finalize o statement
    }
  }

  return { create, searchName, atualizarUsuario, deleteUsuario };
}