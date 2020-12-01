import { Container } from "@material-ui/core";
import Page from "./components/page";
import Characters from "./components/characters";
import CharacterForm from "./components/character-form";
import Header from "./components/header";

function App() {
  return (
    <Page square elevation={0}>
      <Container>
        <Header />
        <Characters />
        <CharacterForm />
      </Container>
    </Page>
  );
}

export default App;
