import { BrowserRouter } from "react-router-dom";
import Main from "../components/Main";
import Navbar from "../components/Navbar";

function App() {
  return (
    <BrowserRouter className="App">
      <Navbar />
      <Main />
    </BrowserRouter>
  );
}

export default App;
