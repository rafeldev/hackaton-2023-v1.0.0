import "./App.css";
import { Header } from "./components/Header/Header";
import { AppRouter } from "./router/AppRouter";

function App() {
  return (
    <div className="App">
      <Header />
      <AppRouter />
    </div>
  );
}

export default App;
