import { useState, useEffect } from 'react';
import type { PedidoImportacion } from '../types/models.types';

export const useFetchImportaciones = () => {
  const [pedidos, setPedidos] = useState<PedidoImportacion[]>([]);
  const [loading, setLoading] = useState<boolean>(true);

  useEffect(() => {
    const fetchPedidos = async () => {
      setLoading(true);
      // Simulación de latencia de red
      await new Promise(resolve => setTimeout(resolve, 1000));
      
      const mock: PedidoImportacion[] = [
  {
    id: 1,
    creado: '2026-04-10',
    codigo_importacion: 'IMP-2026-001',
    pedido_sap: '4500010020',
    monto_total: 25400.50,
    fecha_eta: '2026-05-15',
    estado: 'Zarpado',
    pais_origen: 'China',
    proveedor: 'Crosland Global Partner',
    transporte: 'Marítimo'
  },
  {
    id: 2,
    creado: '2026-04-12',
    codigo_importacion: 'IMP-2026-005',
    pedido_sap: '4500010045',
    monto_total: 12800.00,
    fecha_eta: '2026-04-22',
    estado: 'Aduanas',
    pais_origen: 'USA',
    proveedor: 'Tech Parts SA',
    transporte: 'Aéreo'
  }
];
      
      setPedidos(mock);
      setLoading(false);
    };

    fetchPedidos();
  }, []);

  return { pedidos, loading };
};