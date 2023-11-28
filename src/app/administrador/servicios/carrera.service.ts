import { Injectable, inject } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { environment } from '../../../environments/environments';
import { RespuestaCarrera } from '../interfaces/carrera/respuesta-carrera';
import { Observable } from 'rxjs';
import { Carrera, CarreraAdd } from '../interfaces/carrera/carrera';

@Injectable({
  providedIn: 'root',
})
export class CarreraService {
  private readonly baseUrl: string = environment.baseUrl;
  private http = inject(HttpClient);
  

  listarCarrerasService(): Observable<RespuestaCarrera> {
    const url = `${this.baseUrl}/Carrera/ListarCarreras`;
    return this.http.get<RespuestaCarrera>(url);
  }

  ObtenerCarreraService(idCarrera : number): Observable<RespuestaCarrera> {
    const url = `${this.baseUrl}/Carrera/ObtenerCarrera`;
    return this.http.get<RespuestaCarrera>(url, { params: { idCarrera } });
  }

  EliminarCarreraService(idCarrera : number): Observable<RespuestaCarrera> {
    const url = `${this.baseUrl}/Carrera/EliminarCarrera`;
    return this.http.delete<RespuestaCarrera>(url, { params: { idCarrera } });
  }

  EditarCarreraService(carrera : Carrera): Observable<RespuestaCarrera> {
    const url = `${this.baseUrl}/Carrera/EditarCarrera`;
    return this.http.put<RespuestaCarrera>(url, carrera );
  }

  AgregarCarreraService(carreraAdd : CarreraAdd): Observable<RespuestaCarrera> {
        const url = `${this.baseUrl}/Carrera/AgregarCarrera`;
    return this.http.post<RespuestaCarrera>(url, carreraAdd );
  }
  
}
