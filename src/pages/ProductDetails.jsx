import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import axios from 'axios';

function ProductDetails() {
  const { id } = useParams();
  const [product, setProduct] = useState(null);

  useEffect(() => {
    axios
      .get(`https://dummyjson.com/products/${id}`)
      .then((res) => {
        setProduct(res.data);
      })
      .catch((err) => console.log(err));
  }, [id]);

  if (!product) {
    return (
      <div className='text-center mt-5'>
        <h2>Loading... </h2>
      </div>
    );
  }

  return (
    <div className='container py-5'>
      <div className='row'>
        <div className='col-md-6 mb-4'>
          <img
            src={product.thumbnail}
            alt={product.title}
            className='img-fluid rounded shadow-lg w-100'
            style={{ objectFit: 'cover', maxHeight: '400px' }}
          />

          <div className='d-flex mt-2 gap-2 overflow-auto'>
            {product.images?.map((img, index) => (
              <img key={index} src={img} width='80' height='80' className='rounded border' />
            ))}
          </div>
        </div>

        <div className='col-md-6'>
          <h1 className='fw-bold'>{product.title}</h1>
          <p className='text-muted fs-5'>
            {product.brand} - {product.category}
          </p>

          <div className='mb-3'>
            <span className='badge bg-warning text-dark me-2'>{product.rating}</span>
            <span className={product.stock > 0 ? 'text-success fw-bold' : 'text-danger fw-bold'}>
              {product.stock > 0 ? 'In Stock' : 'Out of Stock'}
            </span>
          </div>

          <h2 className='text-primary mb-4'>${product.price}</h2>

          <p className='lead'>{product.description}</p>

          <div className='d-flex gap-3 mt-5'>
            <button className='btn btn-dark btn-lg px-5'>Buy Now</button>
            <button className='btn btn-outline-primary btn-lg'>Add to Cart </button>
          </div>
        </div>
      </div>
    </div>
  );
}

export default ProductDetails;
