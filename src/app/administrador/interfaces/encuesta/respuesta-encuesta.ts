import { Encuesta } from "./encuesta";

export interface RespuestaEncuesta {
    exitoso: boolean;
    mensaje: string;
    resultadoList: Encuesta[];
    resultadoObject: Encuesta;
  }