import "./App.css";
import MainRoutes from "./MainRoutes";
import Navbar from "./Components/Navbar/Navbar";
import { BrowserRouter } from "react-router-dom";
import Footer from "./Components/Footer/Footer";
import ProductContextProvider from "./Context/ProductContext";
import AuthContextProvider from "./Context/AuthContext";
import CartContextProvider from "./Context/CartContext";
import FavContextProvider from "./Context/FavContext";

function App() {
  return (
    <div>
      <BrowserRouter>
        <FavContextProvider>
          <CartContextProvider>
            <ProductContextProvider>
              <AuthContextProvider>
                <Navbar />
                <MainRoutes />
                <Footer />
              </AuthContextProvider>
            </ProductContextProvider>
          </CartContextProvider>
        </FavContextProvider>
      </BrowserRouter>
    </div>
  );
}

export default App;
