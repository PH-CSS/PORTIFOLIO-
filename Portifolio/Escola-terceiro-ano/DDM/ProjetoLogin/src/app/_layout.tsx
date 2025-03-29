import { Slot } from "expo-router";
import { SQLiteProvider } from "expo-sqlite";

import { initializeDatabase } from "@/database/initializeDatabase";
import { UserProvider } from "@/app/userContext"; // Importa o contexto

export default function Layout() {
  return(
    <UserProvider>
      <SQLiteProvider databaseName="myDatabase.db" onInit={initializeDatabase}>
        <Slot />
      </SQLiteProvider>
    </UserProvider>
  ) 
}
