import React from 'react';
import { FileEdit, Search } from 'lucide-react';

export const GestionRepuestos = () => {
  return (
    <div className="p-8">
      <div className="flex justify-between items-center mb-6">
        <div>
          <h1 className="text-2xl font-black italic uppercase text-slate-800 tracking-tighter">
            Gestión de Pedidos - Repuestos
          </h1>
          <p className="text-slate-500 text-sm">Administración y seguimiento de Solpeds y Órdenes.</p>
        </div>
        <div className="flex gap-2">
          <button className="bg-blue-600 text-white px-4 py-2 rounded-lg text-sm font-bold flex items-center gap-2 hover:bg-blue-700 transition-colors">
            <FileEdit size={18} /> Nueva Solicitud
          </button>
        </div>
      </div>

      <div className="bg-white border border-slate-200 rounded-2xl shadow-sm overflow-hidden">
        <div className="p-4 border-b border-slate-100 bg-slate-50 flex justify-between items-center">
          <span className="text-[10px] font-black uppercase text-slate-400 tracking-widest">Filtros de búsqueda</span>
          <Search size={16} className="text-slate-400" />
        </div>
        <div className="p-12 text-center">
          <p className="text-slate-400 text-sm">No hay pedidos pendientes de gestión.</p>
        </div>
      </div>
    </div>
  );
};