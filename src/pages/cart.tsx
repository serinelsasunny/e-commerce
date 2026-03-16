import React, { useState } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { addItem, deleteItem } from '@/Redux/slices/cartSlice';
import { RootState, AppDispatch } from '@/Redux/store';
import { useRouter } from 'next/router';

export default function Cart() {
  const dispatch = useDispatch<AppDispatch>();
  const router = useRouter();
  const { cartItems, totalPrice } = useSelector((state: RootState) => state.cart);
  const [showCheckoutSuccess, setShowCheckoutSuccess] = useState(false);

  const handleAddItem = (item: any) => {
    dispatch(addItem(item));
  };

  const handleDeleteItem = (itemId: number) => {
    dispatch(deleteItem(itemId));
  };

  const handleContinueShopping = () => {
    router.push('/products');
  };

  const handleCheckout = () => {
    // Clear the cart
    cartItems.forEach(item => {
      dispatch(deleteItem(item.id));
    });
    
    // Show success message
    setShowCheckoutSuccess(true);
    
    // Hide message after 3 seconds and redirect to products
    setTimeout(() => {
      setShowCheckoutSuccess(false);
      router.push('/products');
    }, 3000);
  };

  return (
    <div style={{ 
      minHeight: 'calc(100vh - 80px)',
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'center',
      background: 'linear-gradient(135deg, #667eea 0%, #764ba2 100%)',
      padding: '2rem'
    }}>
      <div style={{ 
        maxWidth: '1000px',
        width: '100%',
        color: 'white'
      }}>
        <div className="bg-white rounded shadow mx-auto" style={{ padding: '3rem', borderRadius: '15px' }}>
          <h1 style={{ 
            fontSize: '3rem', 
            marginBottom: '2rem', 
            fontWeight: 'bold', 
            color: '#333', 
            letterSpacing: '2px',
            textAlign: 'center'
          }}>
            Shopping Cart
          </h1>

          {cartItems.length === 0 ? (
            <div style={{ textAlign: 'center', padding: '3rem' }}>
              <h3 style={{ color: '#666', marginBottom: '2rem' }}>Your cart is empty</h3>
              <button
                onClick={handleContinueShopping}
                style={{
                  backgroundColor: '#007bff',
                  color: 'white',
                  padding: '1rem 2rem',
                  border: 'none',
                  borderRadius: '25px',
                  fontSize: '1rem',
                  fontWeight: 'bold',
                  cursor: 'pointer',
                  transition: 'background-color 0.3s'
                }}
                onMouseEnter={(e) => {
                  e.currentTarget.style.backgroundColor = '#0056b3';
                }}
                onMouseLeave={(e) => {
                  e.currentTarget.style.backgroundColor = '#007bff';
                }}
              >
                Back to Products
              </button>
            </div>
          ) : (
            <>
              <div style={{ marginBottom: '2rem' }}>
                {cartItems.map((item: any) => (
                  <div key={item.id} style={{
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'space-between',
                    padding: '1.5rem',
                    borderBottom: '1px solid #eee',
                    backgroundColor: '#f8f9fa',
                    borderRadius: '10px',
                    marginBottom: '1rem'
                  }}>
                    <div style={{ display: 'flex', alignItems: 'center', gap: '1rem' }}>
                      <div style={{
                        width: '80px',
                        height: '80px',
                        backgroundColor: '#ddd',
                        borderRadius: '8px',
                        display: 'flex',
                        alignItems: 'center',
                        justifyContent: 'center',
                        color: '#666'
                      }}>
                        {item.name?.charAt(0) || 'P'}
                      </div>
                      <div>
                        <h4 style={{ margin: 0, color: '#333', fontSize: '1.1rem' }}>{item.name}</h4>
                        <p style={{ margin: '0.5rem 0 0 0', color: '#666' }}>Price: ${item.price}</p>
                      </div>
                    </div>
                    
                    <div style={{ display: 'flex', alignItems: 'center', gap: '1rem' }}>
                      <div style={{ display: 'flex', alignItems: 'center', gap: '0.5rem' }}>
                        <button
                          onClick={() => handleAddItem(item)}
                          style={{
                            width: '30px',
                            height: '30px',
                            borderRadius: '50%',
                            border: '1px solid #007bff',
                            backgroundColor: 'white',
                            color: '#007bff',
                            cursor: 'pointer',
                            fontSize: '1.2rem',
                            display: 'flex',
                            alignItems: 'center',
                            justifyContent: 'center'
                          }}
                        >
                          +
                        </button>
                        <span style={{ 
                          minWidth: '40px', 
                          textAlign: 'center',
                          color: '#333',
                          fontWeight: 'bold'
                        }}>
                          {item.quantity}
                        </span>
                        <button
                          onClick={() => handleDeleteItem(item.id)}
                          style={{
                            width: '30px',
                            height: '30px',
                            borderRadius: '50%',
                            border: '1px solid #dc3545',
                            backgroundColor: 'white',
                            color: '#dc3545',
                            cursor: 'pointer',
                            fontSize: '1.2rem',
                            display: 'flex',
                            alignItems: 'center',
                            justifyContent: 'center'
                          }}
                        >
                          -
                        </button>
                      </div>
                      
                      <div style={{ textAlign: 'right' }}>
                        <p style={{ 
                          margin: 0, 
                          color: '#333', 
                          fontWeight: 'bold',
                          fontSize: '1.1rem'
                        }}>
                          ${(item.price * item.quantity).toFixed(2)}
                        </p>
                      </div>
                    </div>
                  </div>
                ))}
              </div>

              <div style={{
                display: 'flex',
                justifyContent: 'space-between',
                alignItems: 'center',
                padding: '2rem',
                backgroundColor: '#f8f9fa',
                borderRadius: '10px',
                marginTop: '2rem'
              }}>
                <h3 style={{ margin: 0, color: '#333' }}>
                  Total: <span style={{ color: '#007bff', fontSize: '1.5rem' }}>${totalPrice.toFixed(2)}</span>
                </h3>
                <div style={{ display: 'flex', gap: '1rem' }}>
                  <button
                    onClick={handleContinueShopping}
                    style={{
                      backgroundColor: 'transparent',
                      color: '#007bff',
                      padding: '1rem 2rem',
                      border: '2px solid #007bff',
                      borderRadius: '25px',
                      fontSize: '1rem',
                      fontWeight: 'bold',
                      cursor: 'pointer',
                      transition: 'all 0.3s'
                    }}
                    onMouseEnter={(e) => {
                      e.currentTarget.style.backgroundColor = '#007bff';
                      e.currentTarget.style.color = 'white';
                    }}
                    onMouseLeave={(e) => {
                      e.currentTarget.style.backgroundColor = 'transparent';
                      e.currentTarget.style.color = '#007bff';
                    }}
                  >
                    Back to Products
                  </button>
                  <button
                    onClick={handleCheckout}
                    style={{
                      backgroundColor: '#28a745',
                      color: 'white',
                      padding: '1rem 2rem',
                      border: 'none',
                      borderRadius: '25px',
                      fontSize: '1rem',
                      fontWeight: 'bold',
                      cursor: 'pointer',
                      transition: 'background-color 0.3s'
                    }}
                    onMouseEnter={(e) => {
                      e.currentTarget.style.backgroundColor = '#218838';
                    }}
                    onMouseLeave={(e) => {
                      e.currentTarget.style.backgroundColor = '#28a745';
                    }}
                  >
                    Checkout
                  </button>
                </div>
              </div>
            </>
          )}
        </div>
        
        {/* Checkout Success Message Overlay */}
        {showCheckoutSuccess && (
          <div style={{
            position: 'fixed',
            top: 0,
            left: 0,
            right: 0,
            bottom: 0,
            backgroundColor: 'rgba(0, 0, 0, 0.8)',
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
            zIndex: 9999
          }}>
            <div style={{
              backgroundColor: 'white',
              padding: '3rem',
              borderRadius: '15px',
              textAlign: 'center',
              maxWidth: '400px',
              animation: 'fadeInScale 0.3s ease-out'
            }}>
              <div style={{
                width: '80px',
                height: '80px',
                backgroundColor: '#28a745',
                borderRadius: '50%',
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
                margin: '0 auto 1.5rem auto'
              }}>
                <svg width="40" height="40" viewBox="0 0 24 24" fill="none" stroke="white" strokeWidth="3">
                  <path d="M20 6L9 17l-5-5"/>
                </svg>
              </div>
              <h2 style={{ 
                color: '#333', 
                margin: '0 0 1rem 0',
                fontSize: '1.8rem',
                fontWeight: 'bold'
              }}>
                Transaction Successful!
              </h2>
              <p style={{ 
                color: '#666', 
                margin: '0 0 2rem 0',
                fontSize: '1.1rem',
                lineHeight: '1.5'
              }}>
                Thank you for your purchase! Your order has been successfully processed.
              </p>
             
              <p style={{ 
                margin: 0, 
                color: '#999', 
                fontSize: '0.9rem',
                fontStyle: 'italic'
              }}>
                Redirecting to products page...
              </p>
            </div>
          </div>
        )}
      </div>
    </div>
  );
}
