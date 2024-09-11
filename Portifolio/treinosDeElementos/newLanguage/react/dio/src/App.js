import Button from "./components/Button";
import Input from "./components/input";
import { Container, Content } from "./styles";

const  App = () => {
  return (
    <Container className="aaa" >
      <Content>
       <Input title = {"olá"}/>
       <Button />
      </Content>
    </Container>
  );
}

export default App;
