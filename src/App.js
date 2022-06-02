import "./App.css";
import MainRoutes from "./MainRoutes";
import Navbar from "./Components/Navbar/Navbar"
import { BrowserRouter } from "react-router-dom";

function App() {
  return <div>
    <BrowserRouter>
      <Navbar />
      <MainRoutes/>
    </BrowserRouter>
  </div>;
}

export default App;
