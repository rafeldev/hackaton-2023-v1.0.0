import { useSelector } from "react-redux";
import "./App.css";
import { Header } from "./components/Header/Header";
import SpinnerLoading from "./components/Spinner";
import { loadingSelector } from "./redux/slices/loadingSlice";
import { AppRouter } from "./router/AppRouter";

function App() {
  const isLoading = useSelector(loadingSelector);
  return (
    <div className="App">
      {isLoading && <SpinnerLoading />}
      <Header />
      <AppRouter />
    </div>
  );
}

export default App;
