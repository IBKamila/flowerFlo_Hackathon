import "./App.css";
import MainRoutes from "./MainRoutes";
import Navbar from "./Components/Navbar/Navbar";
import { BrowserRouter } from "react-router-dom";
import ProductContextProvider from "./Context/ProductContext";
import AuthContextProvider from "./Context/AuthContext";


function App() {
  return (
    <div>
      <BrowserRouter>
      <ProductContextProvider>
        <AuthContextProvider>
          <Navbar />
          <MainRoutes />
        </AuthContextProvider>
        </ProductContextProvider>
      </BrowserRouter>
    </div>
  );
}

export default App;
