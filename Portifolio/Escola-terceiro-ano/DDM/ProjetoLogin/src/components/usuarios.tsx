import { Pressable, PressableProps, Text } from "react-native";

type Usuario = {
  id: number;
  senha:string;
  name: string;
};

type Props = PressableProps & {
  data: Usuario;
};

export function UsuariosList({ data, ...rest }: Props) {
  return (
    <Pressable {...rest} style={{ padding: 10 }}>
      <Text style={{ fontWeight: "bold" }}>ID: {data.id}</Text>
      <Text>Nome: {data.name}</Text>
      <Text>senha: {data.senha}</Text>
    </Pressable>
  );
}
