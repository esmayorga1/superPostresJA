import { Component } from '@angular/core';

interface Postre {
  nombre: string;
  precio: string;
  foto: string;
  descripcion: string;
}

@Component({
  selector: 'app-postres',
  templateUrl: './postres.component.html',
  styleUrls: ['./postres.component.css']
})
export class PostresComponent {

  postres: Postre[] = [
    { nombre: 'Natas', precio: '7000', foto: 'Postres 1.png', descripcion: '' },
    { nombre: 'Vaina', precio: '7000', foto: 'Postres 1.png', descripcion: '' },
    { nombre: 'Cereales', precio: '7000', foto: 'Postres 1.png', descripcion: '' },
    { nombre: 'Delicias', precio: '7000', foto: 'Postres 1.png', descripcion: '' },
    { nombre: 'Primero', precio: '7000', foto: 'Postres 1.png', descripcion: '' },
    { nombre: 'Primero', precio: '7000', foto: 'Postres 1.png', descripcion: '' },
   
  ];

  constructor() {
    
  }

}
