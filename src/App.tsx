import "@theme-toggles/react/css/DarkSide.css";
import "./App.css";
import { Container } from "./components";

function App() {
  return (
    <Container>
      <h1 className="text-2xl font-light underline dark:text-neutral-300">
        Hello world!
      </h1>
    </Container>
  );
}

export default App;
