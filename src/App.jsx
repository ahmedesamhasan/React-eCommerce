import { BrowserRouter, Routes, Route } from 'react-router-dom';
import 'bootstrap/dist/css/bootstrap.min.css';

import Cart from './pages/Cart';
import Products from './pages/Products';
import ProductDetails from './pages/ProductDetails';

import NotFound from './pages/NotFound';
import MyNavbar from './pages/MyNavbar';

function App() {
  return (
    <BrowserRouter>
      <MyNavbar />

      <div className='container mt-5'>
        <Routes>
          <Route path='/' element={<Products />} />

          <Route path='/details/:id' element={<ProductDetails />} />

          <Route path='*' element={<NotFound />} />
        </Routes>
      </div>
    </BrowserRouter>
  );
}

export default App;
