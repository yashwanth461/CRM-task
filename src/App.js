import logo from "./logo.svg";
import "./App.css";
import "bootstrap/dist/css/bootstrap.min.css";
import Nav from "./Components/Nav";
import RouterDom from "./Components/RouterDom";
import Footer from "./Components/Footer";
function App() {
  return (
    <div>
      <Nav />
      <RouterDom />
      <Footer />
    </div>
  );
}

export default App;
