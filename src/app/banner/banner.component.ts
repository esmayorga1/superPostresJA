import { Component } from '@angular/core';

@Component({
  selector: 'app-banner',
  templateUrl: './banner.component.html',
  styleUrls: ['./banner.component.css']
})
export class BannerComponent {
  tituloBanner1 = "El postre perfecto para cada ocasión"
  tituloBanner2 = "Postres que te harán sonreír"
  tituloBanner3 = "Dulces tentaciones para tu paladar"

  descripcionBanner1 = "Nuestros postres son el complemento perfecto para cualquier evento"
  descripcionBanner2 = "Si estás buscando un postre para celebrar una ocasión especial, no dudes en visitarnos"
  descripcionBanner3 = "Sabores únicos para paladares exigentes"
}
