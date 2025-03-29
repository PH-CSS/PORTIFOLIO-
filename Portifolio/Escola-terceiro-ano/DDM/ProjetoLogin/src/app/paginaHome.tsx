import { View, Text } from "react-native";
import { useUser } from "@/app/userContext"; // Importa o contexto

export default function PaginaHome() {
  const { usuario } = useUser(); // Obtém os dados do usuário logado

  console.log(usuario);
  

  return (
    <View style={{ flex: 1, justifyContent: "center", alignItems: "center" }}>
      <Text style={{ fontSize: 20, fontWeight: "bold" }}>Bem-vindo, {usuario?.name}!</Text>
      <Text>ID: {usuario?.id}</Text>
      <Text>Senha: {usuario?.senha}</Text>
    </View>
  );
}
