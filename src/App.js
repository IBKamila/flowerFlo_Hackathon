import "./App.css";
import MainRoutes from "./MainRoutes";
import Navbar from "./Components/Navbar/Navbar"
import { BrowserRouter } from "react-router-dom";
import ProductContextProvider from "./Context/ProductContext";

function App() {
  return <div>
    <BrowserRouter>
      <ProductContextProvider>
        <Navbar />
        <MainRoutes/>
      </ProductContextProvider>
    </BrowserRouter>
  </div>;
}

export default App;
