import { View, Text, TouchableOpacity, Alert, Animated } from "react-native";
import { useEffect, useState, useRef } from "react";
import { router, Link } from "expo-router";
import { Input } from "@/components/input";
import { useUsuarioDatabase, UsuarioDatabase } from "@/database/useUsuarioDatabase";
import { useUser } from "@/app/userContext";

export default function Login() {
  const [name, setName] = useState("");
  const [search, setSearch] = useState("");
  const [senha, setSenha] = useState("");
  const [erroSenha, setErroSenha] = useState(false);
  const [usuarios, setUsuarios] = useState<UsuarioDatabase[]>([]);
  const Usuarios = useUsuarioDatabase();
  const { setUsuario } = useUser();

  const fadeAnim = useRef(new Animated.Value(0)).current;

  useEffect(() => {
    Animated.timing(fadeAnim, {
      toValue: 1,
      duration: 600,
      useNativeDriver: true,
    }).start();
  }, []);

  async function checkLog() {
    try {
      if (senha.length < 4) {
        return Alert.alert("Tamanho da senha", "A senha precisa ter mais que 4 letras");
      }

      function existenciaNome() {
        return usuarios.some(usuario => usuario.name === name);
      }

      function existenciaSenha() {
        return usuarios.some(usuario => usuario.senha === senha);
      }

      if (existenciaNome() && existenciaSenha()) {
        Alert.alert("Login bem-sucedido!", "Redirecionando...");
        const searchID = await Usuarios.searchName(name);
        const IdparaLogin = searchID[0].id;

        const usuarioLogado = {
          id: IdparaLogin,
          name,
          senha,
        };

        setUsuario(usuarioLogado);
        router.push("/paginaHome");
      } else {
        Alert.alert("Usuário não encontrado", "Cadastre-se ou verifique as informações.");
      }

      list();
    } catch (error) {
      console.log(error);
    }
  }

  async function list() {
    try {
      const response = await Usuarios.searchName(search);
      setUsuarios(response);
    } catch (error) {
      throw error;
    }
  }

  useEffect(() => {
    list();
  }, [search]);

  function passwordValidantion(text: string) {
    setSenha(text);
    setErroSenha(text.length < 4);
  }

  return (
    <Animated.View
      style={{
        flex: 1,
        backgroundColor: "#f5f5f5",
        paddingHorizontal: 24,
        justifyContent: "center",
        opacity: fadeAnim,
      }}
    >
      <Text
        style={{
          fontSize: 28,
          fontWeight: "bold",
          marginBottom: 24,
          textAlign: "center",
          color: "#333",
        }}
      >
        Bem-vindo de volta!
      </Text>

      <Input
        placeholder="Nome"
        onChangeText={setName}
        value={name}
        style={{
          backgroundColor: "#fff",
          borderRadius: 12,
          padding: 14,
          fontSize: 16,
          shadowColor: "#000",
          shadowOffset: { width: 0, height: 4 },
          shadowOpacity: 0.1,
          shadowRadius: 6,
          elevation: 2,
          borderWidth: 1.5,
          borderColor: "#dcdcdc",
        }}
      />

      <Input
        placeholder="Senha"
        onChangeText={passwordValidantion}
        secureTextEntry
        autoCapitalize="none"
        style={{
          backgroundColor: "#fff",
          borderRadius: 12,
          padding: 14,
          fontSize: 16,
          marginTop: 12,
          shadowColor: "#000",
          shadowOffset: { width: 0, height: 4 },
          shadowOpacity: 0.1,
          shadowRadius: 6,
          elevation: 2,
          borderWidth: 1.5,
          borderColor: erroSenha ? "#e74c3c" : "#2ecc71",
        }}
      />

      <TouchableOpacity
        onPress={checkLog}
        style={{
          marginTop: 20,
          backgroundColor: "#4f46e5",
          paddingVertical: 14,
          borderRadius: 12,
          alignItems: "center",
          shadowColor: "#000",
          shadowOffset: { width: 0, height: 2 },
          shadowOpacity: 0.2,
          shadowRadius: 4,
          elevation: 2,
        }}
      >
        <Text style={{ color: "#fff", fontSize: 16, fontWeight: "bold" }}>Entrar</Text>
      </TouchableOpacity>

      <View style={{ marginTop: 16, alignItems: "center" }}>
        <Text style={{ color: "#555" }}>
          Ainda não tem conta?{" "}
          <Link href={"/"} style={{ color: "#4f46e5", fontWeight: "bold" }}>
            Cadastre-se
          </Link>
        </Text>
      </View>
    </Animated.View>
  );
}
