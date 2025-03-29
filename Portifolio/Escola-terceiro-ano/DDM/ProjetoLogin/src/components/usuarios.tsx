// caso precise ver a lsita de usuarios é só uar esse arquivo com flatlist

// import { UsuariosList } from "@/components/usuarios";

// const [search, setSearch] = useState("");

// const Usuarios = useUsuarioDatabase()

// async function list() {
//   try {
//     const response = await Usuarios.searchName(search)
//     setUsuarios(response)
//   } catch (error) {
//     throw error
//   }
// }

// useEffect(() => {
//   list()
// },[search])

// <FlatList
// data={usuarios}
// keyExtractor={(item) => String(item.id)}
// renderItem={({ item }) =><UsuariosList data={item}/>}
// />

import { Pressable, PressableProps, Text } from "react-native";

type Props = PressableProps &{
  data:{
    name:string,
    senha:string
  }
}

export function UsuariosList({data, ...rest}:Props) {
  return (
  <Pressable {...rest}>
    <Text>
      {data.senha} - {data.name}
    </Text>
  </Pressable>
  )
}