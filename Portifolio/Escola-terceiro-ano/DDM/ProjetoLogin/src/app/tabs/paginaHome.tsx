import { View, Text, Animated, FlatList, TextInput, ActivityIndicator, TouchableOpacity  } from "react-native";
import { useEffect, useState, useRef } from "react";
import { useUser } from "@/app/userContext";
import { LinearGradient } from "expo-linear-gradient";
import {useUsuarioDatabase, UsuarioDatabase} from "@/database/useUsuarioDatabase";
import { UsuariosList } from "@/components/usuarios";

export default function PaginaHome() {
  const { usuario } = useUser();

  const [usuarios, setUsuarios] = useState<UsuarioDatabase[]>([]);
  const [search, setSearch] = useState("");
  const [name, setName] = useState<string>("");
  const [loading, setLoading] = useState(false);

  const [selectedUser, setSelectedUser] = useState<UsuarioDatabase | null>(null); // Estado para o usuário selecionado

  const fadeAnim = useRef(new Animated.Value(0)).current;
  const Usuarios = useUsuarioDatabase();

  async function list() {
    try {
      setLoading(true);
      const response = await Usuarios.searchName(name);
      setUsuarios(response);
    } catch (error) {
      throw error;
    } finally {
      setLoading(false);
    }
  }
  // || name == "Todos"

  useEffect(() => {
    if (name != "" ) {
      list();
    }else{
      setUsuarios([]);
    }
  }, [name]);

  useEffect(() => {
    Animated.timing(fadeAnim, {
      toValue: 1,
      duration: 700,
      useNativeDriver: true,
    }).start();
  }, []);

  function HandlePush(usuario:UsuarioDatabase) {
    setSelectedUser(usuario)
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
          minHeight: 300, // 🔧 altura mínima fixa
          shadowColor: "#000",
          shadowOffset: { width: 0, height: 4 },
          shadowOpacity: 0.2,
          shadowRadius: 6,
          elevation: 5,
        }}
      >
        <Text
          style={{
            fontSize: 26,
            fontWeight: "bold",
            marginBottom: 12,
            color: "#333",
          }}
        >
          Bem-vindo, {usuario?.name}!
        </Text>


        {/* input de pesquisa */}

        <TextInput
          placeholder="Pesquisar usuário"
          onChangeText={setName}
          value={name}
          style={{
            borderWidth: 1,
            borderColor: "black",
            borderRadius: 7,
            paddingHorizontal: 16,
            width: "100%",
            margin: 10,
          }}
        />

        <View style={{ height: 400, width: '100%' }}>
          {loading ? (
            <ActivityIndicator size="large" color="#2575fc" style={{ marginVertical: 16 }} />
          ) : (
            <FlatList
              data={usuarios}
              keyExtractor={(item) => String(item.id)}
              renderItem={({ item }) => {
                const isSelected = selectedUser?.id === item.id;
              
                return (
                  <TouchableOpacity
                    onPress={() => HandlePush(item)}
                    style={{
                      backgroundColor: isSelected ? "#d1e7ff" : "#fff", // cor diferente se selecionado
                      borderRadius: 12,
                      padding: 10,
                      margin: 10,
                      shadowColor: "#000",
                      shadowOffset: { width: 0, height: 4 },
                      shadowOpacity: 0.1,
                      shadowRadius: 6,
                      elevation: 2,
                      borderWidth: 1.5,
                      borderColor: isSelected ? "#2575fc" : "#dcdcdc", // borda azul se selecionado
                    }}
                  >
                    <UsuariosList onPress={() => HandlePush(item)} data={item} />
                  </TouchableOpacity>
                );
              }}
              
              ListEmptyComponent={
                name !== "" ? (
                  <Text style={{ marginTop: 10, color: "#888" }}>
                    Nenhum usuário encontrado.
                  </Text>
                ) : null
              }
            />
          )}
        </View>


      </Animated.View>
    </LinearGradient>
  );
}
