import { BrowserRouter, Routes, Route } from 'react-router-dom';
import 'bootstrap/dist/css/bootstrap.min.css';

// 1. استيراد الصفحات
import Products from './pages/Products';
import ProductDetails from './pages/ProductDetails';
import Login from './pages/Login';
import Register from './pages/Register';
import NotFound from './pages/NotFound';
import Cart from './pages/Cart';
import ContactUs from './pages/ContactUs';

// 2. استيراد النافبار
import MyNavbar from './pages/MyNavbar'; // لاحظ: فولدر components مش pages

function App() {
  return (
    <BrowserRouter>
      {/* النافبار بره الـ Routes عشان تظهر في كل حتة */}
      <MyNavbar />

      <div className='container mt-5'>
        <Routes>
          {/* الصفحة الرئيسية */}
          <Route path='/' element={<Products />} />

          {/* صفحة التفاصيل (Dynamic Route) */}
          <Route path='/details/:id' element={<ProductDetails />} />

          {/* صفحات المستخدم */}
          <Route path='/login' element={<Login />} />
          <Route path='/register' element={<Register />} />

          {/* صفحة التواصل */}
          <Route path='/contact' element={<ContactUs />} />

          {/* صفحة السلة */}
          <Route path='/cart' element={<Cart />} />

          {/* صفحة الخطأ (404) */}
          <Route path='*' element={<NotFound />} />
        </Routes>
      </div>
    </BrowserRouter>
  );
}

export default App;
