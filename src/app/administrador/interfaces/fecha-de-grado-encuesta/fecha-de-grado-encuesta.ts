export interface FechaEncuestaAdd {
  idFechaDeGrado: number;
  idEncuesta: number;
}

export interface FechaEncuestaEdit {
  id: number;
  idFechaDeGrado: number;
  idEncuesta: number;
}

export interface FechaEncuesta {
  id: number;
  nombre: string;
  url: string;
  fechaAplicacion: Date;
  fechaCierre: Date;
  fecha: Date;
}

export interface RespuestaFechaEncuesta {
  exitoso: boolean;
  mensaje: string;
  resultadoList: FechaEncuesta[];
  resultadoObject: FechaEncuesta;
}
