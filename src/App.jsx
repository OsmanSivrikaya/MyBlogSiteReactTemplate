import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Product from "./pages/Product";
import Header from "./components/Header";
import Employe from "./pages/Employe";

function App() {
  return (
    <div className="">
      <Router>
        <Header />
        <Routes>
          <Route index path="/" element={<Product />} />
          <Route index path="/employe" element={<Employe />} />
        </Routes>
      </Router>
    </div>
  );
}

export default App;
