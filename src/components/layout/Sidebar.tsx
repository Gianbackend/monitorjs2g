import { useState } from 'react';
import { ChevronDown, ChevronRight, Package, BarChart3, Settings } from 'lucide-react';

export const Sidebar = () => {
  const [openMenus, setOpenMenus] = useState<{ [key: string]: boolean }>({
    importaciones: true, // Por defecto abierto
  });

  const toggleMenu = (menu: string) => {
    setOpenMenus(prev => ({ ...prev, [menu]: !prev[menu] }));
  };

  return (
    <aside className="w-64 bg-slate-900 text-white h-screen p-4 flex flex-col">
      <div className="mb-8 px-2 font-bold text-xl tracking-tight">MONITOR JS</div>

      <nav className="flex-1 space-y-2">
        {/* Sección Desplegable: Importaciones */}
        <div>
          <button 
            onClick={() => toggleMenu('importaciones')}
            className="w-full flex items-center justify-between p-2 hover:bg-slate-800 rounded-lg transition-colors"
          >
            <div className="flex items-center gap-3">
              <Package size={20} className="text-blue-400" />
              <span className="font-medium">Importaciones</span>
            </div>
            {openMenus.importaciones ? <ChevronDown size={16} /> : <ChevronRight size={16} />}
          </button>

          {openMenus.importaciones && (
            <div className="ml-9 mt-2 space-y-1 text-sm text-slate-400">
              <div className="p-2 hover:text-white cursor-pointer">Monitor Activo</div>
              <div className="p-2 hover:text-white cursor-pointer">Historial</div>
              <div className="p-2 hover:text-white cursor-pointer">Costeo de Importación</div>
            </div>
          )}
        </div>

        {/* Reportes */}
        <div className="flex items-center gap-3 p-2 hover:bg-slate-800 rounded-lg cursor-pointer">
          <BarChart3 size={20} className="text-slate-400" />
          <span className="font-medium">Reportes</span>
        </div>

        {/* Configuración */}
        <div className="flex items-center gap-3 p-2 hover:bg-slate-800 rounded-lg cursor-pointer">
          <Settings size={20} className="text-slate-400" />
          <span className="font-medium">Configuración</span>
        </div>
      </nav>
    </aside>
  );
};