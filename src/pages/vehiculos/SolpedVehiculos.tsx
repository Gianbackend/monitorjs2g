import { FileSpreadsheet } from 'lucide-react';

export const SolpedVehiculos = () => (
  <div className="p-8">
    <h1 className="text-2xl font-black italic text-slate-800 uppercase tracking-tighter">Gestión Solped Vehículos</h1>
    <div className="mt-6 border-2 border-dashed border-slate-300 rounded-3xl p-20 flex flex-col items-center bg-white">
      <FileSpreadsheet size={48} className="text-blue-500 mb-4" />
      <p className="font-bold text-slate-700">Arrastra el Excel de Solpeds (Unidades)</p>
    </div>
  </div>
);