import { GetServerSideProps } from 'next';
import { useRouter } from 'next/router';

export default function ProductDetailsPage({ product }: { product: any }) {
  const router = useRouter();

  if (!product) return (
    <div style={{ 
      minHeight: 'calc(100vh - 80px)',
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'center',
      background: 'linear-gradient(135deg, #667eea 0%, #764ba2 100%)',
      padding: '2rem'
    }}>
      <div style={{ 
        textAlign: 'center',
        color: 'white',
        backgroundColor: 'rgba(255, 255, 255, 0.1)',
        padding: '2rem',
        borderRadius: '15px'
      }}>
        <h2>Product not found</h2>
        <button
          onClick={() => router.push('/products')}
          style={{
            backgroundColor: '#007bff',
            color: 'white',
            padding: '1rem 2rem',
            border: 'none',
            borderRadius: '25px',
            fontSize: '1rem',
            fontWeight: 'bold',
            cursor: 'pointer',
            marginTop: '1rem'
          }}
        >
          Back to Products
        </button>
      </div>
    </div>
  );

  const handleBackToProducts = () => {
    router.push('/products');
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
          <div style={{ display: 'flex', gap: '2rem', alignItems: 'flex-start' }}>
            {/* Product Image */}
            <div style={{ flex: '1' }}>
              <img 
                src={product.image} 
                alt={product.title} 
                style={{ 
                  width: '100%', 
                  maxWidth: '400px',
                  height: '400px',
                  objectFit: 'contain',
                  backgroundColor: '#f8f9fa',
                  borderRadius: '10px',
                  padding: '1rem'
                }} 
              />
            </div>

            {/* Product Details */}
            <div style={{ flex: '1', display: 'flex', flexDirection: 'column', gap: '1rem' }}>
              <h1 style={{ 
                fontSize: '2rem', 
                margin: 0, 
                color: '#333',
                fontWeight: 'bold'
              }}>
                {product.title}
              </h1>
              
              <div style={{ fontSize: '1.5rem', color: '#007bff', fontWeight: 'bold' }}>
                ${product.price}
              </div>

              <div style={{ color: '#666', lineHeight: '1.6' }}>
                <p style={{ margin: '0 0 1rem 0' }}>
                  {product.description || 'No description available for this product.'}
                </p>
                <p style={{ margin: '0' }}>
                  Category: {product.category || 'General'}
                </p>
              </div>

              {/* Action Buttons */}
              <div style={{ display: 'flex', gap: '1rem', marginTop: 'auto' }}>
                <button
                  onClick={handleBackToProducts}
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
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export const getServerSideProps: GetServerSideProps = async (context) => {
  const { id } = context.params!;
  const res = await fetch(`https://fakestoreapi.com/products/${id}`);

  if (!res.ok) {
    return { notFound: true };
  }

  const product = await res.json();

  return {
    props: {
      product,
    },
  };
};
