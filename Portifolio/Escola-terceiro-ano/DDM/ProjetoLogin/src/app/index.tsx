import { View, Text, Button, Alert } from "react-native";
import { useEffect, useState } from "react";
import { Link, router } from "expo-router";

import { Input } from "@/components/input";
import { useUsuarioDatabase, UsuarioDatabase } from "@/database/useUsuarioDatabase";
import { UsuariosList } from "@/components/usuarios";


export default function index(){
  const [id, setId] = useState("");
  const [name, setName] = useState("");
  const [search, setSearch] = useState("");
  const [senha, setSenha] = useState("");
  const [erroSenha, setErroSenha] = useState(false);
  // para fazer a variavel :
  // (tipo dela) [nome (que será usado para pegar a variavel), (nome da função)] = useStade((tipo da variavel))
  const [usuarios, setUsuarios] = useState<UsuarioDatabase[]>([]);

  const Usuarios = useUsuarioDatabase()

  async function create() {
    try {
      if (senha.length <= 4) {
        return Alert.alert("Tamanho da senha", "A senha precisa ter mais que 4 letras")

      }

      function existenciaNome() {
        return usuarios.some(usuario => usuario.name === name);
      }
      
      if (existenciaNome()) {
        Alert.alert("Erro", "Este nome já está cadastrado!");
      } else {
        // Cadastrar normalmente

        const response = await Usuarios.create({name, senha})
        Alert.alert("Produto cadastrado com sucesso ID: " + response.insertID)
        router.push("/loginPage");

        list()
      }

    } catch (error) {
      console.log(error);
    }
  }

  async function list() {
    try {
      const response = await Usuarios.searchName(search)
      setUsuarios(response)
    } catch (error) {
      throw error
    }
  }

  useEffect(() => {
    list()
  },[search])

  function passwordValidantion(text: string) {
    setSenha(text);
    setErroSenha(text.length < 4);
  }

  return(
    <View style={{flex:1, justifyContent:"center", padding:32, gap:16}}>
      <Input placeholder="Nome" onChangeText={setName} value={name}/>
      <Input 
      placeholder="Senha" 
      onChangeText={passwordValidantion} 
      secureTextEntry={true} 
      autoCapitalize="none" 
      style={{
        borderWidth: 2,
        borderColor: erroSenha ? "red" : "green", // Vermelho se erro, verde se válido
        padding: 10,
        borderRadius: 5,
      }}
      />
      <Button title="Cadastrar" onPress={create} />
      <Link href={"/loginPage"}>Entrar em uma conta</Link>
      


    </View>
  )
}