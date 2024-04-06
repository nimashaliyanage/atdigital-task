import "bootstrap/dist/css/bootstrap.min.css";
import "./App.css";
import NavigationBar from "./Components/NavigationBar";
import Home from "./Components/Home";

function App() {
  return (
    <div className="App">
      <NavigationBar />
      <Home />
    </div>
  );
}

export default App;
