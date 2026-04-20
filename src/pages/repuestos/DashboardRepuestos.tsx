import { Package, AlertTriangle, CheckCircle } from 'lucide-react';

export const DashboardRepuestos = () => {
  return (
    <div className="p-6 space-y-6">
      <h2 className="text-2xl font-bold text-slate-800 italic">Dashboard Repuestos</h2>
      
      {/* KPIs Rápidos */}
      <div className="grid grid-cols-3 gap-6">
        <div className="bg-white p-6 rounded-xl border border-slate-200 shadow-sm">
          <div className="flex items-center gap-4">
            <div className="p-3 bg-green-100 text-green-600 rounded-lg"><Package /></div>
            <div>
              <p className="text-xs text-slate-500 font-bold uppercase">Items en Tránsito</p>
              <p className="text-2xl font-black text-slate-800">1,240</p>
            </div>
          </div>
        </div>
        {/* Agrega más cards similares aquí si deseas */}
      </div>

      <div className="bg-white p-8 rounded-xl border border-slate-200 text-center text-slate-400">
        Gráficos de inventario de repuestos en camino...
      </div>
    </div>
  );
};