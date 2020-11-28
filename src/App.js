import { Paper, Container } from "@material-ui/core";
import Characters from "./components/characters";
import CharacterForm from "./components/character-form";
import Header from "./components/header";

function App() {
  return (
    <div className="App">
      <Paper square elevation={0} style={{ width: "100vw", height: "100vh" }}>
        <Container>
          <Header />
          <Characters />
          <CharacterForm />
        </Container>
      </Paper>
    </div>
  );
}

export default App;
