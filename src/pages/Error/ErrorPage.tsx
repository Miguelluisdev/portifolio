// ErrorPage.tsx
import React from 'react';

const ErrorPage: React.FC = () => {
  return (
    <div className="flex items-center justify-center h-screen bg-red-500 text-white">
      <div>
        <h1 className="text-6xl font-bold">404</h1>
        <p className="text-2xl">Página não encontrada</p>
      </div>
    </div>
  );
};

export default ErrorPage;
