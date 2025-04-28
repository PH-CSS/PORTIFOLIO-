import { Text, Animated  } from "react-native";
import { useState, useRef } from "react";
import { Link, router } from "expo-router";

export default function AnimatedHendlePress() {
  const [message, setMessage] = useState('Esperando...');
  const colorAnim = useRef(new Animated.Value(0)).current; // Valor animado
  const opacityAnim = useRef(new Animated.Value(1)).current; // Anima opacidade

  const handlePress = () => {
      // Reseta a animação para começar do zero
      opacityAnim.setValue(1);
      colorAnim.setValue(0);
      
  
      Animated.parallel([
        Animated.timing(colorAnim, {
          toValue: 1,
          duration: 2000,
          useNativeDriver: false,
        }),
        Animated.timing(opacityAnim, {
          toValue: 0,
          duration: 2000,
          useNativeDriver: false,
        }),
      ]).start(() => {
        setMessage('Tempo esgotado!');
        opacityAnim.setValue(0); // Mantém invisível antes da nova animação
  
        // Primeiro Timer (3s) → "Tempo esgotado!"
        setTimeout(() => {
          setMessage('Tempo esgotado!');

          Animated.timing(opacityAnim, {
            toValue: 1,
            duration: 1500, // Suaviza o surgimento
            useNativeDriver: false,
          }).start();

          setTimeout(() => {
            setMessage('Tente novamente');

            Animated.timing(opacityAnim, {
              toValue: 1,
              duration: 1500,
              useNativeDriver: false,
            }).start();
          }, 2000);
        }, 3000);

      });
    };
  
    // Interpolação da cor (preto → vermelho)
    const interpolatedColor = colorAnim.interpolate({
      inputRange: [0, 1],
      outputRange: ['black', 'red'],
    });
  
  return(
    <Animated.Text
      onPress={handlePress}
      style={{ fontSize: 16, color: interpolatedColor }}>
      {message}
    </Animated.Text>
  )
}