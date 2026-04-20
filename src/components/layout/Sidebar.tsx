import { useState } from 'react';
import { useNavigate, useLocation } from 'react-router-dom';
import { ChevronDown, ChevronRight, Car, Settings2, Package, LayoutDashboard, FileSpreadsheet } from 'lucide-react';

export const Sidebar = () => {
  const [openMenus, setOpenMenus] = useState<{ [key: string]: boolean }>({ vehiculos: true });
  const navigate = useNavigate();
  const location = useLocation();

  const toggleMenu = (menu: string) => {
    setOpenMenus(prev => ({ ...prev, [menu]: !prev[menu] }));
  };

  const isActive = (path: string) => location.pathname === path;

  const NavItem = ({ label, icon: Icon, path, active }: any) => (
    <button
      onClick={() => navigate(path)}
      className={`w-full flex items-center gap-3 px-4 py-2 text-sm rounded-lg transition-all ${
        active ? 'bg-blue-600 text-white shadow-lg shadow-blue-900/20' : 'text-slate-400 hover:bg-slate-800 hover:text-slate-100'
      }`}
    >
      <Icon size={18} />
      <span>{label}</span>
    </button>
  );

  return (
    <aside className="w-64 bg-[#0B1120] text-white h-screen p-4 flex flex-col border-r border-slate-800">
      <div className="mb-8 px-2">
        <h1 className="text-xl font-black tracking-tighter text-blue-500">MONITOR JS</h1>
        <p className="text-[10px] text-slate-500 uppercase font-bold">Torre de Control</p>
      </div>

      <nav className="flex-1 space-y-4">
        {/* SECCIÓN VEHÍCULOS */}
        <div>
          <button 
            onClick={() => toggleMenu('vehiculos')}
            className="w-full flex items-center justify-between p-2 text-slate-300 hover:text-white"
          >
            <div className="flex items-center gap-3 font-bold text-xs uppercase tracking-widest">
              <Car size={16} className="text-blue-400" />
              <span>Vehículos</span>
            </div>
            {openMenus.vehiculos ? <ChevronDown size={14} /> : <ChevronRight size={14} />}
          </button>

          {openMenus.vehiculos && (
            <div className="mt-1 ml-4 border-l border-slate-800 pl-2 space-y-1">
              <NavItem label="Dashboard" icon={LayoutDashboard} path="/vehiculos/dashboard" active={isActive('/vehiculos/dashboard')} />
              <NavItem label="Gestión Solped" icon={FileSpreadsheet} path="/vehiculos/solped" active={isActive('/vehiculos/solped')} />
            </div>
          )}
        </div>

        {/* SECCIÓN REPUESTOS */}
        <div>
          <button 
            onClick={() => toggleMenu('repuestos')}
            className="w-full flex items-center justify-between p-2 text-slate-300 hover:text-white"
          >
            <div className="flex items-center gap-3 font-bold text-xs uppercase tracking-widest">
              <Package size={16} className="text-green-400" />
              <span>Repuestos</span>
            </div>
            {openMenus.repuestos ? <ChevronDown size={14} /> : <ChevronRight size={14} />}
          </button>

          {openMenus.repuestos && (
            <div className="mt-1 ml-4 border-l border-slate-800 pl-2 space-y-1">
              <NavItem label="Dashboard" icon={LayoutDashboard} path="/repuestos/dashboard" active={isActive('/repuestos/dashboard')} />
            </div>
          )}
        </div>
      </nav>

      <div className="pt-4 border-t border-slate-800">
        <NavItem label="Configuración" icon={Settings2} path="/config" active={isActive('/config')} />
      </div>
    </aside>
  );
};