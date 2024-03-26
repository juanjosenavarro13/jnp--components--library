import { Buttons } from "./examples/buttons";
import { Containers } from "./examples/containers";
import { Container } from "./lib/components/container/container";

function App() {
  return (
    <Container>
      <Buttons />
      <Containers />
    </Container>
  );
}

export default App;
