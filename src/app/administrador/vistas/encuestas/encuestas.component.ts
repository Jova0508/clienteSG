import { Component, OnInit, inject } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RespuestaEncuesta } from '../../interfaces/encuesta/respuesta-encuesta';
import { EncuestaService } from '../../servicios/encuesta.service';
import { Encuesta, EncuestaAdd } from '../../interfaces/encuesta/encuesta';
import { catchError, of, tap } from 'rxjs';

@Component({
  selector: 'app-encuestas',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './encuestas.component.html',
  styleUrl: './encuestas.component.css'
})
export default class EncuestasComponent implements OnInit{
  
  encuetas?: RespuestaEncuesta  ;
  private encuestaService= inject(EncuestaService)


  nuevaEncuesta: EncuestaAdd = {
    nombre: 'Nombre de la encuesta',
    url: 'https://ejemplo.com/encuesta',
    fechaAplicacion: new Date('2023-11-22'), // Puedes crear una nueva fecha con el formato deseado
    fechaCierre: new Date('2023-12-22') // Puedes crear una nueva fecha con el formato deseado
  };

  editEncuesta: Encuesta = {
    id: 2 ,
    nombre: 'Nombre de la encuesta editada ',
    url: 'https://ejemplo.com/encuesta',
    fechaAplicacion: new Date('2023-11-22'), // Puedes crear una nueva fecha con el formato deseado
    fechaCierre: new Date('2023-12-22') // Puedes crear una nueva fecha con el formato deseado
  };



  ngOnInit(): void {
    //this.obtenerEncuestas();
    //this.obtenerEncuesta(1)
    //this.eliminarEncuesta(1)
    //this.editarEncuesta(this.editEncuesta)
    //this.agregarEncuesta(this.nuevaEncuesta);
  }

  obtenerEncuestas() {
    this.encuestaService
      .listarEncuestaService()
      .pipe(
        tap((data: RespuestaEncuesta) => {
          this.encuetas = data;
          console.log(this.encuetas);
        }),
        catchError((error) => {
          console.error('Error al obtener encuestas:', error);
          return of(null);
        })
      )
      .subscribe();
  }

  obtenerEncuesta(idEncuesta: number) {
    this.encuestaService
      .ObtenerEncuestaService(idEncuesta)
      .pipe(
        tap((data: RespuestaEncuesta) => {
          this.encuetas = data;
          console.log(this.encuetas);
        }),
        catchError((error) => {
          console.error('Error al obtener encuesta:', error);
          return of(null);
        })
      )
      .subscribe();
  }

  eliminarEncuesta(idEncuesta: number) {
    this.encuestaService
      .EliminarEncuestaService(idEncuesta)
      .pipe(
        tap((data: RespuestaEncuesta) => {
          this.encuetas = data;
          console.log(this.encuetas);
        }),
        catchError((error) => {
          console.error('Error al eliminar encuesta:', error);
          return of(null);
        })
      )
      .subscribe();
  }

  editarEncuesta(encuesta: Encuesta) {
    this.encuestaService
      .EditarEncuestaService(encuesta)
      .pipe(
        tap((data: RespuestaEncuesta) => {
          this.encuetas = data;
          console.log(this.encuetas);
        }),
        catchError((error) => {
          console.error('Error al editar encuesta:', error);
          return of(null);
        })
      )
      .subscribe();
  }

  agregarEncuesta(encuestaAdd: EncuestaAdd) {
    this.encuestaService
      .AgregarEncuestaService(encuestaAdd)
      .pipe(
        tap((data: RespuestaEncuesta) => {
          this.encuetas = data;
          console.log(this.encuetas);
        }),
        catchError((error) => {
          console.error('Error al guardar encuesta:', error);
          return of(null);
        })
      )
      .subscribe();
  }
}
