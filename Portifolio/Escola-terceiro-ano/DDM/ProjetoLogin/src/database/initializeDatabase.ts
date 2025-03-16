import * as FileSystem from 'expo-file-system';
import * as SQLite from 'expo-sqlite';

export async function openDatabase() {
  const dbDir = `${FileSystem.documentDirectory}SQLite/`; // Diretório correto
  const dbPath = `${dbDir}usuarios.db`; // Caminho do banco

  // Criar diretório se não existir
  const dirInfo = await FileSystem.getInfoAsync(dbDir);
  if (!dirInfo.exists) {
    await FileSystem.makeDirectoryAsync(dbDir, { intermediates: true });
  }

  // Criar o banco e abrir
  const db = (SQLite as any).openDatabase("usuarios.db");

  // Criar a tabela se não existir
  db.transaction((tx: any) => {
    tx.executeSql(
      `CREATE TABLE IF NOT EXISTS logins (
        id INTEGER PRIMARY KEY AUTOINCREMENT,
        name TEXT NOT NULL,
        senha TEXT NOT NULL
      );`,
      [], 
      () => console.log("Tabela criada com sucesso"),
      (_: any, error: any) => console.log("Erro ao criar tabela", error)
    );
  });

  return db;
}
