import { Component, OnInit } from '@angular/core';
import { ItemCertificado } from '../../_components/item-certificado/item-certificado';
import { SecundaryButton } from '../../_components/secundary-button/secundary-button';
import { RouterLink } from '@angular/router';
import { CertificadoService } from '../../_services/certificado';
import { Certificado } from '../../Interfaces/certificado';

@Component({
  selector: 'app-certificados',
  standalone: true,
  imports: [ItemCertificado, SecundaryButton, RouterLink],
  templateUrl: './certificados.html',
  styleUrl: './certificados.css',
})
export class Certificados implements OnInit {
  certificados: Certificado[] = [];

  constructor(private certificadoService: CertificadoService) {}

  ngOnInit(): void {
    this.certificados = this.certificadoService.certificados;
  }
}
