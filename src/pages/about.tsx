import React from 'react';

function About() {
  return (
    <div style={{ 
      minHeight: 'calc(100vh - 80px)',
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'center',
      background: 'linear-gradient(135deg, #667eea 0%, #764ba2 100%)',
      padding: '2rem',
      marginTop: '80px'
    }}>
      <div style={{ 
        maxWidth: '800px',
        width: '100%',
        textAlign: 'center',
        color: 'white'
      }}>
        <h2 className="text-uppercase mb-4" style={{
          fontSize: '3rem', 
          marginBottom: '2rem', 
          fontWeight: 'bold',
          letterSpacing: '2px',
          color: 'white'
        }}>
          About Us
        </h2>
        <p style={{ 
          fontSize: '1.2rem', 
          lineHeight: '1.8',
          marginBottom: '0',
          textAlign: 'justify',
          color: 'white'
        }}>
          E-MART focuses to deliver the finest quality products within the
          promised time limit as well as prioritizing the customer
          preferences. Also we value our employees who are the basic building
          blocks of the company.We're constantly seeking to improve our
          services, add benefits and features, and invent the most efficient
          way of delivering the products.Our shoppers can find what they're
          looking for online here in our E-MART.Our passion for delighting
          customers drives us to constantly invent on their behalf.
        </p>
      </div>
    </div>
  );
}

export default About;
