import { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { fetchProducts } from '@/Redux/slices/productSlice';
import { RootState, AppDispatch } from '@/Redux/store';
import ProductCard from '@/components/ProductCard';
import Link from 'next/link';

export default function Products() {
  const dispatch = useDispatch<AppDispatch>();
  const { items, status } = useSelector((state: RootState) => state.products);

  useEffect(() => {
    dispatch(fetchProducts());
  }, [dispatch]);

  return (
    <div style={{ padding: '2rem', maxWidth: '1200px', margin: '0 auto' }}>
      <h1 style={{ fontSize: '2rem', marginBottom: '2rem', textAlign: 'center' }}>Our Products</h1>
      {status === 'loading' && <p>Loading products...</p>}
      {status === 'failed' && <p>Failed to load products.</p>}
      <div style={{ 
        display: 'flex', 
        flexWrap: 'wrap', 
        gap: '1.5rem',
        justifyContent: 'center'
      }}>
        {items.map((product: any) => (
          <Link href={`/product/${product.id}`} key={product.id} style={{ textDecoration: 'none' }}>
            <ProductCard product={product} />
          </Link>
        ))}
      </div>
    </div>
  );
}
