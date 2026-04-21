import React from 'react';
import { BarChart3, FileText, Download, PieChart, Calendar } from 'lucide-react';

export const ReportesVehiculos = () => {
  return (
    <div className="p-8">
      <div className="flex justify-between items-center mb-8">
        <div>
          <h1 className="text-2xl font-black italic uppercase text-slate-800 tracking-tighter">
            Reportes - Vehículos
          </h1>
          <p className="text-slate-500 text-sm">Análisis de gestión de importaciones y tiempos de nacionalización.</p>
        </div>
        <div className="flex gap-3">
          <button className="flex items-center gap-2 px-4 py-2 bg-white border border-slate-200 rounded-lg text-sm font-bold text-slate-600 hover:bg-slate-50 transition-colors">
            <Calendar size={18} /> Filtrar Fechas
          </button>
          <button className="flex items-center gap-2 px-4 py-2 bg-slate-900 text-white rounded-lg text-sm font-bold hover:bg-slate-800 transition-colors">
            <Download size={18} /> Exportar Data
          </button>
        </div>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {/* Reporte 1 */}
        <div className="bg-white p-6 rounded-2xl border border-slate-200 shadow-sm hover:border-blue-300 transition-all group">
          <div className="p-3 bg-blue-50 text-blue-600 rounded-xl w-fit mb-4 group-hover:bg-blue-600 group-hover:text-white transition-colors">
            <BarChart3 size={24} />
          </div>
          <h3 className="font-bold text-slate-800 mb-1">Efectividad de Arribo</h3>
          <p className="text-xs text-slate-400 mb-4">Cumplimiento de fechas ETA vs Real de unidades.</p>
          <button className="w-full py-2 bg-slate-50 text-slate-600 rounded-lg text-xs font-bold hover:bg-blue-50 hover:text-blue-600 transition-colors">
            Generar PDF
          </button>
        </div>

        {/* Reporte 2 */}
        <div className="bg-white p-6 rounded-2xl border border-slate-200 shadow-sm hover:border-green-300 transition-all group">
          <div className="p-3 bg-green-50 text-green-600 rounded-xl w-fit mb-4 group-hover:bg-green-600 group-hover:text-white transition-colors">
            <PieChart size={24} />
          </div>
          <h3 className="font-bold text-slate-800 mb-1">Gasto por Aduanas</h3>
          <p className="text-xs text-slate-400 mb-4">Desglose de costos de nacionalización por unidad.</p>
          <button className="w-full py-2 bg-slate-50 text-slate-600 rounded-lg text-xs font-bold hover:bg-green-50 hover:text-green-600 transition-colors">
            Ver Gráfico
          </button>
        </div>

        {/* Reporte 3 */}
        <div className="bg-white p-6 rounded-2xl border border-slate-200 shadow-sm hover:border-indigo-300 transition-all group">
          <div className="p-3 bg-indigo-50 text-indigo-600 rounded-xl w-fit mb-4 group-hover:bg-indigo-600 group-hover:text-white transition-colors">
            <FileText size={24} />
          </div>
          <h3 className="font-bold text-slate-800 mb-1">Resumen Mensual</h3>
          <p className="text-xs text-slate-400 mb-4">Listado detallado de pedidos SAP finalizados.</p>
          <button className="w-full py-2 bg-slate-50 text-slate-600 rounded-lg text-xs font-bold hover:bg-indigo-50 hover:text-indigo-600 transition-colors">
            Descargar Excel
          </button>
        </div>
      </div>

      <div className="mt-8 bg-slate-50 border-2 border-dashed border-slate-200 rounded-3xl p-12 text-center">
        <p className="text-slate-400 text-sm font-medium italic">Selecciona un reporte para visualizar la vista previa de datos...</p>
      </div>
    </div>
  );
};