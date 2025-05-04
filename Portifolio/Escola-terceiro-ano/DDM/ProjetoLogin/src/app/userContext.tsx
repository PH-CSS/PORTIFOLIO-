import React, { createContext, useContext, useEffect, useState } from "react";
import AsyncStorage from "@react-native-async-storage/async-storage";

interface Usuario {
  id: number;
  name: string;
  senha: string;
}

interface UserContextType {
  usuario: Usuario | null;
  setUsuario: (user: Usuario | null) => void;
  updateUsuario: (usuario: Partial<Usuario> | null) => Promise<void>;  // Alterado para aceitar Promise<void>
}

const UserContext = createContext<UserContextType | undefined>(undefined);

export function UserProvider({ children }: { children: React.ReactNode }) {
  const [usuario, setUsuarioState] = useState<Usuario | null>(null);

  useEffect(() => {
    async function loadUsuario() {
      const json = await AsyncStorage.getItem("@usuario");
      if (json) {
        const user = JSON.parse(json);
        setUsuarioState(user);
      }
    }
    loadUsuario();
  }, []);

  const setUsuario = async (user: Usuario | null) => {
    if (user) {
      await AsyncStorage.setItem("@usuario", JSON.stringify(user));
    } else {
      await AsyncStorage.removeItem("@usuario");
    }
    setUsuarioState(user);
  };

  const updateUsuario = async (data: Partial<Usuario> | null): Promise<void> => {
    setUsuarioState((prev) => {
      // Caso não exista 'prev' (se o usuário for null), retorna 'null'
      if (!prev && data === null) return null;
  
      // Aqui, garantimos que 'prev' seja completamente atualizado com valores válidos
      const atualizado: Usuario = {
        id: prev?.id ?? data?.id ?? 0, // Atribui 'id' do 'prev', se possível, ou usa 'data.id', ou '0'
        name: data?.name ?? prev?.name ?? "", // Atualiza 'name' ou mantém o anterior
        senha: data?.senha ?? prev?.senha ?? "", // Atualiza 'senha' ou mantém a anterior
      };
  
      // Salva o usuário atualizado no AsyncStorage
      AsyncStorage.setItem("@usuario", JSON.stringify(atualizado));
  
      return atualizado; // Retorna o objeto atualizado, que será salvo no estado
    });
  };

  return (
    <UserContext.Provider value={{ usuario, setUsuario, updateUsuario }}>
      {children}
    </UserContext.Provider>
  );
}

export function useUser() {
  const context = useContext(UserContext);
  if (!context) {
    throw new Error("useUser deve ser usado dentro de um UserProvider");
  }
  return context;
}
