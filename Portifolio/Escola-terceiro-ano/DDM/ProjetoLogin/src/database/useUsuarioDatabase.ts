import * as SQLite from "expo-sqlite"
import * as FileSystem from 'expo-file-system';
import { Alert } from "react-native";


export type UsuarioDatabase = {
  id: number
  name: string
  senha: string
}

export function useUsuarioDatabase(){
  async function create(data: UsuarioDatabase) {
    const dbDir = `${FileSystem.documentDirectory}SQLite/`; // Diretório correto
    const dbPath = `${dbDir}usuarios.db`; // Caminho do banco
  
    // Criar diretório se não existir
    const dirInfo = await FileSystem.getInfoAsync(dbDir);
    if (!dirInfo.exists) {
      await FileSystem.makeDirectoryAsync(dbDir, { intermediates: true });
    }

    const database = (SQLite as any).openDatabaseSync(`${dbPath}`);

    return new Promise<void>((resolve, reject) => {
      database.transaction((tx: any) => {
        tx.executeSql(
          "INSERT INTO logins (name, senha) VALUES (?, ?)",
          [data.name, data.senha],

          (_: any, result: any) => {
            console.log("Usuário inserido com sucesso!", result);
            Alert.alert("Usuário inserido com sucesso! " + `Nome:${data.name} ID:${data.id}` )
            // const insertedRowId = result.lastIn
            resolve();
          },

          (_: any, error: any) => {
            console.error("Erro ao inserir usuário:", error);
            reject(error);
            return false;
          }
        );
      });
    });
  }
  return { create }
}