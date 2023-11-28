import { Carrera } from './carrera';

export interface RespuestaCarrera {
  exitoso: boolean;
  mensaje: string;
  resultadoList: Carrera[];
  resultadoObject: Carrera;
}
