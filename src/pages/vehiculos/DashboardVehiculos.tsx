import React from 'react';
import { LayoutDashboard, Ship, Clock, CheckCircle2, TrendingUp } from 'lucide-react';

// Datos mockeados según tu requerimiento
const dataMock = [
  { id: 1, created_at: '2026-04-15', codigo_importacion: 'IMP-2026-001', pedido_sap: '4500012345', monto_total: 125000.50, fecha_eta: '2026-05-20', estado: 'Zarpado', pais_origen: 'Japón', proveedor: 'Toyota Global' },
  { id: 2, created_at: '2026-04-18', codigo_importacion: 'IMP-2026-002', pedido_sap: '4500012388', monto_total: 85400.00, fecha_eta: '2026-05-12', estado: 'En Tránsito', pais_origen: 'China', proveedor: 'Foton Motors' },
  { id: 3, created_at: '2026-04-20', codigo_importacion: 'IMP-2026-003', pedido_sap: null, monto_total: 45000.00, fecha_eta: '2026-06-01', estado: 'En Puerto', pais_origen: 'India', proveedor: 'Suzuki Co' },
];

export const DashboardVehiculos = () => {
  return (
    <div className="p-8 space-y-8">
      {/* Cabecera */}
      <div className="flex justify-between items-center">
        <div>
          <h1 className="text-2xl font-black italic uppercase text-slate-800 tracking-tighter">
            Torre de Control - Vehículos
          </h1>
          <p className="text-slate-500 text-sm">Monitoreo de unidades en tránsito y nacionalización.</p>
        </div>
        <div className="bg-white px-4 py-2 rounded-xl border border-slate-200 flex items-center gap-3">
          <TrendingUp className="text-green-500" size={20} />
          <span className="text-sm font-bold text-slate-700">KPI Eficiencia: 94%</span>
        </div>
      </div>

      {/* Widgets de Resumen */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
        <div className="bg-white p-6 rounded-2xl border border-slate-200 shadow-sm flex items-center gap-4">
          <div className="p-4 bg-blue-50 text-blue-600 rounded-xl"><Ship size={24} /></div>
          <div>
            <p className="text-[10px] font-bold text-slate-400 uppercase tracking-widest">En Alta Mar</p>
            <p className="text-2xl font-black text-slate-800">12 Buques</p>
          </div>
        </div>
        <div className="bg-white p-6 rounded-2xl border border-slate-200 shadow-sm flex items-center gap-4">
          <div className="p-4 bg-amber-50 text-amber-600 rounded-xl"><Clock size={24} /></div>
          <div>
            <p className="text-[10px] font-bold text-slate-400 uppercase tracking-widest">Pendiente Aduana</p>
            <p className="text-2xl font-black text-slate-800">45 Unidades</p>
          </div>
        </div>
        <div className="bg-white p-6 rounded-2xl border border-slate-200 shadow-sm flex items-center gap-4">
          <div className="p-4 bg-green-50 text-green-600 rounded-xl"><CheckCircle2 size={24} /></div>
          <div>
            <p className="text-[10px] font-bold text-slate-400 uppercase tracking-widest">Entregados Mes</p>
            <p className="text-2xl font-black text-slate-800">128</p>
          </div>
        </div>
      </div>

      {/* Tabla de Importaciones */}
      <div className="bg-white border border-slate-200 rounded-2xl shadow-sm overflow-hidden">
        <div className="p-5 border-b border-slate-100 bg-slate-50/50">
          <h3 className="font-bold text-slate-700 uppercase text-xs tracking-widest">Seguimiento de Pedidos Procesados</h3>
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
              {dataMock.map((item) => (
                <tr key={item.id} className="hover:bg-slate-50/80 transition-colors">
                  <td className="px-6 py-4 font-bold text-blue-600">{item.codigo_importacion}</td>
                  <td className="px-6 py-4 font-medium text-slate-600">{item.pedido_sap || '---'}</td>
                  <td className="px-6 py-4">
                    <div className="flex flex-col">
                      <span className="font-bold text-slate-700">{item.proveedor}</span>
                      <span className="text-[10px] text-slate-400 uppercase">{item.pais_origen}</span>
                    </div>
                  </td>
                  <td className="px-6 py-4 font-bold text-right text-slate-700">
                    ${item.monto_total.toLocaleString('en-US', { minimumFractionDigits: 2 })}
                  </td>
                  <td className="px-6 py-4 text-center">
                    <span className="bg-slate-100 text-slate-600 px-3 py-1 rounded-full text-xs font-medium">
                      {item.fecha_eta}
                    </span>
                  </td>
                  <td className="px-6 py-4 text-center">
                    <span className={`px-3 py-1 rounded-full text-[10px] font-black uppercase ${
                      item.estado === 'Zarpado' ? 'bg-blue-100 text-blue-700' : 
                      item.estado === 'En Tránsito' ? 'bg-amber-100 text-amber-700' : 
                      'bg-indigo-100 text-indigo-700'
                    }`}>
                      {item.estado}
                    </span>
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