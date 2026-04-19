export interface PedidoImportacion {
  id: number;
  creado: string;
  codigo_importacion: string;
  pedido_sap: string;
  monto_total: number;
  fecha_eta: string;
  estado: "Zarpado" | "En Puerto" | "Aduanas" | "Entregado";
  pais_origen: string;
  proveedor: string;
  transporte: "Marítimo" | "Aéreo" | "Terrestre"; // Mantenlo para la lógica de iconos
}