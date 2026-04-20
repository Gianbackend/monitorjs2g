import { BrowserRouter as Router, Routes, Route, Navigate } from 'react-router-dom';
import { Sidebar } from './components/layout/Sidebar'; // Ruta corregida según tu imagen
import { DashboardVehiculos } from './pages/vehiculos/DashboardVehiculos';
import { SolpedVehiculos } from './pages/vehiculos/SolpedVehiculos';
import { DashboardRepuestos } from './pages/repuestos/DashboardRepuestos';
import { CargaRepuestos } from './pages/repuestos/CargaRepuestos';

function App() {
  return (
    <Router>
      <div className="flex h-screen bg-slate-100 font-sans">
        <Sidebar />
        <main className="flex-1 overflow-y-auto">
          <Routes>
            <Route path="/" element={<Navigate to="/vehiculos/dashboard" />} />
            <Route path="/vehiculos/dashboard" element={<DashboardVehiculos />} />
            <Route path="/vehiculos/solped" element={<SolpedVehiculos />} />
            <Route path="/repuestos/dashboard" element={<DashboardRepuestos />} />
            <Route path="/repuestos/carga" element={<CargaRepuestos />} />
          </Routes>
        </main>
      </div>
    </Router>
  );
}

export default App;