import { Routes } from '@angular/router';
import { Certificados } from './pages/certificados/certificados';
import { CertificadoForm } from './pages/certificado-form/certificado-form';
import { Certificado } from './pages/certificado/certificado';

export const routes: Routes = [
  {
    path: '',
    component: Certificados,
  },
  {
    path: 'certificados',
    component: Certificados,
  },
  {
    path: 'certificados/novo',
    component: CertificadoForm,
  },
  {
    path: 'certificados/:id',
    component: Certificado,
  },
  {
    path: 'certificado/novo',
    redirectTo: 'certificados/novo',
    pathMatch: 'full',
  },
  {
    path: 'certificado/:id',
    redirectTo: 'certificados/:id',
    pathMatch: 'full',
  },
  {
    path: '**',
    redirectTo: '',
  },
];
