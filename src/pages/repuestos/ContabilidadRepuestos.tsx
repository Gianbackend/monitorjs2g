import React from 'react';
import { Landmark, ReceiptText, Calculator } from 'lucide-react';

export const ContabilidadRepuestos = () => {
  return (
    <div className="p-8">
      <div className="mb-6">
        <h1 className="text-2xl font-black italic uppercase text-slate-800 tracking-tighter">
          Contabilidad - Repuestos
        </h1>
        <p className="text-slate-500 text-sm">Seguimiento financiero de importaciones de repuestos.</p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
        <div className="bg-white p-6 rounded-2xl border border-slate-200 shadow-sm flex items-center gap-4">
          <div className="p-3 bg-green-100 text-green-600 rounded-xl"><Landmark size={20} /></div>
          <div>
            <p className="text-[10px] font-bold text-slate-400 uppercase tracking-wider">Pagos Realizados</p>
            <p className="text-xl font-black text-slate-800">$0.00</p>
          </div>
        </div>

        <div className="bg-white p-6 rounded-2xl border border-slate-200 shadow-sm flex items-center gap-4">
          <div className="p-3 bg-amber-100 text-amber-600 rounded-xl"><ReceiptText size={20} /></div>
          <div>
            <p className="text-[10px] font-bold text-slate-400 uppercase tracking-wider">Facturas Pendientes</p>
            <p className="text-xl font-black text-slate-800">0</p>
          </div>
        </div>

        <div className="bg-white p-6 rounded-2xl border border-slate-200 shadow-sm flex items-center gap-4">
          <div className="p-3 bg-blue-100 text-blue-600 rounded-xl"><Calculator size={20} /></div>
          <div>
            <p className="text-[10px] font-bold text-slate-400 uppercase tracking-wider">Provisiones</p>
            <p className="text-xl font-black text-slate-800">$0.00</p>
          </div>
        </div>
      </div>
    </div>
  );
};