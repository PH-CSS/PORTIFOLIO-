import { View, Button, Alert } from "react-native";
import { useEffect, useState } from "react";
import { router, Link } from "expo-router";
import { Input } from "@/components/input";
import { useUsuarioDatabase, UsuarioDatabase } from "@/database/useUsuarioDatabase";
import { useUser } from "@/app/userContext"; // Importa o contexto

export default function Login() {
  const [id, setId] = useState("");
  const [name, setName] = useState("");
  const [search, setSearch] = useState("");
  const [senha, setSenha] = useState("");
  const [erroSenha, setErroSenha] = useState(false);
  const [usuarios, setUsuarios] = useState<UsuarioDatabase[]>([]);
  const Usuarios = useUsuarioDatabase();
  
  const { setUsuario } = useUser(); // Obtém a função para armazenar o usuário logado

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

        const searchID = await Usuarios.searchName(name)
        
        const IdparaLogin = searchID[0].id;
        
        const usuarioLogado = {
          id: IdparaLogin,
          name: name,
          senha: senha
        };

        // Salva os dados no contexto
        setUsuario(usuarioLogado);

        // Redireciona para a Home
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
    <View style={{ flex: 1, justifyContent: "center", padding: 32, gap: 16 }}>
      <Input placeholder="Nome" onChangeText={setName} value={name} />
      <Input 
        placeholder="Senha" 
        onChangeText={passwordValidantion} 
        secureTextEntry 
        autoCapitalize="none" 
        style={{
          borderWidth: 2,
          borderColor: erroSenha ? "red" : "green",
          padding: 10,
          borderRadius: 5,
        }}
      />
      <Button title="Entrar" onPress={checkLog} />
      <Link href={"/"}>Cadastrar-se</Link>
      
    </View>
  );
}
