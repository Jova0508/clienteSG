import { Component, OnInit, inject } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FechaDeGradoService } from '../../servicios/fecha-de-grado.service';
import { catchError, of, tap } from 'rxjs';
import { FechaDeGrado, FechaDeGradoAdd, RespuestaFechaDeGrado } from '../../interfaces/fecha-de-grado/fecha-de-grado';

@Component({
  selector: 'app-fecha-de-grado',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './fecha-de-grado.component.html',
  styleUrl: './fecha-de-grado.component.css'
})
export default class FechaDeGradoComponent implements OnInit {
  
  fechaDeGrado?: RespuestaFechaDeGrado;
  private fechaDeGradoService = inject(FechaDeGradoService);

  fechaDeGradoedit: FechaDeGrado = {
    id: 1,
    fecha: new Date()
  };
  
  
  fechaDeGradoAdd: FechaDeGradoAdd = {
    fecha: new Date()
  };
  ngOnInit(): void {
    //this.obtenerFechasDeGrados();
    //this.obtenerFechaDeGrado(6)
    //this.eliminarFechaDeGrado(1)
    //this.editarFechaDeGrado(this.fechaDeGradoedit)
   // this.agregarFechaDeGrado(this.fechaDeGradoAdd);
  }


  obtenerFechasDeGrados() {
    this.fechaDeGradoService
      .listarFechasDeGradosService()
      .pipe(
        tap((data: RespuestaFechaDeGrado) => {
          this.fechaDeGrado = data;
          console.log(this.fechaDeGrado);
        }),
        catchError((error) => {
          console.error('Error al obtener fechas de grados:', error);
          return of(null);
        })
      )
      .subscribe();
  }

  obtenerFechaDeGrado(idFechaDeGrado: number) {
    this.fechaDeGradoService
      .ObtenerFechaDeGradoService(idFechaDeGrado)
      .pipe(
        tap((data: RespuestaFechaDeGrado) => {
          this.fechaDeGrado = data;
          console.log(this.fechaDeGrado);
        }),
        catchError((error) => {
          console.error('Error al obtener fecha de grado:', error);
          return of(null);
        })
      )
      .subscribe();
  }

  eliminarFechaDeGrado(idFechaDeGrado: number) {
    this.fechaDeGradoService
      .EliminarFechaDeGradoService(idFechaDeGrado)
      .pipe(
        tap((data: RespuestaFechaDeGrado) => {
          this.fechaDeGrado = data;
          console.log(this.fechaDeGrado);
        }),
        catchError((error) => {
          console.error('Error al obtener fecha de grado:', error);
          return of(null);
        })
      )
      .subscribe();
  }

  editarFechaDeGrado(fechaDeGrado: FechaDeGrado) {
    this.fechaDeGradoService
      .EditarFechaDeGradoService(fechaDeGrado)
      .pipe(
        tap((data: RespuestaFechaDeGrado) => {
          this.fechaDeGrado = data;
          console.log(this.fechaDeGrado);
        }),
        catchError((error) => {
          console.error('Error al editar fecha de grado:', error);
          return of(null);
        })
      )
      .subscribe();
  }

  agregarFechaDeGrado(fechaDeGradoAdd: FechaDeGradoAdd) {
    this.fechaDeGradoService
      .AgregarFechaDeGradoService(fechaDeGradoAdd)
      .pipe(
        tap((data: RespuestaFechaDeGrado) => {
          this.fechaDeGrado = data;
          console.log(this.fechaDeGrado);
        }),
        catchError((error) => {
          console.error('Error al guardar feha de grado:', error);
          return of(null);
        })
      )
      .subscribe();
  }
}
