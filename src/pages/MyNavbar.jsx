import { Link, NavLink } from 'react-router-dom';
// 1. استيراد الحاجات بتاعة Redux (للسلة)
import { useSelector } from 'react-redux';
// 2. استيراد الحاجات بتاعة Context (للغة)
import { useContext } from 'react';
import { LangContext } from '../pages/LangContext';

function MyNavbar() {
  // مخزن السلة
  const cartItems = useSelector((state) => state.cart.cartItems);

  // مخزن اللغة
  const { language, toggleLanguage } = useContext(LangContext);

  return (
    <nav className='navbar navbar-expand-lg navbar-dark bg-dark fixed-top'>
      <div className='container'>
        <Link className='navbar-brand' to='/'>
          My Shop
        </Link>

        <button
          className='navbar-toggler'
          type='button'
          data-bs-toggle='collapse'
          data-bs-target='#navbarNav'
        >
          <span className='navbar-toggler-icon'></span>
        </button>

        <div className='collapse navbar-collapse' id='navbarNav'>
          <ul className='navbar-nav ms-auto align-items-center'>
            <li className='nav-item'>
              <NavLink className='nav-link' to='/'>
                Products
              </NavLink>
            </li>
            <li className='nav-item'>
              <NavLink className='nav-link' to='/login'>
                Login
              </NavLink>
            </li>
            <li className='nav-item'>
              <NavLink className='nav-link' to='/register'>
                Register
              </NavLink>
            </li>
            <li className='nav-item'>
              <NavLink className='nav-link' to='/contact'>
                Contact Us
              </NavLink>
            </li>
            {/* زرار السلة (Redux) */}
            <li className='nav-item'>
              <NavLink className='nav-link position-relative' to='/cart'>
                Cart 🛒
                {cartItems.length > 0 && (
                  <span className='position-absolute top-0 start-100 translate-middle badge rounded-pill bg-danger'>
                    {cartItems.length}
                  </span>
                )}
              </NavLink>
            </li>

            {/* زرار اللغة (Context) - ده الجديد 👇 */}
            <li className='nav-item ms-2'>
              <button className='btn btn-outline-light btn-sm fw-bold' onClick={toggleLanguage}>
                {language === 'en' ? '🇺🇸 EN' : '🇪🇬 AR'}
              </button>
            </li>
          </ul>
        </div>
      </div>
    </nav>
  );
}

export default MyNavbar;
