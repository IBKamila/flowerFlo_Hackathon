import "./App.css";
import MainRoutes from "./MainRoutes";
import Navbar from "./Components/Navbar/Navbar";
import { BrowserRouter } from "react-router-dom";
import AuthContextProvider from "./Context/AuthContext";

function App() {
  return (
    <div>
      <BrowserRouter>
        <AuthContextProvider>
          <Navbar />
          <MainRoutes />
        </AuthContextProvider>
      </BrowserRouter>
    </div>
  );
}

export default App;
