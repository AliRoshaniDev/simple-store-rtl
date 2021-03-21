import "./App.css";
import { BrowserRouter as Router, Route } from "react-router-dom";

import NavBar from "./components/NavBar";
import SlideShow from "./components/SlideShow";
import Products from "./components/Products";
import CartProvider from "./providers/CartProvider";
import ProductProvider from "./providers/ProductProvider";
import Footer from "./components/Footer";

function App() {
  return (
    <CartProvider>
      <ProductProvider>
        <Router>
          <NavBar />
          <SlideShow />
          <Route path={["/page/:pageNumber?", "/"]} exact component={Products} />
          <Footer />
        </Router>
      </ProductProvider>
    </CartProvider>
  );
}

export default App;
