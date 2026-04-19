
import React from 'react';

export const Header: React.FC = () => {
  return (
    <header className="h-16 bg-white border-b border-gray-200 flex items-center justify-between px-8 shadow-sm">
      <div className="text-sm font-medium text-gray-500">
        Monitor de Importaciones / <span className="text-gray-900">Dashboard</span>
      </div>
      <div className="flex items-center gap-4">
        <div className="text-right">
          <p className="text-xs font-bold text-gray-700">Gian</p>
          <p className="text-[10px] text-gray-500">Administrador</p>
        </div>
        <div className="h-8 w-8 rounded-full bg-blue-600 flex items-center justify-center text-white text-xs">
          G
        </div>
      </div>
    </header>
  );
};