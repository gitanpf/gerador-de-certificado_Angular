import { Injectable } from '@angular/core';
import { Certificado } from '../Interfaces/certificado';

@Injectable({
  providedIn: 'root',
})
export class CertificadoService {
  certificados: Certificado[] = [];

  constructor() {
    const certificadosSalvos = localStorage.getItem('certificados');
    this.certificados = certificadosSalvos ? JSON.parse(certificadosSalvos) : [];
  }

  adicionarCertificado(certificado: Certificado) {
    this.certificados.unshift({ ...certificado });
    localStorage.setItem('certificados', JSON.stringify(this.certificados));
  }
}
