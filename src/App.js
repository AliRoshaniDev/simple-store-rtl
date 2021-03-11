import "./App.css";
import { BrowserRouter as Router, Route } from "react-router-dom";

import NavBar from "./components/NavBar";
import SlideShow from "./components/SlideShow";
import ProductContainer from "./components/ProductContainer";
import CartProvider from "./providers/CartProvider";

function App() {
  return (
    <CartProvider>
      <Router>
        <NavBar />
        <SlideShow />
        <Route path={["/page/:pageNumber?", "/"]} exact component={ProductContainer} />
      </Router>
    </CartProvider>
  );
}

export default App;
