// /pages/index.tsx
import Link from 'next/link';

export default function Home() {
  return (
    <div style={{ 
      minHeight: 'calc(100vh - 80px)',
      display: 'flex',
      flexDirection: 'column',
      alignItems: 'center',
      justifyContent: 'center',
      textAlign: 'center',
      background: 'linear-gradient(135deg, #667eea 0%, #764ba2 100%)',
      color: 'white',
      padding: '2rem',
      marginTop: '80px'
    }}>
      <h1 style={{ 
        fontSize: '3rem', 
        marginBottom: '1rem', 
        fontWeight: 'bold',
        color: 'white'
      }}>
        Welcome to E-MART
      </h1>
      <p style={{ 
        fontSize: '1.2rem', 
        marginBottom: '2rem', 
        maxWidth: '600px',
        color: 'white'
      }}>
        Your one-stop destination for quality products at amazing prices. Discover our wide range of products today!
      </p>
      <div style={{ display: 'flex', gap: '1rem' }}>
        <Link href="/products" style={{
          backgroundColor: 'white',
          color: '#667eea',
          padding: '1rem 2rem',
          borderRadius: '25px',
          textDecoration: 'none',
          fontWeight: 'bold',
          transition: 'transform 0.3s, box-shadow 0.3s'
        }}>
          Shop Now
        </Link>
        <Link href="/about" style={{
          backgroundColor: 'transparent',
          color: 'white',
          padding: '1rem 2rem',
          borderRadius: '25px',
          textDecoration: 'none',
          fontWeight: 'bold',
          border: '2px solid white',
          transition: 'transform 0.3s, box-shadow 0.3s'
        }}>
          Learn More
        </Link>
      </div>
    </div>
  );
}
