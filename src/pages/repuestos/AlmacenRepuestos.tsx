import React from 'react';
import { Warehouse, Boxes, Container } from 'lucide-react'; // Cambiado Pallet por Container

export const AlmacenRepuestos = () => {
  return (
    <div className="p-8">
      <div className="mb-6 flex justify-between items-center">
        <div>
          <h1 className="text-2xl font-black italic uppercase text-slate-800 tracking-tighter">
            Almacén - Repuestos
          </h1>
          <p className="text-slate-500 text-sm">Registro de ingresos y control de inventario de stock importado.</p>
        </div>
        <div className="flex gap-2">
          <button className="bg-blue-600 text-white px-4 py-2 rounded-lg text-sm font-bold flex items-center gap-2 hover:bg-blue-700 transition-colors">
            <Warehouse size={18} /> Registrar Ingreso
          </button>
        </div>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-6">
        {/* Card de Stock */}
        <div className="bg-white p-6 rounded-2xl border border-slate-200 shadow-sm flex items-center gap-4">
          <div className="p-4 bg-indigo-100 text-indigo-600 rounded-xl">
            <Boxes size={24} />
          </div>
          <div>
            <p className="text-[10px] font-bold text-slate-400 uppercase">Stock Actual (Importado)</p>
            <p className="text-2xl font-black text-slate-800">125,000</p>
          </div>
        </div>
        
        {/* Card de Ubicaciones - Usando Container en lugar de Pallet */}
        <div className="bg-white p-6 rounded-2xl border border-slate-200 shadow-sm flex items-center gap-4">
          <div className="p-4 bg-slate-100 text-slate-600 rounded-xl">
            <Container size={24} /> 
          </div>
          <div>
            <p className="text-[10px] font-bold text-slate-400 uppercase">Ubicaciones Ocupadas</p>
            <p className="text-2xl font-black text-slate-800">1,200</p>
          </div>
        </div>
      </div>
    </div>
  );
};