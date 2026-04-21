import React from 'react';
import { Wallet, Receipt } from 'lucide-react';

export const ContabilidadVehiculos = () => {
  return (
    <div className="p-8">
      <div className="mb-6">
        <h1 className="text-2xl font-black italic uppercase text-slate-800 tracking-tighter">
          Contabilidad - Vehículos
        </h1>
        <p className="text-slate-500 text-sm">Control de facturas, anticipos y cartas de crédito.</p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-6">
        <div className="bg-white p-6 rounded-2xl border border-slate-200 shadow-sm flex items-center gap-4">
          <div className="p-4 bg-green-100 text-green-600 rounded-xl">
            <Wallet size={24} />
          </div>
          <div>
            <p className="text-[10px] font-bold text-slate-400 uppercase">Anticipos Pendientes</p>
            <p className="text-2xl font-black text-slate-800">$0.00</p>
          </div>
        </div>
        
        <div className="bg-white p-6 rounded-2xl border border-slate-200 shadow-sm flex items-center gap-4">
          <div className="p-4 bg-blue-100 text-blue-600 rounded-xl">
            <Receipt size={24} />
          </div>
          <div>
            <p className="text-[10px] font-bold text-slate-400 uppercase">Facturas por Regularizar</p>
            <p className="text-2xl font-black text-slate-800">0</p>
          </div>
        </div>
      </div>

      <div className="bg-white border border-slate-200 rounded-2xl p-10 text-center text-slate-300 italic">
        Módulo de conciliación financiera...
      </div>
    </div>
  );
};