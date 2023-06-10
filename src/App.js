import { BrowserRouter as Router} from "react-router-dom";
import { FavoritesProvider } from '../src/Context/FavoritesContex.jsx';
import "./App.css";
import Navbar from "./components/Navbar/Navbar";
import AppRoutes from "./Router/AppRoutes";
import Footer from "./components/Footer/Footer";



const App = () => {
  return (
    <FavoritesProvider>
      <Router>
        <Navbar />
        <AppRoutes />
        <Footer />
      </Router>
    </FavoritesProvider>
  );
}

export default App;