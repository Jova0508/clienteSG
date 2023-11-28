import { Component, OnInit, inject } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FechaEncuestaAdd, FechaEncuestaEdit, RespuestaFechaEncuesta } from '../../interfaces/fecha-de-grado-encuesta/fecha-de-grado-encuesta';
import { FechaDeGradoEncuestaService } from '../../servicios/fecha-de-grado-encuesta.service';
import { catchError, of, tap } from 'rxjs';

@Component({
  selector: 'app-fechas-de-grados-encuestas',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './fechas-de-grados-encuestas.component.html',
  styleUrl: './fechas-de-grados-encuestas.component.css'
})
export default class FechasDeGradosEncuestasComponent  implements OnInit{
  fechaEncuesta?: RespuestaFechaEncuesta;
  private fechaEncuestaService = inject(FechaDeGradoEncuestaService);
  nuevaFechaEncuesta: FechaEncuestaAdd = {
    idFechaDeGrado: 1,
    idEncuesta: 3
  };

  editadaFechaEncuesta: FechaEncuestaEdit = {
    id: 1,
    idFechaDeGrado: 1,
    idEncuesta: 3
  };

  ngOnInit(): void {
    //this.obtenerFechasEncuestas();
    //this.obtenerFechaEncuesta(2  )
    //this.eliminarFechaEncuesta(1)
    this.editarFechaEncuesta(this.editadaFechaEncuesta)
    //this.agregarFechaEncuesta(this.nuevaFechaEncuesta);
  }

  obtenerFechasEncuestas() {
    this.fechaEncuestaService
      .listarFechasEncuestasService()
      .pipe(
        tap((data: RespuestaFechaEncuesta) => {
          this.fechaEncuesta = data;
          console.log(this.fechaEncuesta);
        }),
        catchError((error) => {
          console.error('Error al obtener encuestas:', error);
          return of(null);
        })
      )
      .subscribe();
  }

  obtenerFechaEncuesta(idEncuesta: number) {
    this.fechaEncuestaService
      .ObtenerFechaEncuestaService(idEncuesta)
      .pipe(
        tap((data: RespuestaFechaEncuesta) => {
          this.fechaEncuesta = data;
          console.log(this.fechaEncuesta);
        }),
        catchError((error) => {
          console.error('Error al obtener encuesta:', error);
          return of(null);
        })
      )
      .subscribe();
  }

  eliminarFechaEncuesta(idEncuesta: number) {
    this.fechaEncuestaService
      .EliminarFechaEncuestaService(idEncuesta)
      .pipe(
        tap((data: RespuestaFechaEncuesta) => {
          this.fechaEncuesta = data;
          console.log(this.fechaEncuesta);
        }),
        catchError((error) => {
          console.error('Error al eliminar encuesta:', error);
          return of(null);
        })
      )
      .subscribe();
  }

  editarFechaEncuesta(fechaEncuestaEdit: FechaEncuestaEdit) {
    this.fechaEncuestaService
      .EditarFechaEncuestaService(fechaEncuestaEdit)
      .pipe(
        tap((data: RespuestaFechaEncuesta) => {
          this.fechaEncuesta = data;
          console.log(this.fechaEncuesta);
        }),
        catchError((error) => {
          console.error('Error al editar encuesta:', error);
          return of(null);
        })
      )
      .subscribe();
  }

  agregarFechaEncuesta(fechaEncuestaAdd: FechaEncuestaAdd) {
    this.fechaEncuestaService
      .AgregarFechaEncuestaService(fechaEncuestaAdd)
      .pipe(
        tap((data: RespuestaFechaEncuesta) => {
          this.fechaEncuesta = data;
          console.log(this.fechaEncuesta);
        }),
        catchError((error) => {
          console.error('Error al guardar encuesta:', error);
          return of(null);
        })
      )
      .subscribe();
  }
}
