import { AlertTriangle, CheckCircle, Lock, Shield } from 'lucide-react';
import React, { useState } from 'react';

interface VerificationModalProps {
  isOpen: boolean;
  onVerify: (code: string) => void;
  onClose: () => void;
}

const VerificationModal: React.FC<VerificationModalProps> = ({ isOpen, onVerify, onClose }) => {
  const [code, setCode] = useState('');
  const [error, setError] = useState('');
  const [isVerifying, setIsVerifying] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setIsVerifying(true);
    setError('');

    setTimeout(() => {
      if (code === '2511') {
        onVerify(code);
      } else {
        setError('Invalid verification code. Access denied.');
      }
      setIsVerifying(false);
    }, 1500);
  };

  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/80 backdrop-blur-sm">
      <div className="bg-gradient-to-br from-gray-900 to-gray-800 p-8 rounded-2xl border-2 border-violet-500/30 shadow-2xl max-w-md w-full mx-4 animate-scale-in">
        <div className="text-center mb-6">
          <div className="inline-flex items-center justify-center w-16 h-16 bg-gradient-to-r from-violet-500 to-purple-500 rounded-full mb-4 animate-pulse">
            <Shield className="w-8 h-8 text-white" />
          </div>
          <h2 className="text-2xl font-bold text-white mb-2">Security Verification</h2>
          <p className="text-gray-400 text-sm">
            This portfolio is restricted to authorized personnel only.
            Please enter the verification code to proceed.
          </p>
        </div>

        <form onSubmit={handleSubmit} className="space-y-4">
          <div className="relative">
            <Lock className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400 w-5 h-5" />
            <input
              type="password"
              value={code}
              onChange={(e) => setCode(e.target.value)}
              placeholder="Enter verification code"
              className="w-full pl-10 pr-4 py-3 bg-gray-800 border border-gray-600 rounded-lg text-white placeholder-gray-400 focus:outline-none focus:border-violet-500 focus:ring-2 focus:ring-violet-500/20 transition-all duration-300"
              maxLength={4}
            />
          </div>

          {error && (
            <div className="flex items-center space-x-2 text-red-400 text-sm animate-shake">
              <AlertTriangle className="w-4 h-4" />
              <span>{error}</span>
            </div>
          )}

          <button
            type="submit"
            disabled={!code || isVerifying}
            className="w-full py-3 bg-gradient-to-r from-violet-600 to-purple-600 text-white font-semibold rounded-lg hover:from-violet-700 hover:to-purple-700 disabled:opacity-50 disabled:cursor-not-allowed transition-all duration-300 transform hover:scale-105"
          >
            {isVerifying ? (
              <div className="flex items-center justify-center space-x-2">
                <div className="w-4 h-4 border-2 border-white border-t-transparent rounded-full animate-spin"></div>
                <span>Verifying...</span>
              </div>
            ) : (
              <div className="flex items-center justify-center space-x-2">
                <CheckCircle className="w-5 h-5" />
                <span>Verify Access</span>
              </div>
            )}
          </button>
        </form>

        <div className="mt-6 text-center">
          <p className="text-xs text-gray-500">
            Authorized access only • Portfolio Projects
          </p>
        </div>
      </div>

      <style jsx>{`
        @keyframes scale-in {
          0% { transform: scale(0.9); opacity: 0; }
          100% { transform: scale(1); opacity: 1; }
        }
        @keyframes shake {
          0%, 100% { transform: translateX(0); }
          25% { transform: translateX(-4px); }
          75% { transform: translateX(4px); }
        }
        .animate-scale-in {
          animation: scale-in 0.3s ease-out;
        }
        .animate-shake {
          animation: shake 0.5s ease-in-out;
        }
      `}</style>
    </div>
  );
};

export default VerificationModal;
