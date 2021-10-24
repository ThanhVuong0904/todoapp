import ThemeContextProvider from "./contexts/ThemeContext";
import BackgroundImage from "./components/BackgroundImage";
import Container from "./components/Container";
import TodoApp from "./components/TodoApp";
import TodoContextProvider from "./contexts/TodoContext";

function App() {
  return (
    <ThemeContextProvider>
      <Container>
        <BackgroundImage/> 
        <TodoContextProvider>
          <TodoApp />
        </TodoContextProvider>
      </Container>
    </ThemeContextProvider>
  );
}

export default App;
