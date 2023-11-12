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
    { nombre: 'Natas', precio: '7000', foto: 'Postres 1.png', descripcion: '', id: 1 },
    { nombre: 'Vaina', precio: '7000', foto: 'Postres 1.png', descripcion: '', id: 2 },
    { nombre: 'Cereales', precio: '7000', foto: 'Postres 1.png', descripcion: '', id: 3 },
    { nombre: 'Delicias', precio: '7000', foto: 'Postres 1.png', descripcion: '', id: 4 },
    { nombre: 'Primero', precio: '7000', foto: 'Postres 1.png', descripcion: '', id: 5 },
    { nombre: 'Primero', precio: '7000', foto: 'Postres 1.png', descripcion: '', id: 6 },
  ];

  postId: number = 0;
  postreSeleccionado: Postre | undefined;

  constructor(private route: ActivatedRoute) { }

  ngOnInit() {
    this.route.params.subscribe(params => {
      this.postId = +params['id'];
      this.consultarPostrePorId();
    });
  }

  consultarPostrePorId() {
    this.postreSeleccionado = this.postres.find(postre => postre.id === this.postId);
    // Puedes realizar la lógica adicional de consulta aquí, por ejemplo, llamar a un servicio HTTP.
    // this.miServicio.consultarPostrePorId(this.postId).subscribe(resultado => {
    //   this.postreSeleccionado = resultado;
    // });
  }
}
