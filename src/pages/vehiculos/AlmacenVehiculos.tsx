import React from 'react';
import { Warehouse, Car, MapPin, Navigation } from 'lucide-react';

export const AlmacenVehiculos = () => {
  return (
    <div className="p-8">
      <div className="mb-8">
        <h1 className="text-2xl font-black italic uppercase text-slate-800 tracking-tighter">Almacén - Vehículos</h1>
        <p className="text-slate-500 text-sm">Control de stock físico en puerto y depósitos temporales.</p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-4 gap-6 mb-8">
        <div className="bg-white p-5 rounded-2xl border border-slate-200 shadow-sm">
          <p className="text-[10px] font-black text-slate-400 uppercase mb-1">Puerto (APM/DPW)</p>
          <p className="text-2xl font-black text-slate-800">24 Unid.</p>
        </div>
        <div className="bg-white p-5 rounded-2xl border border-slate-200 shadow-sm">
          <p className="text-[10px] font-black text-slate-400 uppercase mb-1">Almacén Central</p>
          <p className="text-2xl font-black text-slate-800">156 Unid.</p>
        </div>
        <div className="bg-white p-5 rounded-2xl border border-slate-200 shadow-sm">
          <p className="text-[10px] font-black text-slate-400 uppercase mb-1">En Traslado</p>
          <p className="text-2xl font-black text-slate-800">12 Unid.</p>
        </div>
        <div className="bg-white p-5 rounded-2xl border border-slate-200 shadow-sm">
          <p className="text-[10px] font-black text-slate-400 uppercase mb-1">Total Stock</p>
          <p className="text-2xl font-black text-blue-600">192 Unid.</p>
        </div>
      </div>

      <div className="bg-white rounded-3xl border border-slate-200 shadow-sm p-8 text-center border-dashed border-2">
         <Navigation className="mx-auto text-slate-200 mb-4" size={48} />
         <p className="text-slate-400 font-medium italic">El mapa de calor de stock y ubicaciones se está cargando...</p>
      </div>
    </div>
  );
};