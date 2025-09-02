import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Home from "./pages/Home";
import Product from "./pages/Product";
import Cart from "./pages/Cart";
import ProductDetail from "./pages/ProductDetail";
import Navbar from "./components/Navbar";

const App = () => {
  return (
    // <div>
    //   <Navbar />
    // </div>
    <Router>
      <Routes>
        <Route path="/" element={<Home />} />
                <Route path="/product" element={<Product />} />
                <Route path="/cart" element={<Cart />} />
                <Route path="/Product/:id" element={<ProductDetail/>}/>


  
      </Routes>
    </Router>
  );
};

export default App;
