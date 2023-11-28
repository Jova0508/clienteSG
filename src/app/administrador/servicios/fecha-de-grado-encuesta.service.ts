
import { Injectable, inject } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { environment } from '../../../environments/environments';
import { Observable } from 'rxjs';
import { FechaEncuestaAdd, FechaEncuestaEdit, RespuestaFechaEncuesta } from '../interfaces/fecha-de-grado-encuesta/fecha-de-grado-encuesta';

@Injectable({
  providedIn: 'root',
})
export class FechaDeGradoEncuestaService {
  private readonly baseUrl: string = environment.baseUrl;
  private http = inject(HttpClient);
  

  listarFechasEncuestasService(): Observable<RespuestaFechaEncuesta> {
    const url = `${this.baseUrl}/FechaEncuesta/ListarFechasEncuestas`;
    return this.http.get<RespuestaFechaEncuesta>(url);
  }

  ObtenerFechaEncuestaService(idFechaEncuesta : number): Observable<RespuestaFechaEncuesta> {
    const url = `${this.baseUrl}/FechaEncuesta/ObtenerFachaEncuesta`;
    return this.http.get<RespuestaFechaEncuesta>(url, { params: { idFechaEncuesta } });
  }

  EliminarFechaEncuestaService(idFechaEncuesta : number): Observable<RespuestaFechaEncuesta> {
    const url = `${this.baseUrl}/FechaEncuesta/EliminarFechaEncuesta`;
    return this.http.delete<RespuestaFechaEncuesta>(url, { params: { idFechaEncuesta } });
  }

  EditarFechaEncuestaService(fechaEncuesta : FechaEncuestaEdit): Observable<RespuestaFechaEncuesta> {
    const url = `${this.baseUrl}/FechaEncuesta/EditarFechaEncuesta`;
    return this.http.put<RespuestaFechaEncuesta>(url, fechaEncuesta );
  }

  AgregarFechaEncuestaService(fechaEncuesta : FechaEncuestaAdd): Observable<RespuestaFechaEncuesta> {
        const url = `${this.baseUrl}/FechaEncuesta/AgregarFechaEncuesta`;
    return this.http.post<RespuestaFechaEncuesta>(url, fechaEncuesta );
  }
  
}
