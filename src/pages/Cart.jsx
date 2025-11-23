import { useDispatch, useSelector } from 'react-redux';
import { removeFromCart, updateQuantity } from '../store/cartSlice';

function Cart() {
  const cartItems = useSelector((state) => state.cart.cartItems);

  const dispatch = useDispatch();

  const totalPrice = cartItems.reduce((total, item) => total + item.price * item.quantity, 0);

  if (cartItems.length === 0) {
    return (
      <div className='text-center py-5'>
        <h3>Your Cart is Empty </h3>
        <p className='text-muted'>Go add some products!</p>
      </div>
    );
  }

  return (
    <div className='container py-5'>
      <h2 className='mb-4'>Shopping Cart ({cartItems.length} items)</h2>

      <div className='row'>
        <div className='col-md-8'>
          {cartItems.map((item) => (
            <div key={item.id} className='card mb-3 shadow-sm border-0'>
              <div className='row g-0 align-items-center'>
                <div className='col-md-3 text-center'>
                  <img
                    src={item.thumbnail}
                    className='img-fluid rounded-start'
                    alt={item.title}
                    style={{ maxHeight: '150px', objectFit: 'contain', padding: '10px' }}
                  />
                </div>
                <div className='col-md-9'>
                  <div className='card-body'>
                    <div className='d-flex justify-content-between align-items-center mb-2'>
                      <h5 className='card-title mb-0'>{item.title}</h5>

                      <button
                        className='btn btn-outline-danger btn-sm'
                        onClick={() => dispatch(removeFromCart(item.id))}
                      >
                        <i className='fa-solid fa-trash'></i> Remove
                      </button>
                    </div>
                    <p className='card-text text-primary fw-bold'>${item.price}</p>

                    <div className='d-flex align-items-center gap-2'>
                      <button
                        className='btn btn-light btn-sm border'
                        onClick={() => dispatch(updateQuantity({ id: item.id, amount: -1 }))}
                      >
                        -
                      </button>

                      <span className='fw-bold'>{item.quantity}</span>

                      <button
                        className='btn btn-light btn-sm border'
                        onClick={() => dispatch(updateQuantity({ id: item.id, amount: 1 }))}
                      >
                        +
                      </button>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>

        <div className='col-md-4'>
          <div className='card shadow-sm border-0 p-3'>
            <h4 className='card-title mb-4'>Order Summary</h4>
            <div className='d-flex justify-content-between mb-2'>
              <span>Subtotal</span>
              <span>${totalPrice.toFixed(2)}</span>
            </div>
            <div className='d-flex justify-content-between mb-2 text-muted'>
              <span>Shipping</span>
              <span>Free</span>
            </div>
            <hr />
            <div className='d-flex justify-content-between mb-4 fw-bold fs-5'>
              <span>Total</span>
              <span>${totalPrice.toFixed(2)}</span>
            </div>
            <button className='btn btn-dark w-100 btn-lg'>Checkout</button>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Cart;
