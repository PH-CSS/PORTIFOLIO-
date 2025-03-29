import * as SQLite from "expo-sqlite"
import * as FileSystem from 'expo-file-system';
import { Alert } from "react-native";
import { useSQLiteContext } from "expo-sqlite";


export type UsuarioDatabase = {
  id: number,
  name: string,
  senha: string
}

export function useUsuarioDatabase() {
  const database = useSQLiteContext();

  async function create(data: Omit<UsuarioDatabase, "id">) {
      const statement = await database.prepareAsync(
          "INSERT INTO usuarios (name, senha) VALUES ($name, $senha) "
      );

      try {
        const result = await statement.executeAsync({
          $name: data.name,
          $senha: data.senha
        })

        const insertID = result.lastInsertRowId.toLocaleString()

        return {insertID}

      } catch (error) {
          throw error;
      } finally{
        await statement.finalizeAsync()
      }
  };

  async function searchName(name:string) {
    try {
      const query = "SELECT * FROM usuarios WHERE name LIKE ?"

      const response = await database.getAllAsync<UsuarioDatabase>(query, `%${name}%`)

      return response;
    } catch (error) {
      throw error;
    }
  }

  return { create, searchName };
}
