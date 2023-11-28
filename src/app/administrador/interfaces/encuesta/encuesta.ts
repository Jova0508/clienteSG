export interface EncuestaAdd {
  nombre: string;
  url: string;
  fechaAplicacion: Date;
  fechaCierre: Date;
}

export interface Encuesta {
  id: number;
  nombre: string;
  url: string;
  fechaAplicacion: Date;
  fechaCierre: Date;
}
