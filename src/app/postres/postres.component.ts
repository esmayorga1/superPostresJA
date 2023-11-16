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
    { nombre: 'Leche Asada', precio: '7000', foto: 'Postres 1.png', descripcion: '', id:1 },
    { nombre: 'Postre de Natas', precio: '7000', foto: 'Postres 1.png', descripcion: '',  id:2  },
    { nombre: 'Postre de Maracuyá', precio: '7000', foto: 'Postres 1.png', descripcion: '' , id:3 },
    { nombre: 'Cheesecake', precio: '7000', foto: 'Postres 1.png', descripcion: '', id:4  },
    { nombre: 'Fan', precio: '7000', foto: 'Postres 1.png', descripcion: '', id:5  },
    { nombre: 'Pendiente', precio: '7000', foto: 'Postres 1.png', descripcion: '' , id:6 },
   
  ];

 


}



