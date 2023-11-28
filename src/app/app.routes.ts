import { Routes } from '@angular/router';

export const routes: Routes = [

    {
        path: 'administrador',
        loadComponent: () => import('./layout/pagina-principal/pagina-principal.component'),
        children: [
          {
            path: 'carreras',
            title: 'Change Detection',
            loadComponent: () => import('./administrador/vistas/carreras/carreras.component'),
          },
          {
            path: 'encuestas',
            title: 'Control Flow',
            loadComponent: () => import('./administrador/vistas/encuestas/encuestas.component'),
          },
          {
            path: 'roles',
            title: 'Defer Options',
            loadComponent: () => import('./administrador/vistas/roles/roles.component'),
          },
          {
            path: 'fechasdegrados',
            title: 'Defer Options',
            loadComponent: () => import('./administrador/vistas/fecha-de-grado/fecha-de-grado.component'),
          },
          {
            path: 'fechasdegradosencuestas',
            title: 'Defer Options',
            loadComponent: () => import('./administrador/vistas/fechas-de-grados-encuestas/fechas-de-grados-encuestas.component'),
          },
          {
            path:'', redirectTo: 'control-flow', pathMatch: 'full',
          }
        ]
      },
      {
        path: '',
        redirectTo: '/administrador',
        pathMatch: 'full'
      }
];
