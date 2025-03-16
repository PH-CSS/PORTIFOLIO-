import '../index.css';
import  ItemList  from "./ItemList";

const Main = () => {
  return (
    <div className='main'>
      <ItemList title="Artista"/>
      <ItemList title="Música"/>
    </div>
  )
}

export default Main