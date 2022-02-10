
import './App.css';
import Products from './products';
import Checkout from './Components/Checkout';
import { BrowserRouter as Router, Routes, Route } from "react-router-dom"


function App() {
  return (
    <Router>
      <div className="App">
        <Routes>
          <Route path="/" element={<Products />} />
          <Route path="/buy" element={<Checkout />}/>
        </Routes>
      </div>
    </Router>
  );
}

export default App;
