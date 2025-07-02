import React from 'react';

interface LoaderProps {
  isLoading: boolean;
}

const Loader: React.FC<LoaderProps> = ({ isLoading }) => {
  if (!isLoading) return null;

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center bg-gray-900">
      <div className="text-center">
        {/* Cyberpunk Loading Animation */}
        <div className="relative mb-8">
          <div className="w-32 h-32 border-4 border-violet-500/20 rounded-full animate-spin">
            <div className="absolute top-0 left-0 w-32 h-32 border-4 border-t-violet-400 border-r-purple-400 rounded-full animate-spin"
              style={{ animationDuration: '1.5s', animationDirection: 'reverse' }}></div>
          </div>
          <div className="absolute inset-0 flex items-center justify-center">
            <div className="w-16 h-16 bg-gradient-to-r from-violet-500 to-purple-500 rounded-full animate-pulse"></div>
          </div>
        </div>

        {/* Loading Text with Glitch Effect */}
        <div className="text-2xl font-bold text-purple-400 mb-4 animate-pulse">
          <span className="relative">
            LOADING
            <span className="absolute inset-0 text-violet-400 animate-ping opacity-75">LOADING</span>
          </span>
        </div>

        {/* Progress Bar */}
        <div className="w-64 h-2 bg-gray-800 rounded-full overflow-hidden">
          <div className="h-full bg-gradient-to-r from-violet-500 to-purple-500 rounded-full animate-pulse"
            style={{
              animation: 'loading-progress 3s ease-in-out infinite',
              width: '100%'
            }}></div>
        </div>

        <p className="text-gray-400 mt-4 font-mono">Initializing Project Portfolio...</p>
      </div>

      <style jsx>{`
        @keyframes loading-progress {
          0% { width: 0%; }
          50% { width: 70%; }
          100% { width: 100%; }
        }
      `}</style>
    </div>
  );
};

export default Loader;
