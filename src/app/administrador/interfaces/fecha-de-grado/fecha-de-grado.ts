export interface FechaDeGrado {
  id: number;
  fecha: Date;
}

export interface FechaDeGradoAdd {
  fecha: Date;
}

export interface RespuestaFechaDeGrado {
  exitoso: boolean;
  mensaje: string;
  resultadoList: FechaDeGrado[];
  resultadoObject: FechaDeGrado;
}