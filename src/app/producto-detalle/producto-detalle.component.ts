import { Component } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

interface Postre {
  nombre: string;
  precio: string;
  foto: string;
  descripcion: string;
  id: number;
}

@Component({
  selector: 'app-producto-detalle',
  templateUrl: './producto-detalle.component.html',
  styleUrls: ['./producto-detalle.component.css']
})
export class ProductoDetalleComponent {

  postres: Postre[] = [
    { nombre: 'Leche Asada', precio: '7000', foto: 'Leche Asada 1.png', descripcion: 'Un postre de natas es una deliciosa creación culinaria que destaca por su suavidad y cremosidad', id: 1 },
    { nombre: 'Postre de Natas', precio: '7000', foto: 'Postres 1.png', descripcion: 'Un postre de natas es una deliciosa creación culinaria que destaca por su suavidad y cremosidad', id: 2 },
    { nombre: 'Postre de Maracuyá', precio: '7000', foto: 'Postres 1.png', descripcion: 'Un postre de natas es una deliciosa creación culinaria que destaca por su suavidad y cremosidad', id: 3 },
    { nombre: 'Cheesecake', precio: '7000', foto: 'Postres 1.png', descripcion: 'Un postre de natas es una deliciosa creación culinaria que destaca por su suavidad y cremosidad', id: 4 },
    { nombre: 'Fan de Caramelo', precio: '7000', foto: 'Postres 1.png', descripcion: 'Un postre de natas es una deliciosa creación culinaria que destaca por su suavidad y cremosidad', id: 5 },
    { nombre: 'Tiramisú', precio: '7000', foto: 'Postres 1.png', descripcion: 'Un postre de natas es una deliciosa creación culinaria que destaca por su suavidad y cremosidad', id: 6 },
  ];

  postre1 = [
    { foto: 'Leche Asada 1.png' },
    { foto: 'Leche Asada 2.png' },
    
  ];

  postre2 = [
    { foto: 'Postre de Natas 2.png' },
    { foto: 'Postre de Natas 1.png' },
   
  ];

  postre3 = [
    { foto: 'Postre Maracuya 2.jpg' },
    { foto: 'Postre Maracuya 1.jpg' },
   
  ];

  postre4 = [
    { foto: 'chesque 1.png' },
    { foto: 'chesque 2.png' },
    { foto: 'chesque 3.png' },
    
  ];

  postre5 = [
    { foto: 'Fasta 1.png' },
    { foto: 'Fasta 2.png' },
    
  ];

  postre6 = [
    { foto: 'Tiramisu 2.png' },
    { foto: 'Tiramisu 1.png' },
    
  ];

  postId: number = 0;
  fotoPostreSeleccionado: { foto: string }[] | undefined;
  postreSeleccionado: Postre | undefined;

  idPostreFoto = 'postre' + this.postId;

  constructor(private route: ActivatedRoute) { }

  ngOnInit() {
    this.route.params.subscribe(params => {
      this.postId = +params['id'];
      this.consultarPostrePorId();
      this.consultarFotosPostrePorId();
    });
  }

  consultarPostrePorId() {
    this.postreSeleccionado = this.postres.find(postre => postre.id === this.postId);
    this.idPostreFoto = 'postre' + this.postId;
  }

  consultarFotosPostrePorId() {
    if (this.postreSeleccionado) {
      // Asignar el arreglo correspondiente según el postId
      switch (this.postId) {
        case 1:
          this.fotoPostreSeleccionado = this.postre1;
          break;
        case 2:
          this.fotoPostreSeleccionado = this.postre2;
          break;
        case 3:
          this.fotoPostreSeleccionado = this.postre3;
          break;
        case 4:
          this.fotoPostreSeleccionado = this.postre4;
          break;
        case 5:
          this.fotoPostreSeleccionado = this.postre5;
          break;
        case 6:
          this.fotoPostreSeleccionado = this.postre6;
          break;
        default:
          this.fotoPostreSeleccionado = [];
          break;
      }
    }
  }
}
