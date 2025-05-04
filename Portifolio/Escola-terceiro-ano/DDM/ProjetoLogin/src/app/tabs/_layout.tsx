import FontAwesome from '@expo/vector-icons/FontAwesome';
import { Tabs } from 'expo-router';

export default function Layout() {
  return (
    <Tabs screenOptions={{  }}>
    <Tabs.Screen
      name="paginaHome"
      options={{
        headerShown: false,
        title: 'Home',
        tabBarIcon: ({ color }) => <FontAwesome size={28} name="home" color={color} />,
      }}
    />
    <Tabs.Screen
      name="usuario"
      options={{
        headerShown: false,
        title: 'usuario',
        tabBarIcon: ({ color }) => <FontAwesome size={28} name="cog" color={color} />,
      }}
    />
  </Tabs>
  );
}