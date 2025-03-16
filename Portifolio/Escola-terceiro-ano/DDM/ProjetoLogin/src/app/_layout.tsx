import { Slot } from "expo-router";
import { openDatabase } from "@/database/initializeDatabase";

export default function Layout() {
  openDatabase();
  return <Slot />;
}
