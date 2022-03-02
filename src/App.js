import { Routes, Route } from 'react-router-dom';
import './App.css';
import Header from './containers/Header';
import ProductDetail from './containers/ProductDetail';
import ProductListing from './containers/ProductListing';

function App() {
  return (
    <div>
      <Header />
      <Routes>
        <Route path="/" exact element={<ProductListing />} />
        <Route Path="/product/:id" exact element={<ProductDetail />} />
        <Route>404 Not Found!</Route>
      </Routes>
    </div>
  );
}

export default App;