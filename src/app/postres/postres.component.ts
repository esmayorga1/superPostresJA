import { Component } from '@angular/core';


interface Postre {
  nombre: string;
  precio: string;
  foto: string;
  descripcion: string;
  id: number
}

@Component({
  selector: 'app-postres',
  templateUrl: './postres.component.html',
  styleUrls: ['./postres.component.css']
})
export class PostresComponent {

  postres: Postre[] = [
    { nombre: 'Natas', precio: '7000', foto: 'Postres 1.png', descripcion: '', id:1 },
    { nombre: 'Vaina', precio: '7000', foto: 'Postres 1.png', descripcion: '',  id:2  },
    { nombre: 'Cereales', precio: '7000', foto: 'Postres 1.png', descripcion: '' , id:3 },
    { nombre: 'Delicias', precio: '7000', foto: 'Postres 1.png', descripcion: '', id:4  },
    { nombre: 'Primero', precio: '7000', foto: 'Postres 1.png', descripcion: '', id:5  },
    { nombre: 'Primero', precio: '7000', foto: 'Postres 1.png', descripcion: '' , id:6 },
   
  ];

 


}



