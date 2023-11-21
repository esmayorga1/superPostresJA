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
    { nombre: 'Leche Asada', precio: '7000', foto: 'Leche Asada 1.png', descripcion: '', id:1 },
    { nombre: 'Postre de Natas', precio: '7000', foto: 'Postre de Natas 1.png', descripcion: '',  id:2  },
    { nombre: 'Postre de Maracuyá', precio: '7000', foto: 'Postre Maracuya 1.jpg', descripcion: '' , id:3 },
    { nombre: 'Cheesecake', precio: '7000', foto: 'chesque 1.png', descripcion: '', id:4  },
    { nombre: 'Flan de Caramelo', precio: '7000', foto: 'Fasta 2.png', descripcion: '', id:5  },
    { nombre: 'Tiramisú', precio: '7000', foto: 'Tiramisu 1.png', descripcion: '' , id:6 },
   
  ];

 


}



