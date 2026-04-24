import { Component, ElementRef, OnInit, ViewChild } from '@angular/core';
import { ActivatedRoute, RouterLink } from '@angular/router';
import { SecundaryButton } from '../../_components/secundary-button/secundary-button';
import { CertificadoService } from '../../_services/certificado';
import { Certificado as ICertificado } from '../../Interfaces/certificado';
import * as htmlToImage from 'html-to-image';

@Component({
  selector: 'app-certificado',
  standalone: true,
  imports: [RouterLink, SecundaryButton],
  templateUrl: './certificado.html',
  styleUrl: './certificado.css',
})
export class Certificado implements OnInit {
  id: string | null = null;
  certificado: ICertificado | undefined;

  @ViewChild('certificadoContainer') certificadoElement!: ElementRef;

  constructor(
    private certificadoService: CertificadoService,
    private route: ActivatedRoute
  ) { }

  ngOnInit(): void {
    this.route.paramMap.subscribe(params => {
      this.id = params.get('id');
      this.certificado = this.certificadoService.certificados.find((item) => item.id === this.id);
    });
  }

  async downloadCertificado() {
    if (!this.certificado || !this.certificadoElement) {
      return;
    }

    try {
      const dataUrl = await htmlToImage.toPng(this.certificadoElement.nativeElement, {
        quality: 1.0,
        backgroundColor: '#ffffff',
      });
      const imagemRecortada = await this.recortarBordasBrancas(dataUrl);

      const link = document.createElement('a');
      link.download = `certificado_${this.certificado.nome.replace(/\s+/g, '_')}.png`;
      link.href = imagemRecortada;
      link.click();
    } catch (error) {
      console.error('Erro ao baixar o certificado:', error);
    }
  }

  private async recortarBordasBrancas(dataUrl: string): Promise<string> {
    return new Promise((resolve) => {
      const image = new Image();
      image.onload = () => {
        const sourceCanvas = document.createElement('canvas');
        sourceCanvas.width = image.width;
        sourceCanvas.height = image.height;
        const sourceCtx = sourceCanvas.getContext('2d');
        if (!sourceCtx) {
          resolve(dataUrl);
          return;
        }
        sourceCtx.drawImage(image, 0, 0);

        const { data, width, height } = sourceCtx.getImageData(0, 0, image.width, image.height);
        const threshold = 245;
        let minX = width;
        let minY = height;
        let maxX = -1;
        let maxY = -1;

        for (let y = 0; y < height; y++) {
          for (let x = 0; x < width; x++) {
            const index = (y * width + x) * 4;
            const r = data[index];
            const g = data[index + 1];
            const b = data[index + 2];
            const a = data[index + 3];
            const isWhitePixel = r >= threshold && g >= threshold && b >= threshold;
            const isVisible = a > 0;

            if (isVisible && !isWhitePixel) {
              minX = Math.min(minX, x);
              minY = Math.min(minY, y);
              maxX = Math.max(maxX, x);
              maxY = Math.max(maxY, y);
            }
          }
        }

        if (maxX < minX || maxY < minY) {
          resolve(dataUrl);
          return;
        }

        const croppedWidth = maxX - minX + 1;
        const croppedHeight = maxY - minY + 1;
        const croppedCanvas = document.createElement('canvas');
        croppedCanvas.width = croppedWidth;
        croppedCanvas.height = croppedHeight;
        const croppedCtx = croppedCanvas.getContext('2d');
        if (!croppedCtx) {
          resolve(dataUrl);
          return;
        }

        croppedCtx.drawImage(sourceCanvas, minX, minY, croppedWidth, croppedHeight, 0, 0, croppedWidth, croppedHeight);
        resolve(croppedCanvas.toDataURL('image/png'));
      };
      image.onerror = () => resolve(dataUrl);
      image.src = dataUrl;
    });
  }
}