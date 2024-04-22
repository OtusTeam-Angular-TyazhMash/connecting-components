export interface Machine {
    id: number;
    name: string;
    lastServiceDate: Date;
    serviceDone: boolean;
  }
  
  export const MACHINES = [
    {id: 1, name: 'ГАЗ-22107 «Соболь» (бортовой)', lastServiceDate: new Date(), serviceDone: false},
    {id: 2, name: 'ВИС-2347 (пикап)', lastServiceDate: new Date(), serviceDone: true},
    {id: 3, name: 'ЗИЛ 433360 508.10', lastServiceDate: new Date(), serviceDone: false}
  ];
  