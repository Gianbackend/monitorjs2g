import React from 'react';
import { ClipboardList, Plus, Search, Filter } from 'lucide-react';

export const SolpedVehiculos = () => {
  return (
    <div className="p-8">
      <div className="flex justify-between items-center mb-8">
        <div>
          <h1 className="text-2xl font-black italic uppercase text-slate-800 tracking-tighter">Gestión Solped - Vehículos</h1>
          <p className="text-slate-500 text-sm">Creación y seguimiento de solicitudes de pedido en SAP.</p>
        </div>
        <button className="bg-blue-600 text-white px-6 py-2.5 rounded-xl font-bold flex items-center gap-2 hover:bg-blue-700 transition-all shadow-lg shadow-blue-200">
          <Plus size={20} /> Nueva Solped
        </button>
      </div>

      <div className="bg-white rounded-2xl border border-slate-200 shadow-sm overflow-hidden">
        <div className="p-4 border-b border-slate-100 bg-slate-50/50 flex gap-4">
          <div className="relative flex-1">
            <Search className="absolute left-3 top-1/2 -translate-y-1/2 text-slate-400" size={18} />
            <input type="text" placeholder="Buscar por número de Solped o modelo..." className="w-full pl-10 pr-4 py-2 border border-slate-200 rounded-lg text-sm focus:outline-none focus:ring-2 focus:ring-blue-500/20" />
          </div>
          <button className="flex items-center gap-2 px-4 py-2 border border-slate-200 rounded-lg text-sm font-bold text-slate-600 hover:bg-white transition-colors">
            <Filter size={18} /> Filtros
          </button>
        </div>
        <div className="p-20 text-center">
          <div className="bg-slate-50 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
            <ClipboardList className="text-slate-300" size={32} />
          </div>
          <h3 className="text-slate-800 font-bold">No hay registros</h3>
          <p className="text-slate-400 text-sm">Comienza creando una nueva Solicitud de Pedido.</p>
        </div>
      </div>
    </div>
  );
};