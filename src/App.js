import { Provider } from "react-redux";
import "./App.css";
import { Header } from "./components/Header/Header";
import { store } from "./redux/store";
import { AppRouter } from "./router/AppRouter";

function App() {
  return (
    <div className="App">
      <Provider store={store}>
        <Header />
        <AppRouter />
      </Provider>
    </div>
  );
}

export default App;
