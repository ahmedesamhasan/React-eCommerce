import React, { useEffect, useState } from 'react';
import axios from 'axios';
import { Link, useNavigate } from 'react-router-dom';

// 1. استيراد أدوات Redux
import { useDispatch } from 'react-redux';
import { addToCart } from '../store/cartSlice';

function Products() {
  const [products, setProducts] = useState([]);

  // State للباجينيشن
  const [currentPage, setCurrentPage] = useState(1);
  const [totalPages, setTotalPages] = useState(0);
  const itemsPerPage = 10;

  const navigate = useNavigate();

  // 2. تفعيل الدليفري (Dispatch)
  const dispatch = useDispatch();

  useEffect(() => {
    // حساب الـ Skip
    const skip = (currentPage - 1) * itemsPerPage;

    axios
      .get(`https://dummyjson.com/products?limit=${itemsPerPage}&skip=${skip}`)
      .then((res) => {
        setProducts(res.data.products);
        setTotalPages(Math.ceil(res.data.total / itemsPerPage));
      })
      .catch((err) => console.log(err));
  }, [currentPage]);

  // دالة التعامل مع الإضافة للسلة
  const handleAddToCart = (product) => {
    // 3. بنبعت المنتج للمخزن
    dispatch(addToCart(product));
    // تأكيد للمستخدم (اختياري)
    // alert("Added to cart! ✅");
  };

  // دوال التنقل بين الصفحات
  const handleNext = () => {
    if (currentPage < totalPages) {
      setCurrentPage(currentPage + 1);
    }
  };

  const handlePrev = () => {
    if (currentPage > 1) {
      setCurrentPage(currentPage - 1);
    }
  };

  return (
    <div className='py-5 container'>
      {/* عنوان الصفحة ورقم الصفحة الحالية */}
      <div className='d-flex justify-content-between align-items-center mb-4'>
        <h2>Our Products 📦</h2>
        <span className='text-muted'>
          Page {currentPage} of {totalPages}
        </span>
      </div>

      <div className='row'>
        {products.map((product) => (
          <div className='col-md-6 col-lg-4 col-xl-3 mb-4' key={product.id}>
            <div className='card h-100 shadow-sm border-0'>
              {/* شارة حالة المخزون */}
              <div className='position-absolute top-0 end-0 p-2'>
                {product.stock > 0 ? (
                  <span className='badge bg-success'>In Stock</span>
                ) : (
                  <span className='badge bg-danger'>Out of Stock</span>
                )}
              </div>

              <img
                src={product.thumbnail}
                className='card-img-top'
                alt={product.title}
                style={{ height: '200px', objectFit: 'contain', padding: '10px' }}
              />

              <div className='card-body d-flex flex-column'>
                <h5 className='card-title text-truncate'>{product.title}</h5>
                <p className='card-text text-muted small text-truncate'>{product.description}</p>

                <div className='mt-auto d-flex justify-content-between align-items-center'>
                  <span className='fw-bold fs-5'>${product.price}</span>
                  <Link to={`/details/${product.id}`} className='btn btn-primary btn-sm'>
                    View Details
                  </Link>
                </div>

                {/* زرار الإضافة للسلة (Redux) */}
                <button
                  className='btn btn-outline-dark btn-sm mt-2 w-100'
                  onClick={() => handleAddToCart(product)}
                >
                  Add to Cart 🛒
                </button>
              </div>
            </div>
          </div>
        ))}
      </div>

      {/* زراير التحكم في الصفحات (Pagination Controls) */}
      <div className='d-flex justify-content-center gap-3 mt-4'>
        <button
          className='btn btn-outline-primary'
          onClick={handlePrev}
          disabled={currentPage === 1}
        >
          Previous
        </button>

        <span className='align-self-center fw-bold'>Page {currentPage}</span>

        <button
          className='btn btn-outline-primary'
          onClick={handleNext}
          disabled={currentPage === totalPages}
        >
          Next
        </button>
      </div>
    </div>
  );
}

export default Products;
