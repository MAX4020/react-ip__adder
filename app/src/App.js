import Main from "./page/Main"
import './App.css';
import { MainContextProvider } from "./contexts/MainContext";

function App() {
  return (
    <MainContextProvider>
      <Main/>
    </MainContextProvider>
  );
}

export default App;
