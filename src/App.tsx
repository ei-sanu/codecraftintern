import React, { useState, useEffect } from 'react';
import Loader from './components/Loader';
import VerificationModal from './components/VerificationModal';
import Portfolio from './components/Portfolio';

function App() {
  const [isLoading, setIsLoading] = useState(true);
  const [showVerification, setShowVerification] = useState(false);
  const [isVerified, setIsVerified] = useState(false);

  useEffect(() => {
    // Simulate loading time
    const timer = setTimeout(() => {
      setIsLoading(false);
      setShowVerification(true);
    }, 3000);

    return () => clearTimeout(timer);
  }, []);

  const handleVerification = (code: string) => {
    if (code === '2511') {
      setIsVerified(true);
      setShowVerification(false);
    }
  };

  const handleCloseVerification = () => {
    setShowVerification(false);
  };

  return (
    <>
      <Loader isLoading={isLoading} />
      
      <VerificationModal
        isOpen={showVerification && !isVerified}
        onVerify={handleVerification}
        onClose={handleCloseVerification}
      />

      {isVerified && <Portfolio />}

      {/* Global Styles */}
      <style jsx global>{`
        * {
          scroll-behavior: smooth;
        }
        
        body {
          background: #111827;
          font-family: 'Inter', system-ui, -apple-system, sans-serif;
        }

        /* Custom Scrollbar */
        ::-webkit-scrollbar {
          width: 8px;
        }
        
        ::-webkit-scrollbar-track {
          background: #1f2937;
        }
        
        ::-webkit-scrollbar-thumb {
          background: linear-gradient(45deg, #8b5cf6, #a855f7);
          border-radius: 4px;
        }
        
        ::-webkit-scrollbar-thumb:hover {
          background: linear-gradient(45deg, #7c3aed, #9333ea);
        }

        /* Selection Styling */
        ::selection {
          background: rgba(139, 92, 246, 0.3);
          color: white;
        }
      `}</style>
    </>
  );
}

export default App;