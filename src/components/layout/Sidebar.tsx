import { useState } from 'react';
import { useNavigate, useLocation } from 'react-router-dom';
import { ChevronDown, ChevronRight, Car, Settings2, Package, LayoutDashboard, FileSpreadsheet, BarChart3, Warehouse, Wallet, FileUp } from 'lucide-react';

export const Sidebar = () => {
  const [openMenus, setOpenMenus] = useState<{ [key: string]: boolean }>({ vehiculos: true, 
  repuestos: true });
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
        active 
  ? 'bg-white/20 text-white shadow-lg backdrop-blur-sm' 
  : 'text-blue-100/80 hover:bg-white/10 hover:text-white'
      }`} 
    >
      <Icon size={18} />
      <span>{label}</span>
    </button>
  );

  return (
  <aside className="w-64 bg-[#005696] text-white h-screen p-4 flex flex-col border-r border-[#004a82]">
    
    <div className="mb-10 flex flex-col items-center justify-center text-center">
  {/* Contenedor Circular */}
  <div className="w-20 h-20 bg-white rounded-full flex items-center justify-center shadow-xl mb-4 overflow-hidden border-4 border-white/20">
    <img 
      src="https://assets.nexusti.uk/crosland1.jpg" 
      alt="Crosland Logo" 
      className="w-full h-full object-contain scale-125" 
    />
  </div>
  
  {/* Textos */}
  <div>
    <h1 className="text-2xl font-black tracking-tighter text-white leading-none">CROSLAND</h1>
    <p className="text-[11px] text-blue-200/70 uppercase font-bold tracking-[0.2em] mt-1">
      Torre de Control
    </p>
  </div>
</div>

      <nav className="flex-1 space-y-5">
        {/* SECCIÓN VEHÍCULOS */}
        <div>
          <button 
            onClick={() => toggleMenu('vehiculos')}
            className="w-full flex items-center justify-between p-2 text-white/90 hover:text-white"
          >
            <div className="flex items-center gap-3 font-bold text-xs uppercase tracking-widest">
              <Car size={16} className="text-blue-400" />
              <span>Vehículos</span>
            </div>
            {openMenus.vehiculos ? <ChevronDown size={14} /> : <ChevronRight size={14} />}
          </button>

          {openMenus.vehiculos && (
            <div className="mt-1 ml-4 border-l border-white/20 pl-2 space-y-1">
              <NavItem label="Dashboard" icon={LayoutDashboard} path="/vehiculos/dashboard" />
              <NavItem label="Gestión Pedido" icon={FileSpreadsheet} path="/vehiculos/gestion" />
              <NavItem label="Contabilidad" icon={Wallet} path="/vehiculos/contabilidad" />
              <NavItem label="Almacén" icon={Warehouse} path="/vehiculos/almacen" />
              <NavItem label="Reportes" icon={BarChart3} path="/vehiculos/reportes" />
              <NavItem label="Carga" icon={FileUp} path="/vehiculos/carga" />
            </div>
          )}
        </div>

        {/* SECCIÓN REPUESTOS */}
        <div>
          <button 
            onClick={() => toggleMenu('repuestos')}
            className="w-full flex items-center justify-between p-2 text-white/90 hover:text-white"
          >
            <div className="flex items-center gap-3 font-bold text-xs uppercase tracking-widest">
              <Package size={16} className="text-green-400" />
              <span>Repuestos</span>
            </div>
            {openMenus.repuestos ? <ChevronDown size={14} /> : <ChevronRight size={14} />}
          </button>

          {openMenus.repuestos && (
            <div className="mt-1 ml-4 border-l border-white/20 pl-2 space-y-1">
              <NavItem label="Dashboard" icon={LayoutDashboard} path="/repuestos/dashboard" />
              <NavItem label="Gestión Pedido" icon={FileSpreadsheet} path="/repuestos/gestion" />
              <NavItem label="Contabilidad" icon={Wallet} path="/repuestos/contabilidad" />
              <NavItem label="Almacén" icon={Warehouse} path="/repuestos/almacen" />
              <NavItem label="Reportes" icon={BarChart3} path="/repuestos/reportes" />
              <NavItem label="Carga" icon={FileUp} path="/repuestos/carga" />
            </div>
          )}
        </div>
      </nav>

      <div className="pt-4 border-t border-white/20">
        <NavItem label="Configuración" icon={Settings2} path="/config" active={isActive('/config')} />
      </div>
    </aside>
  );
};