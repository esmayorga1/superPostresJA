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
    { nombre: 'Leche Asada', precio: '7000', foto: 'Leche Asada 1.png', descripcion: 'La leche de asada es un postre extraordinario que resplandece con la autenticidad de la receta de la abuela, llevando consigo la esencia de tradiciones culinarias que han sido transmitidas a lo largo de generaciones. Esta exquisitez no solo es un manjar para el paladar, sino también un vínculo emotivo con la memoria de nuestras raíces.', id: 1 },
    { nombre: 'Postre de Natas', precio: '7000', foto: 'Postres 1.png', descripcion: 'El postre de natas es una joya culinaria que trasciende el tiempo, elaborado con la venerada receta de abuela. La preparación se traduce en una experiencia gustativa incomparable: una textura suave y cremosa que se deshace delicadamente en la boca.', id: 2 },
    { nombre: 'Postre de Maracuyá', precio: '7000', foto: 'Postres 1.png', descripcion: 'El postre de maracuyá, confeccionado a partir de la exquisita fruta de origen colombiano, se erige como una verdadera delicia que celebra la riqueza tropical de la región. Esta exquisitez culinaria combina la intensidad y frescura del maracuyá con una cuidadosa elaboración para crear un postre que cautiva los sentidos.', id: 3 },
    { nombre: 'Cheesecake', precio: '7000', foto: 'Postres 1.png', descripcion: 'El cheesecake es un postre delicioso y versátil de origen amaericano, que ofrece una experiencia culinaria única. Es el postre perfecto para cualquier ocasión, ya sea una cena especial, una reunión con amigos o simplemente para disfrutar de un momento dulce.', id: 4 },
    { nombre: 'Flan de Caramelo', precio: '7000', foto: 'Postres 1.png', descripcion: 'El Flan de Caramelo es un postre clásico que seduce con su combinación de suavidad y dulzura, creando una experiencia culinaria sublime. Esta delicia se caracteriza por su textura sedosa y su sabor delicadamente acaramelado.', id: 5 },
    { nombre: 'Tiramisú', precio: '7000', foto: 'Postres 1.png', descripcion: 'El Tiramisú, una exquisita receta italiana, es un postre cautivador que fusiona capas de sabores y texturas para crear una experiencia gustativa inolvidable. Este postre, con su equilibrio entre lo dulce y lo amargo, ha conquistado paladares en todo el mundo, convirtiéndose en un clásico venerado que perdura a lo largo del tiempo.', id: 6 },
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
    { foto: 'chesque-3.png' },
    { foto: 'chesque 1.png' },
    { foto: 'chesque-2.png' },
    
    
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
