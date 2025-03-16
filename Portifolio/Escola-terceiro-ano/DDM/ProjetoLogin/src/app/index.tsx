import { View, Text, Button, Alert } from "react-native";
import { useState } from "react";

import { Input } from "@/components/input";
import { useUsuarioDatabase } from "@/database/useUsuarioDatabase";

export default function index(){
  const [id, setId] = useState("")
  const [name, setName] = useState("")
  const [senha, setSenha] = useState("")
  const [usuarios, setUsuarios] = useState([])

  const Usuarios = useUsuarioDatabase()

  async function create() {
    try {
      const response = await Usuarios.create({name, senha, id: Number(id)})

    } catch (error) {
      console.log(error);
    }
  }

  async function list() {
    try {
      
    } catch (error) {
      throw error
    }
  }

  return(
    <View style={{flex:1, justifyContent:"center", padding:32, gap:16}}>
      <Input placeholder="Nome" onChangeText={setName} value={name}/>
      <Input placeholder="Senha" secureTextEntry={true} autoCapitalize="none" />
      <Button title="Cadastrar" onPress={create} />
    </View>
  )
}