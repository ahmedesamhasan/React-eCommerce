import React, { useEffect, useState } from 'react';
import axios from 'axios';
import { Link } from 'react-router-dom';

function Products() {
  const [products, setProducts] = useState([]);

  const [currentPage, setCurrentPage] = useState(1);

  const [totalPages, setTotalPages] = useState(0);

  const itemsPerPage = 10;

  useEffect(() => {
    const skip = (currentPage - 1) * itemsPerPage;

    axios
      .get(`https://dummyjson.com/products?limit=${itemsPerPage}&skip=${skip}`)
      .then((response) => {
        setProducts(response.data.products);

        setTotalPages(Math.ceil(response.data.total / itemsPerPage));
      })
      .catch((error) => {
        console.log('Error fetching data: ', error);
      });
  }, [currentPage]);

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
      <div className='d-flex justify-content-between align-items-center mb-4'>
        <h2>Our Products </h2>
        <span className='text-muted'>
          Page {currentPage} of {totalPages}
        </span>
      </div>

      <div className='row'>
        {products.map((product) => (
          <div className='col-md-6 col-lg-4 col-xl-3 mb-4' key={product.id}>
            <div className='card h-100 shadow-sm border-0'>
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
              </div>
            </div>
          </div>
        ))}
      </div>

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
