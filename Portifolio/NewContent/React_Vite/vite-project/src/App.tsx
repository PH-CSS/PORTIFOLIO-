import  ListGroup  from "./components/ListGroup";

function App() {
  const cidades = ["São Paulo", "MG", "RJ", "MT", ""]; 

  return <div><ListGroup List={cidades} heading="Cidades" /></div>
}

export default App;