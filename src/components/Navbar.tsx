import React from 'react';
import Link from 'next/link';
import { useSelector } from 'react-redux';
import { RootState } from '@/Redux/store';

const Navbar = () => {
  const { cartItems } = useSelector((state: RootState) => state.cart);

  // Calculate total items in cart
  const totalItems = cartItems.reduce((total, item) => total + item.quantity, 0);

  return (
    <nav style={{
      backgroundColor: '#fff',
      boxShadow: '0 2px 4px rgba(0,0,0,0.1)',
      padding: '0 2rem',
      position: 'sticky',
      top: 0,
      zIndex: 1000
    }}>
      <div style={{
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'space-between',
        height: '80px',
        maxWidth: '1200px',
        margin: '0 auto'
      }}>
        {/* Logo */}
        <Link href="/" style={{
          fontSize: '1.8rem',
          fontWeight: 'bold',
          color: '#333',
          textDecoration: 'none',
          letterSpacing: '2px'
        }}>
          E-MART
        </Link>

        {/* Navigation Links */}
        <div style={{
          display: 'flex',
          gap: '2rem',
          alignItems: 'center'
        }}>
          <Link href="/" style={{
            color: '#333',
            textDecoration: 'none',
            fontSize: '0.9rem',
            fontWeight: '500',
            transition: 'color 0.3s',
            position: 'relative'
          }}
          onMouseEnter={(e) => {
            e.currentTarget.style.color = '#007bff';
            e.currentTarget.style.textDecoration = 'underline';
          }}
          onMouseLeave={(e) => {
            e.currentTarget.style.color = '#333';
            e.currentTarget.style.textDecoration = 'none';
          }}>
            HOME
          </Link>
          <Link href="/about" style={{
            color: '#333',
            textDecoration: 'none',
            fontSize: '0.9rem',
            fontWeight: '500',
            transition: 'color 0.3s',
            position: 'relative'
          }}
          onMouseEnter={(e) => {
            e.currentTarget.style.color = '#007bff';
            e.currentTarget.style.textDecoration = 'underline';
          }}
          onMouseLeave={(e) => {
            e.currentTarget.style.color = '#333';
            e.currentTarget.style.textDecoration = 'none';
          }}>
            ABOUT US
          </Link>
          <Link href="/contact" style={{
            color: '#333',
            textDecoration: 'none',
            fontSize: '0.9rem',
            fontWeight: '500',
            transition: 'color 0.3s',
            position: 'relative'
          }}
          onMouseEnter={(e) => {
            e.currentTarget.style.color = '#007bff';
            e.currentTarget.style.textDecoration = 'underline';
          }}
          onMouseLeave={(e) => {
            e.currentTarget.style.color = '#333';
            e.currentTarget.style.textDecoration = 'none';
          }}>
            CONTACT US
          </Link>
          <Link href="/products" style={{
            color: '#333',
            textDecoration: 'none',
            fontSize: '0.9rem',
            fontWeight: '500',
            transition: 'color 0.3s',
            position: 'relative'
          }}
          onMouseEnter={(e) => {
            e.currentTarget.style.color = '#007bff';
            e.currentTarget.style.textDecoration = 'underline';
          }}
          onMouseLeave={(e) => {
            e.currentTarget.style.color = '#333';
            e.currentTarget.style.textDecoration = 'none';
          }}>
            PRODUCTS
          </Link>
        </div>

        {/* Shopping Cart Icon */}
        <Link href="/cart" style={{
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'center',
          width: '40px',
          height: '40px',
          borderRadius: '50%',
          backgroundColor: '#f5f5f5',
          textDecoration: 'none',
          transition: 'background-color 0.3s',
          position: 'relative'
        }}
        onMouseEnter={(e) => {
          e.currentTarget.style.backgroundColor = '#007bff';
          e.currentTarget.querySelector('svg')!.style.color = 'white';
        }}
        onMouseLeave={(e) => {
          e.currentTarget.style.backgroundColor = '#f5f5f5';
          e.currentTarget.querySelector('svg')!.style.color = '#333';
        }}>
          <svg
            width="20"
            height="20"
            viewBox="0 0 24 24"
            fill="none"
            stroke="currentColor"
            strokeWidth="2"
            strokeLinecap="round"
            strokeLinejoin="round"
            style={{ color: '#333', transition: 'color 0.3s' }}
          >
            <circle cx="9" cy="21" r="1"></circle>
            <circle cx="20" cy="21" r="1"></circle>
            <path d="M1 1h4l2.68 13.39a2 2 0 0 0 2 1.61h9.72a2 2 0 0 0 2-1.61L23 6H6"></path>
          </svg>
          
          {/* Cart Item Count Badge */}
          {totalItems > 0 && (
            <span style={{
              position: 'absolute',
              top: '-5px',
              right: '-5px',
              backgroundColor: '#dc3545',
              color: 'white',
              borderRadius: '50%',
              width: '20px',
              height: '20px',
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'center',
              fontSize: '0.75rem',
              fontWeight: 'bold',
              border: '2px solid white'
            }}>
              {totalItems > 99 ? '99+' : totalItems}
            </span>
          )}
        </Link>
      </div>
    </nav>
  );
};

export default Navbar;
