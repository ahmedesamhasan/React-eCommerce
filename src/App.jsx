import { BrowserRouter, Routes, Route } from 'react-router-dom';
import 'bootstrap/dist/css/bootstrap.min.css';

// الصفحات
import Products from './pages/Products';
import ProductDetails from './pages/ProductDetails';
import Login from './pages/Login';
import Register from './pages/Register';
import NotFound from './pages/NotFound';
import Cart from './pages/Cart'; // 1. استيراد الصفحة (مهم)

// المكونات
import MyNavbar from './pages/MyNavbar';

function App() {
  return (
    <BrowserRouter>
      <MyNavbar />

      <div className='container mt-5'>
        <Routes>
          <Route path='/' element={<Products />} />
          <Route path='/details/:id' element={<ProductDetails />} />
          <Route path='/login' element={<Login />} />
          <Route path='/register' element={<Register />} />

          {/* 2. تسجيل مسار السلة هنا 👇 */}
          <Route path='/cart' element={<Cart />} />

          {/* صفحة الخطأ (لازم تكون آخر واحدة) */}
          <Route path='*' element={<NotFound />} />
        </Routes>
      </div>
    </BrowserRouter>
  );
}

export default App;
