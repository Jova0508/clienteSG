import { Injectable, inject } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { environment } from '../../../environments/environments';
import { Observable } from 'rxjs';
import { RespuestaEncuesta } from '../interfaces/encuesta/respuesta-encuesta';
import { Encuesta, EncuestaAdd } from '../interfaces/encuesta/encuesta';

@Injectable({
  providedIn: 'root',
})
export class EncuestaService {
  private readonly baseUrl: string = environment.baseUrl;
  private http = inject(HttpClient);
  

  listarEncuestaService(): Observable<RespuestaEncuesta> {
    const url = `${this.baseUrl}/Encuesta/ListarEncuestas`;
    return this.http.get<RespuestaEncuesta>(url);
  }

  ObtenerEncuestaService(idEncuesta : number): Observable<RespuestaEncuesta> {
    const url = `${this.baseUrl}/Encuesta/ObtenerEncuesta`;
    return this.http.get<RespuestaEncuesta>(url, { params: { idEncuesta } });
  }

  EliminarEncuestaService(idEncuesta : number): Observable<RespuestaEncuesta> {
    const url = `${this.baseUrl}/Encuesta/EliminarEncuesta`;
    return this.http.delete<RespuestaEncuesta>(url, { params: { idEncuesta } });
  }

  EditarEncuestaService(encuesta : Encuesta): Observable<RespuestaEncuesta> {
    const url = `${this.baseUrl}/Encuesta/EditarEncuesta`;
    return this.http.put<RespuestaEncuesta>(url, encuesta );
  }

  AgregarEncuestaService(encuestaAdd : EncuestaAdd): Observable<RespuestaEncuesta> {
        const url = `${this.baseUrl}/Encuesta/AgregarEncuesta`;
    return this.http.post<RespuestaEncuesta>(url, encuestaAdd );
  }
  
}
