import { View, Text, Animated, TouchableOpacity, Alert } from "react-native";
import { useEffect, useState, useRef } from "react";
import { useUser } from "@/app/userContext";
import { LinearGradient } from "expo-linear-gradient";
import { router } from "expo-router";
import { useUsuarioDatabase } from "@/database/useUsuarioDatabase";
import { Input } from "@/components/input";

export default function PaginaHome() {
  const { usuario, updateUsuario } = useUser();
  const [name, setName] = useState<string>("");
  const [senha, setSenha] = useState("");
  
  const fadeAnim = useRef(new Animated.Value(0)).current;
  const Usuarios = useUsuarioDatabase();

  useEffect(() => {
    Animated.timing(fadeAnim, {
      toValue: 1,
      duration: 700,
      useNativeDriver: true,
    }).start();
  }, []);

  // Atualizar o usuário
  function atualizarInfo() {
    if (!usuario) return;

    if (!name && !senha) {
      Alert.alert("Aviso", "Por favor, preencha ao menos um campo para atualizar.");
      return;
    }

    const atualizacao = {
      id: usuario.id,
      name: name || usuario.name,
      senha: senha || usuario.senha,
    };

    Usuarios.atualizarUsuario(atualizacao)
      .then(() => {
        updateUsuario({ name: atualizacao.name, senha: atualizacao.senha }); // Atualiza o contexto
        Alert.alert("Sucesso", "Usuário atualizado!");
      })
      .catch((e) => {
        console.error(e);
        Alert.alert("Erro", "Erro ao atualizar usuário");
      });
  }

  // Deletar o usuário
  function deletarUsuario() {
    if (!usuario) return;
  
    Alert.alert(
      "Confirmar Exclusão",
      "Tem certeza que deseja excluir seu usuário?",
      [
        { text: "Cancelar", style: "cancel" },
        {
          text: "Deletar",
          style: "destructive",
          onPress: () => {
            Usuarios.deleteUsuario(usuario.id)
              .then(() => {
                updateUsuario(null); // Limpa o contexto
                router.replace("/"); // Redireciona para a tela de login
                Alert.alert("Sucesso", "Usuário deletado com sucesso!");
              })
              .catch((e) => {
                console.error(e);
                Alert.alert("Erro", "Erro ao deletar usuário");
              });
          }
        }
      ]
    );
  }

  return (
    <LinearGradient
      colors={["#6a11cb", "#2575fc"]}
      style={{ flex: 1, justifyContent: "center", alignItems: "center" }}
    >
      <Animated.View
        style={{
          opacity: fadeAnim,
          backgroundColor: "#fff",
          padding: 24,
          borderRadius: 20,
          width: "85%",
          alignItems: "center",
          minHeight: 400,
          shadowColor: "#000",
          shadowOffset: { width: 0, height: 4 },
          shadowOpacity: 0.2,
          shadowRadius: 6,
          elevation: 5,
          justifyContent: "center",
        }}
      >
        <Text style={{ fontSize: 26, fontWeight: "bold", marginBottom: 12, color: "#333" }}>
          Conta de: {usuario?.name}!
        </Text>
        <Text style={{ fontSize: 16, color: "#555", marginBottom: 4 }}>
          ID: {usuario?.id}
        </Text>
        <Text style={{ fontSize: 16, color: "#555" }}>
          Senha: {usuario?.senha}
        </Text>

        {/* Inputs para atualizar usuário */}
        <View style={{ flexDirection: "row", gap: 10 }}>
          <Input
            placeholder="Nome"
            secureTextEntry={false}
            onChangeText={setName}
            value={name}
            autoCapitalize="none"
            style={{
              backgroundColor: "#fff",
              borderRadius: 12,
              padding: 10,
              fontSize: 12,
              marginTop: 12,
              shadowColor: "#000",
              shadowOffset: { width: 0, height: 4 },
              shadowOpacity: 0.1,
              shadowRadius: 6,
              elevation: 2,
              borderWidth: 1.5,
            }}
          />
          <Input
            placeholder="Senha"
            secureTextEntry={true}
            onChangeText={setSenha}
            value={senha}
            autoCapitalize="none"
            style={{
              backgroundColor: "#fff",
              borderRadius: 12,
              padding: 10,
              fontSize: 12,
              marginTop: 12,
              shadowColor: "#000",
              shadowOffset: { width: 0, height: 4 },
              shadowOpacity: 0.1,
              shadowRadius: 6,
              elevation: 2,
              borderWidth: 1.5,
            }}
          />
        </View>

        <TouchableOpacity
          onPress={atualizarInfo}
          style={{
            backgroundColor: "#4f46e5",
            marginTop: 10,
            padding: 10,
            borderRadius: 15,
          }}
        >
          <Text style={{ color: "#fff" }}>Atualizar usuário</Text>
        </TouchableOpacity>

        {/* Sair */}
        <TouchableOpacity
          onPress={() => {
            updateUsuario(null); // Limpa o contexto
            router.replace("/"); // Redireciona para a tela de login
          }}
          style={{
            backgroundColor: "#4f46e5",
            marginTop: 5,
            padding: 10,
            borderRadius: 15,
          }}
        >
          <Text style={{ color: "#fff" }}>Sair</Text>
        </TouchableOpacity>

        {/* Deletar usuário */}
        <TouchableOpacity
          onPress={deletarUsuario} // Função para deletar
          style={{
            backgroundColor: "red",
            marginTop: 55,
            padding: 10,
            borderRadius: 15,
          }}
        >
          <Text style={{ color: "#fff" }}>Deletar usuário</Text>
        </TouchableOpacity>
      </Animated.View>
    </LinearGradient>
  );
}
