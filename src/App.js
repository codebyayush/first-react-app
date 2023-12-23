import "./App.css";
import About from "./components/About";
import Navbar from "./components/Navbar";
import Textarea from "./components/Newareatext";

function App() {
  return (
    <>
      <Navbar title="TextUtilities" aboutText="About" />
      <div className="container">
        <Textarea text="keep calm and type here" />
      <div className="container">
        <About/>
      </div>
      </div>
    </>
  );
}

export default App;
