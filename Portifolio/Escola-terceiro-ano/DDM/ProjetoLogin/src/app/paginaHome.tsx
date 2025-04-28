import { View, Text, Animated } from "react-native";
import { useEffect, useRef } from "react";
import { useUser } from "@/app/userContext";
import { LinearGradient } from "expo-linear-gradient";

export default function PaginaHome() {
  const { usuario } = useUser();

  const fadeAnim = useRef(new Animated.Value(0)).current;

  useEffect(() => {
    Animated.timing(fadeAnim, {
      toValue: 1,
      duration: 700,
      useNativeDriver: true,
    }).start();
  }, []);

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
          shadowColor: "#000",
          shadowOffset: { width: 0, height: 4 },
          shadowOpacity: 0.2,
          shadowRadius: 6,
          elevation: 5,
        }}
      >
        <Text style={{ fontSize: 26, fontWeight: "bold", marginBottom: 12, color: "#333" }}>
          Bem-vindo, {usuario?.name}!
        </Text>
        <Text style={{ fontSize: 16, color: "#555", marginBottom: 4 }}>
          ID: {usuario?.id}
        </Text>
        <Text style={{ fontSize: 16, color: "#555" }}>
          Senha: {usuario?.senha}
        </Text>
      </Animated.View>
    </LinearGradient>
  );
}
