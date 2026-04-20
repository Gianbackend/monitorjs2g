import { UploadCloud } from 'lucide-react';

export const CargaRepuestos = () => {
  return (
    <div className="p-6">
      <h2 className="text-2xl font-bold text-slate-800 italic">Carga Masiva Repuestos</h2>
      <div className="mt-6 bg-blue-600 p-10 rounded-2xl text-white flex justify-between items-center">
        <div>
          <h3 className="text-xl font-bold">Importación por SKU</h3>
          <p className="text-blue-100 opacity-80">Sube archivos masivos de más de 500 líneas.</p>
        </div>
        <button className="bg-white text-blue-600 px-6 py-2 rounded-lg font-bold shadow-lg">
          Seleccionar Excel
        </button>
      </div>
    </div>
  );
};