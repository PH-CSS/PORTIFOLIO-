import * as FileSystem from "expo-file-system";
import { openDatabase } from "expo-sqlite";

const dbName = "usuarios.db";
const dbDir = `${FileSystem.documentDirectory}SQLite/`;

// Garante que o diretório existe antes de abrir o banco
async function setupDatabase() {
  await FileSystem.makeDirectoryAsync(dbDir, { intermediates: true });

  const db = openDatabase(dbName);
  return db;
}

export default setupDatabase;