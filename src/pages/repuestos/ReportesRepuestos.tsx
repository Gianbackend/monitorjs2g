import React from 'react';
import { BarChart3, FileSpreadsheet, Zap } from 'lucide-react';

export const ReportesRepuestos = () => {
  return (
    <div className="p-8">
      <div className="mb-6 flex justify-between items-center">
        <div>
          <h1 className="text-2xl font-black italic uppercase text-slate-800 tracking-tighter">
            Reportes - Repuestos
          </h1>
          <p className="text-slate-500 text-sm">Análisis de costos, tiempos y rendimiento de campañas.</p>
        </div>
        <button className="bg-slate-900 text-white px-4 py-2 rounded-lg text-sm font-bold flex items-center gap-2 hover:bg-slate-800 transition-colors">
          <Zap size={18} /> Generar Reporte Rápido
        </button>
      </div>

      <div className="bg-white border border-slate-200 rounded-2xl shadow-sm p-8 text-center text-slate-300 italic">
        Aquí se visualizará la lista de reportes disponibles y el visor de gráficos...
      </div>
    </div>
  );
};