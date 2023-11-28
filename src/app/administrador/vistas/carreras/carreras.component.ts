import { Component, OnInit, inject } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CarreraService } from '../../servicios/carrera.service';
import { RespuestaCarrera } from '../../interfaces/carrera/respuesta-carrera';
import { catchError, of, tap } from 'rxjs';
import { Carrera, CarreraAdd } from '../../interfaces/carrera/carrera';
import { RouteConfigLoadEnd } from '@angular/router';

@Component({
  selector: 'app-carreras',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './carreras.component.html',
  styleUrl: './carreras.component.css',
})
export default class CarrerasComponent implements OnInit {
  carreras?: RespuestaCarrera;
  private carreraService = inject(CarreraService);

  carrera: Carrera = {
    id: 2,
    nombre: 'angular2',
  };
  carreraAdd: CarreraAdd = {
    nombre: 'angular22',
  };
  nombreCarrera: string = 'hola muno';

  ngOnInit(): void {
    this.obtenerCarreras();
    // this.obtenerCarrera(1)
    // this.eliminarCarrera(1)
    // this.editarCarrera(this.carrera)
    //this.agregarCarrera(this.carreraAdd);
  }

  obtenerCarreras() {
    this.carreraService
      .listarCarrerasService()
      .pipe(
        tap((data: RespuestaCarrera) => {
          this.carreras = data;
          console.log(this.carreras);
        }),
        catchError((error) => {
          console.error('Error al obtener carreras:', error);
          return of(null);
        })
      )
      .subscribe();
  }

  obtenerCarrera(idCarrera: number) {
    this.carreraService
      .ObtenerCarreraService(idCarrera)
      .pipe(
        tap((data: RespuestaCarrera) => {
          this.carreras = data;
          console.log(this.carreras);
        }),
        catchError((error) => {
          console.error('Error al obtener carrera:', error);
          return of(null);
        })
      )
      .subscribe();
  }

  eliminarCarrera(idCarrera: number) {
    this.carreraService
      .EliminarCarreraService(idCarrera)
      .pipe(
        tap((data: RespuestaCarrera) => {
          this.carreras = data;
          console.log(this.carreras);
        }),
        catchError((error) => {
          console.error('Error al eliminar carrera:', error);
          return of(null);
        })
      )
      .subscribe();
  }

  editarCarrera(carrera: Carrera) {
    this.carreraService
      .EditarCarreraService(carrera)
      .pipe(
        tap((data: RespuestaCarrera) => {
          this.carreras = data;
          console.log(this.carreras);
        }),
        catchError((error) => {
          console.error('Error al editar carrera:', error);
          return of(null);
        })
      )
      .subscribe();
  }

  agregarCarrera(carreraAdd: CarreraAdd) {
    this.carreraService
      .AgregarCarreraService(carreraAdd)
      .pipe(
        tap((data: RespuestaCarrera) => {
          this.carreras = data;
          console.log(this.carreras);
        }),
        catchError((error) => {
          console.error('Error al guardar carrera:', error);
          return of(null);
        })
      )
      .subscribe();
  }
}
