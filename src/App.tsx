import { BrowserRouter as Router, Routes, Route, Navigate } from 'react-router-dom';
import { Sidebar } from './components/layout/Sidebar';

// VEHÍCULOS
import { DashboardVehiculos } from './pages/vehiculos/DashboardVehiculos';
import { SolpedVehiculos } from './pages/vehiculos/SolpedVehiculos';
import { ContabilidadVehiculos } from './pages/vehiculos/ContabilidadVehiculos';
import { AlmacenVehiculos } from './pages/vehiculos/AlmacenVehiculos';
import { ReportesVehiculos } from './pages/vehiculos/ReportesVehiculos';
import { CargaVehiculos } from './pages/vehiculos/CargaVehiculos';

// REPUESTOS
import { DashboardRepuestos } from './pages/repuestos/DashboardRepuestos';
import { SolpedRepuestos } from './pages/repuestos/SolpedRepuestos';
import { ContabilidadRepuestos } from './pages/repuestos/ContabilidadRepuestos';
import { AlmacenRepuestos } from './pages/repuestos/AlmacenRepuestos';
import { ReportesRepuestos } from './pages/repuestos/ReportesRepuestos';
import { CargaRepuestos } from './pages/repuestos/CargaRepuestos';

function App() {
  return (
    <Router>
      <div className="flex h-screen bg-slate-100 font-sans">
        {/* Tu Sidebar con la navegación corregida */}
        <Sidebar />
        
        <main className="flex-1 overflow-y-auto">
          <Routes>
            {/* Redirección por defecto al entrar a la app */}
            <Route path="/" element={<Navigate to="/vehiculos/dashboard" />} />
            
            {/* --- RUTAS SECCIÓN VEHÍCULOS --- */}
            <Route path="/vehiculos/dashboard" element={<DashboardVehiculos />} />
            <Route path="/vehiculos/gestion" element={<SolpedVehiculos />} />
            <Route path="/vehiculos/contabilidad" element={<ContabilidadVehiculos />} />
            <Route path="/vehiculos/almacen" element={<AlmacenVehiculos />} />
            <Route path="/vehiculos/reportes" element={<ReportesVehiculos />} />
            <Route path="/vehiculos/carga" element={<CargaVehiculos />} />

            {/* --- RUTAS SECCIÓN REPUESTOS --- */}
            <Route path="/repuestos/dashboard" element={<DashboardRepuestos />} />
            <Route path="/repuestos/gestion" element={<SolpedRepuestos />} />
            <Route path="/repuestos/contabilidad" element={<ContabilidadRepuestos />} />
            <Route path="/repuestos/almacen" element={<AlmacenRepuestos />} />
            <Route path="/repuestos/reportes" element={<ReportesRepuestos />} />
            <Route path="/repuestos/carga" element={<CargaRepuestos />} />
            
            {/* Fallback para cualquier ruta inexistente */}
            <Route path="*" element={<Navigate to="/vehiculos/dashboard" />} />
          </Routes>
        </main>
      </div>
    </Router>
  );
}

export default App;