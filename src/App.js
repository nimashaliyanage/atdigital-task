import "bootstrap/dist/css/bootstrap.min.css";
import "./App.css";
import NavigationBar from "./Components/NavigationBar";
import Home from "./Components/Home";
import Body from "./Components/Body";
import Footer from "./Components/Footer";

function App() {
  return (
    <div className="App">
      <NavigationBar />
      <Home />
      <Body />
      <Footer />
    </div>
  );
}

export default App;
