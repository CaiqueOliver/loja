import "./App.css";
import { Content } from "./Content";
import { Header } from "./components/Header";
import { Foot } from "./components/Footer";

function App() {
  return (
    <div className="App">
      <Header />
      <Content />
      <Foot />
    </div>
  );
}

export default App;
