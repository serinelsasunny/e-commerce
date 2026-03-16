// /components/ProductCard.tsx
import { useDispatch } from 'react-redux';
import { addItem } from '@/Redux/slices/cartSlice';

export default function ProductCard({ product }: { product: any }) {
  const dispatch = useDispatch();

  const handleAddToCart = () => {
    dispatch(addItem({
      id: product.id,
      name: product.title,
      price: product.price,
      image: product.image
    }));
  };

  return (
    <div className="card-3d" style={{
      border: '1px solid #ccc',
      borderRadius: '8px',
      padding: '1rem',
      width: '200px',
      backgroundColor: 'white',
      display: 'flex',
      flexDirection: 'column',
      justifyContent: 'space-between'
    }}>
      <div>
        <img src={product.image} alt={product.title} width="100%" height="200px" style={{ objectFit: 'contain' }} />
        <h3 style={{ margin: '1rem 0 0.5rem 0', fontSize: '1rem', color: '#333' }}>{product.title.slice(0, 30)}...</h3>
        <p style={{ margin: '0.5rem 0', color: '#007bff', fontWeight: 'bold', fontSize: '1.1rem' }}>${product.price}</p>
      </div>
      
      <button
        onClick={handleAddToCart}
        style={{
          backgroundColor: '#007bff',
          color: 'white',
          border: 'none',
          borderRadius: '5px',
          padding: '0.75rem',
          cursor: 'pointer',
          fontSize: '0.9rem',
          fontWeight: 'bold',
          transition: 'background-color 0.3s',
          marginTop: '1rem'
        }}
        onMouseEnter={(e) => {
          e.currentTarget.style.backgroundColor = '#0056b3';
        }}
        onMouseLeave={(e) => {
          e.currentTarget.style.backgroundColor = '#007bff';
        }}
      >
        Add to Cart
      </button>
    </div>
  );
}
