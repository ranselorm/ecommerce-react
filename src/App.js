import { BrowserRouter, Route, Routes } from "react-router-dom";

// import pages
import Home from "./pages/Home";
import ProductDetails from "./pages/ProductDetails";

// import components
import SideBar from "./components/Sidebar";
import Header from "./components/Header";
import Footer from "./components/Footer";

const App = () => {
  return (
    <div className="overflow-hidden">
      <Header />
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/product/:id" element={<ProductDetails />} />
        </Routes>
        <SideBar />
        <Footer />
      </BrowserRouter>
    </div>
  );
};

export default App;
