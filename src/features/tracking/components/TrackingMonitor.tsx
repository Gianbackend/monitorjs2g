import React from 'react';
import { useFetchImportaciones } from '../../../hooks/useFetchImportaciones';
import { Eye } from 'lucide-react';

export const TrackingMonitor: React.FC = () => {
  const { pedidos, loading } = useFetchImportaciones();

  if (loading) return <div className="p-10 text-center">Cargando...</div>;

  return (
    <div className="max-w-6xl mx-auto animate-fadeIn"> 
      {/* Encabezado con KPI rápido */}
      <div className="flex justify-between items-end mb-8">
        <div>
          <h1 className="text-3xl font-extrabold text-slate-900 tracking-tight">Seguimiento de Importaciones</h1>
          <p className="text-slate-500 mt-1">Gestión de pedidos OData de SAP S/4HANA</p>
        </div>
        <div className="text-right">
          <span className="text-xs font-bold text-slate-400 uppercase tracking-widest">Total Pedidos</span>
          <p className="text-2xl font-black text-blue-600">{pedidos.length}</p>
        </div>
      </div>

      {/* Contenedor tipo Tabla / Card */}
      <div className="bg-white rounded-2xl shadow-xl shadow-slate-200/60 border border-slate-100 overflow-hidden">
        <table className="w-full text-left border-collapse">
  <thead>
    <tr className="bg-slate-50/50 border-b border-slate-100 text-[10px] uppercase tracking-wider text-slate-500 font-bold">
      <th className="px-4 py-3">Código</th>
      <th className="px-4 py-3">Pedido SAP</th>
      <th className="px-4 py-3">Proveedor</th>
      <th className="px-4 py-3">País Origen</th>
      <th className="px-4 py-3">Fecha ETA</th>
      <th className="px-4 py-3 text-center">Estado</th>
      <th className="px-4 py-3">Monto</th>
      <th className="px-4 py-3 text-center">Acciones</th>
    </tr>
  </thead>
  <tbody className="divide-y divide-slate-100 bg-white">
    {pedidos.map((p) => (
      <tr key={p.id} className="hover:bg-blue-50/40 transition-colors">
        <td className="px-4 py-4 text-xs font-semibold text-slate-700">{p.codigo_importacion}</td>
        <td className="px-4 py-4 text-xs font-mono text-blue-600 font-bold">{p.pedido_sap}</td>
        <td className="px-4 py-4 text-xs text-slate-800 font-medium">{p.proveedor}</td>
        <td className="px-4 py-4 text-xs text-slate-600">{p.pais_origen}</td>
        <td className="px-4 py-4 text-xs font-bold text-slate-600">{p.fecha_eta}</td>
        <td className="px-4 py-4 text-center">
          <span className={`px-2 py-1 rounded-md text-[10px] font-black uppercase ${
            p.estado === 'Zarpado' ? 'bg-green-100 text-green-700' : 'bg-orange-100 text-orange-700'
          }`}>
            {p.estado}
          </span>
        </td>
        <td className="px-4 py-4 text-xs font-mono font-bold text-slate-700">
          {new Intl.NumberFormat('en-US', { style: 'currency', currency: 'USD' }).format(p.monto_total)}
        </td>
        <td className="px-4 py-4 text-center">
          <button className="text-blue-600 hover:text-blue-800 p-1 rounded hover:bg-blue-100 transition-colors">
             <Eye size={16} /> {/* O usa un texto "Ver" */}
          </button>
        </td>
      </tr>
    ))}
  </tbody>
</table>
      </div>
    </div>
  );
};