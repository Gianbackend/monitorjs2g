import React from 'react';
import { UploadCloud, FileSpreadsheet, AlertCircle, CheckCircle2 } from 'lucide-react';

export const CargaVehiculos = () => {
  return (
    <div className="p-8">
      <div className="mb-8">
        <h1 className="text-2xl font-black italic uppercase text-slate-800 tracking-tighter">Carga Masiva - Vehículos</h1>
        <p className="text-slate-500 text-sm">Sube el archivo de Excel para actualizar estados de importación en bloque.</p>
      </div>

      <div className="max-w-4xl mx-auto">
        <div className="bg-white border-2 border-dashed border-slate-200 rounded-3xl p-12 text-center hover:border-blue-400 transition-colors group cursor-pointer">
          <div className="bg-blue-50 w-20 h-20 rounded-2xl flex items-center justify-center mx-auto mb-4 group-hover:scale-110 transition-transform">
            <UploadCloud className="text-blue-600" size={40} />
          </div>
          <h3 className="text-lg font-bold text-slate-800">Arrastra tu archivo aquí</h3>
          <p className="text-slate-400 text-sm mb-6">Solo archivos .xlsx o .csv (Máx. 10MB)</p>
          <button className="bg-slate-900 text-white px-8 py-3 rounded-xl font-bold text-sm hover:bg-slate-800 transition-all">
            Seleccionar Archivo
          </button>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mt-8">
          <div className="bg-amber-50 border border-amber-100 p-4 rounded-2xl flex gap-3">
            <AlertCircle className="text-amber-600 shrink-0" size={20} />
            <p className="text-xs text-amber-800 leading-relaxed">
              <strong>Nota:</strong> Asegúrate de que las columnas coincidan con el formato SAP: Pedido, VIN, Motor y Fecha ETA.
            </p>
          </div>
          <div className="bg-slate-900 p-4 rounded-2xl flex items-center justify-between">
            <div className="flex items-center gap-3">
              <FileSpreadsheet className="text-green-400" size={20} />
              <span className="text-white text-xs font-bold tracking-tight">Plantilla_Vehiculos.xlsx</span>
            </div>
            <button className="text-blue-400 text-xs font-bold underline">Descargar</button>
          </div>
        </div>
      </div>
    </div>
  );
};