import { UploadCloud, Settings } from 'lucide-react';

export const CargaRepuestos = () => {
  return (
    <div className="p-8">
      <div className="mb-8">
        <h1 className="text-2xl font-black italic uppercase text-slate-800 tracking-tighter">Carga de Datos - Repuestos</h1>
        <p className="text-slate-500 text-sm">Importación de SKUs, cantidades y ubicaciones de almacén.</p>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
        <div className="lg:col-span-2 bg-white border border-slate-200 rounded-3xl p-8 shadow-sm">
          <div className="border-2 border-dashed border-slate-100 rounded-2xl p-10 text-center bg-slate-50/50">
            <UploadCloud className="mx-auto text-slate-300 mb-4" size={48} />
            <p className="text-slate-600 font-bold mb-1">Subir Inventario de Repuestos</p>
            <p className="text-slate-400 text-xs mb-6">Sincroniza el stock físico con el Monitor JS</p>
            <input type="file" className="hidden" id="fileRepuestos" />
            <label htmlFor="fileRepuestos" className="bg-blue-600 text-white px-6 py-2.5 rounded-xl font-bold text-sm cursor-pointer hover:bg-blue-700 transition-all">
              Buscar en mi equipo
            </label>
          </div>
        </div>

        <div className="space-y-6">
          <div className="bg-white p-6 rounded-3xl border border-slate-200 shadow-sm">
            <div className="flex items-center gap-3 mb-4">
              <div className="p-2 bg-indigo-100 text-indigo-600 rounded-lg"><Settings size={18} /></div>
              <h4 className="font-bold text-slate-800 text-sm">Configuración</h4>
            </div>
            <div className="space-y-3">
              <label className="flex items-center gap-3 cursor-pointer">
                <input type="checkbox" className="rounded border-slate-300 text-blue-600 focus:ring-blue-500" />
                <span className="text-xs text-slate-600">Omitir duplicados</span>
              </label>
              <label className="flex items-center gap-3 cursor-pointer">
                <input type="checkbox" className="rounded border-slate-300 text-blue-600 focus:ring-blue-500" defaultChecked />
                <span className="text-xs text-slate-600">Validar contra SAP</span>
              </label>
            </div>
          </div>
          
          <div className="bg-slate-50 p-6 rounded-3xl border border-slate-200">
            <h4 className="font-bold text-slate-700 text-xs uppercase tracking-widest mb-3">Última Carga</h4>
            <div className="flex items-center justify-between text-[10px] font-bold text-slate-400">
              <span>21 Abr 2026</span>
              <span className="text-green-600">EXITOSO</span>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};