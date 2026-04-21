import React from 'react';
import { ClipboardList, PlusCircle, Search } from 'lucide-react';

export const SolpedRepuestos = () => {
  return (
    <div className="p-8">
      <div className="flex justify-between items-center mb-6">
        <div>
          <h1 className="text-2xl font-black italic uppercase text-slate-800 tracking-tighter">
            Gestión Solped - Repuestos
          </h1>
          <p className="text-slate-500 text-sm">Administración de solicitudes de pedido para stock y taller.</p>
        </div>
        <button className="bg-blue-600 text-white px-4 py-2 rounded-lg text-sm font-bold flex items-center gap-2 hover:bg-blue-700 transition-all shadow-md">
          <PlusCircle size={18} /> Crear Solped
        </button>
      </div>

      <div className="bg-white border border-slate-200 rounded-2xl shadow-sm overflow-hidden">
        <div className="p-4 border-b border-slate-100 bg-slate-50 flex items-center gap-4">
          <div className="relative flex-1">
            <Search className="absolute left-3 top-1/2 -translate-y-1/2 text-slate-400" size={16} />
            <input 
              type="text" 
              placeholder="Buscar por número de solped o material..." 
              className="w-full pl-10 pr-4 py-2 bg-white border border-slate-200 rounded-lg text-sm focus:outline-none focus:ring-2 focus:ring-blue-500/20"
            />
          </div>
        </div>
        <div className="p-12 text-center">
          <ClipboardList size={40} className="mx-auto text-slate-200 mb-4" />
          <p className="text-slate-400 text-sm font-medium">No hay Solpeds de repuestos pendientes.</p>
        </div>
      </div>
    </div>
  );
};