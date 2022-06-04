import "./App.css";
import MainRoutes from "./MainRoutes";
import Navbar from "./Components/Navbar/Navbar";
import { BrowserRouter } from "react-router-dom";
import Footer from "./Components/Navbar/Footer/Footer";
import AboutUs from "./Components/AboutUs/AboutUs";

function App() {
  return (
    <div>
      <BrowserRouter>
        <Navbar />
        <MainRoutes />
        <AboutUs />
        <Footer />
      </BrowserRouter>
    </div>
  );
}

export default App;
