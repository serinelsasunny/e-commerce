import React from 'react';

export default function Contact() {
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
        maxWidth: '800px',
        width: '100%',
        textAlign: 'center',
        color: 'white'
      }}>
        <div className="bg-white rounded shadow mx-auto" style={{ padding: '3rem', borderRadius: '15px' }}>
          <div>
            <h1 className="align-text-center" style={{ fontSize: '3rem', marginBottom: '1rem', fontWeight: 'bold', color: '#333', letterSpacing: '2px' }}>Contact Us</h1>
          </div>
          <div className="text-center" style={{ marginBottom: '3rem' }}>
            <p style={{ fontSize: '1.2rem', color: '#666' }}>Reach out to us with any questions, concerns, or inquiries.</p>
          </div>

          <div className="d-flex flex-column justify-content-center align-items-center" style={{ gap: '2rem' }}>
            <div className="d-flex flex-row shadow p-3 mb-5 bg-white rounded text-center" style={{ 
              alignItems: 'center', 
              gap: '1rem',
              padding: '1.5rem 2rem',
              borderRadius: '10px',
              minWidth: '300px',
              transition: 'transform 0.3s ease, box-shadow 0.3s ease',
              cursor: 'pointer'
            }}
            onMouseEnter={(e) => {
              e.currentTarget.style.transform = 'translateY(-8px)';
              e.currentTarget.style.boxShadow = '0 12px 24px rgba(0, 0, 0, 0.15)';
            }}
            onMouseLeave={(e) => {
              e.currentTarget.style.transform = 'translateY(0)';
              e.currentTarget.style.boxShadow = '0 4px 12px rgba(0, 0, 0, 0.1)';
            }}>
              <div style={{ 
                height: '40px', 
                width: '40px',
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
                backgroundColor: '#f8f9fa',
                borderRadius: '50%',
                transition: 'transform 0.3s ease'
              }}>
                <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="#007bff" strokeWidth="2">
                  <path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6 19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72 12.84 12.84 0 0 0 .7 2.81 2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45 12.84 12.84 0 0 0 2.81.7A2 2 0 0 1 22 16.92z"/>
                </svg>
              </div>
              <h4 style={{ margin: 0, color: '#333', fontSize: '1.1rem' }}>+132-254-265-452</h4>
            </div>

            <div className="d-flex flex-row shadow p-3 mb-5 bg-white rounded" style={{ 
              alignItems: 'center', 
              gap: '1rem',
              padding: '1.5rem 2rem',
              borderRadius: '10px',
              minWidth: '300px',
              transition: 'transform 0.3s ease, box-shadow 0.3s ease',
              cursor: 'pointer'
            }}
            onMouseEnter={(e) => {
              e.currentTarget.style.transform = 'translateY(-8px)';
              e.currentTarget.style.boxShadow = '0 12px 24px rgba(0, 0, 0, 0.15)';
            }}
            onMouseLeave={(e) => {
              e.currentTarget.style.transform = 'translateY(0)';
              e.currentTarget.style.boxShadow = '0 4px 12px rgba(0, 0, 0, 0.1)';
            }}>
              <div style={{ 
                height: '40px', 
                width: '40px',
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
                backgroundColor: '#f8f9fa',
                borderRadius: '50%',
                transition: 'transform 0.3s ease'
              }}>
                <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="#007bff" strokeWidth="2">
                  <circle cx="12" cy="12" r="10"/>
                  <path d="M2 12h20"/>
                  <path d="M12 2a15.3 15.3 0 0 1 4 10 15.3 15.3 0 0 1-4 10 15.3 15.3 0 0 1-4-10 15.3 15.3 0 0 1 4-10z"/>
                </svg>
              </div>
              <h4 style={{ margin: 0, color: '#333', fontSize: '1.1rem' }}>www.emart.com</h4>
            </div>

            <div className="d-flex flex-row shadow p-3 mb-5 bg-white rounded" style={{ 
              alignItems: 'center', 
              gap: '1rem',
              padding: '1.5rem 2rem',
              borderRadius: '10px',
              minWidth: '300px',
              transition: 'transform 0.3s ease, box-shadow 0.3s ease',
              cursor: 'pointer'
            }}
            onMouseEnter={(e) => {
              e.currentTarget.style.transform = 'translateY(-8px)';
              e.currentTarget.style.boxShadow = '0 12px 24px rgba(0, 0, 0, 0.15)';
            }}
            onMouseLeave={(e) => {
              e.currentTarget.style.transform = 'translateY(0)';
              e.currentTarget.style.boxShadow = '0 4px 12px rgba(0, 0, 0, 0.1)';
            }}>
              <div style={{ 
                height: '40px', 
                width: '40px',
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
                backgroundColor: '#f8f9fa',
                borderRadius: '50%',
                transition: 'transform 0.3s ease'
              }}>
                <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="#007bff" strokeWidth="2">
                  <path d="M21 10c0 7-9 13-9 13s-9-6-9-13a9 9 0 0 1 18 0z"/>
                  <circle cx="12" cy="10" r="3"/>
                </svg>
              </div>
              <h4 style={{ margin: 0, color: '#333', fontSize: '1.1rem' }}>123 Street56, ABCD city</h4>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
