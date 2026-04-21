import React from 'react';
import { LayoutDashboard, Package, AlertTriangle, CheckCircle2, TrendingUp, Boxes } from 'lucide-react';

const dataMockRepuestos = [
  { id: 1, created_at: '2026-04-18', codigo_importacion: 'REP-2026-045', pedido_sap: '4500098765', monto_total: 12450.00, fecha_eta: '2026-05-10', estado: 'Zarpado', pais_origen: 'Alemania', proveedor: 'Bosch GmbH' },
  { id: 2, created_at: '2026-04-19', codigo_importacion: 'REP-2026-046', pedido_sap: '4500098800', monto_total: 8900.50, fecha_eta: '2026-05-05', estado: 'En Tránsito', pais_origen: 'Brasil', proveedor: 'Magneti Marelli' },
  { id: 3, created_at: '2026-04-21', codigo_importacion: 'REP-2026-047', pedido_sap: '---', monto_total: 5600.00, fecha_eta: '2026-05-25', estado: 'En Puerto', pais_origen: 'USA', proveedor: 'Cummins Inc' },
];

export const DashboardRepuestos = () => {
  return (
    <div className="p-8 space-y-8">
      <div className="flex justify-between items-center">
        <div>
          <h1 className="text-2xl font-black italic uppercase text-slate-800 tracking-tighter">
            Torre de Control - Repuestos
          </h1>
          <p className="text-slate-500 text-sm">Monitoreo de SKUs y componentes en tránsito.</p>
        </div>
        <div className="bg-white px-4 py-2 rounded-xl border border-slate-200 flex items-center gap-3">
          <TrendingUp className="text-blue-500" size={20} />
          <span className="text-sm font-bold text-slate-700">Disponibilidad: 98.2%</span>
        </div>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
        <div className="bg-white p-6 rounded-2xl border border-slate-200 shadow-sm flex items-center gap-4">
          <div className="p-4 bg-indigo-50 text-indigo-600 rounded-xl"><Boxes size={24} /></div>
          <div>
            <p className="text-[10px] font-bold text-slate-400 uppercase tracking-widest">Items en Tránsito</p>
            <p className="text-2xl font-black text-slate-800">8,420</p>
          </div>
        </div>
        <div className="bg-white p-6 rounded-2xl border border-slate-200 shadow-sm flex items-center gap-4">
          <div className="p-4 bg-red-50 text-red-600 rounded-xl"><AlertTriangle size={24} /></div>
          <div>
            <p className="text-[10px] font-bold text-slate-400 uppercase tracking-widest">Urgentes (Backorder)</p>
            <p className="text-2xl font-black text-slate-800">15</p>
          </div>
        </div>
        <div className="bg-white p-6 rounded-2xl border border-slate-200 shadow-sm flex items-center gap-4">
          <div className="p-4 bg-green-50 text-green-600 rounded-xl"><CheckCircle2 size={24} /></div>
          <div>
            <p className="text-[10px] font-bold text-slate-400 uppercase tracking-widest">Ingresos Hoy</p>
            <p className="text-2xl font-black text-slate-800">342</p>
          </div>
        </div>
      </div>

      <div className="bg-white border border-slate-200 rounded-2xl shadow-sm overflow-hidden">
        <div className="p-5 border-b border-slate-100 bg-slate-50/50">
          <h3 className="font-bold text-slate-700 uppercase text-xs tracking-widest">Seguimiento de Repuestos</h3>
        </div>
        <div className="overflow-x-auto">
          <table className="w-full text-sm text-left">
            <thead className="text-[10px] text-slate-400 uppercase bg-slate-50/30">
              <tr>
                <th className="px-6 py-4 font-bold">Cod. Importación</th>
                <th className="px-6 py-4 font-bold">Pedido SAP</th>
                <th className="px-6 py-4 font-bold">Proveedor / Origen</th>
                <th className="px-6 py-4 font-bold text-right">Monto Total</th>
                <th className="px-6 py-4 font-bold text-center">Fecha ETA</th>
                <th className="px-6 py-4 font-bold text-center">Estado</th>
              </tr>
            </thead>
            <tbody className="divide-y divide-slate-100">
              {dataMockRepuestos.map((item) => (
                <tr key={item.id} className="hover:bg-slate-50/80 transition-colors">
                  <td className="px-6 py-4 font-bold text-blue-600">{item.codigo_importacion}</td>
                  <td className="px-6 py-4 font-medium text-slate-600">{item.pedido_sap}</td>
                  <td className="px-6 py-4">
                    <div className="flex flex-col">
                      <span className="font-bold text-slate-700">{item.proveedor}</span>
                      <span className="text-[10px] text-slate-400 uppercase">{item.pais_origen}</span>
                    </div>
                  </td>
                  <td className="px-6 py-4 font-bold text-right text-slate-700">${item.monto_total.toLocaleString()}</td>
                  <td className="px-6 py-4 text-center">
                    <span className="bg-slate-100 text-slate-600 px-3 py-1 rounded-full text-xs font-medium">{item.fecha_eta}</span>
                  </td>
                  <td className="px-6 py-4 text-center">
                    <span className={`px-3 py-1 rounded-full text-[10px] font-black uppercase ${
                      item.estado === 'Zarpado' ? 'bg-blue-100 text-blue-700' : 'bg-amber-100 text-amber-700'
                    }`}>{item.estado}</span>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
};