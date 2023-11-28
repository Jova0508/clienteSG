import { Injectable, inject } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { environment } from '../../../environments/environments';
import { Observable } from 'rxjs';
import { FechaDeGrado, FechaDeGradoAdd, RespuestaFechaDeGrado } from '../interfaces/fecha-de-grado/fecha-de-grado';

@Injectable({
  providedIn: 'root',
})
export class FechaDeGradoService {
  private readonly baseUrl: string = environment.baseUrl;
  private http = inject(HttpClient);
  

  listarFechasDeGradosService(): Observable<RespuestaFechaDeGrado> {
    const url = `${this.baseUrl}/FechaDeGrado/ListarFechasDeGrados`;
    return this.http.get<RespuestaFechaDeGrado>(url);
  }

  ObtenerFechaDeGradoService(idFechaDeGrado : number): Observable<RespuestaFechaDeGrado> {
    console.log(idFechaDeGrado)
    const url = `${this.baseUrl}/FechaDeGrado/ObtenerFechaDeGrado`;
    return this.http.get<RespuestaFechaDeGrado>(url, { params: { idFechaDeGrado } });
  }

  EliminarFechaDeGradoService(idFechaDeGrado : number): Observable<RespuestaFechaDeGrado> {
    const url = `${this.baseUrl}/FechaDeGrado/EliminarFechaDeGrado`;
    return this.http.delete<RespuestaFechaDeGrado>(url, { params: { idFechaDeGrado } });
  }

  EditarFechaDeGradoService(fechaDeGrado : FechaDeGrado): Observable<RespuestaFechaDeGrado> {
    const url = `${this.baseUrl}/FechaDeGrado/EditarFechaDeGrado`;
    return this.http.put<RespuestaFechaDeGrado>(url, fechaDeGrado );
  }

  AgregarFechaDeGradoService(fechaDeGradoAdd : FechaDeGradoAdd): Observable<RespuestaFechaDeGrado> {
        const url = `${this.baseUrl}/FechaDeGrado/AgregarFechaDeGrado`;
    return this.http.post<RespuestaFechaDeGrado>(url, fechaDeGradoAdd );
  }
  
}
