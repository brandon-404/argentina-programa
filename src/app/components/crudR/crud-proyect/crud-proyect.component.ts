import { Component, OnInit } from '@angular/core';
import { ProyectosService} from 'src/app/services/proyectos/proyectos.service';
import{Proyectos} from 'src/app/models/proyectos';
import Swal from 'sweetalert2';


@Component({
  selector: 'app-crud-proyect',
  templateUrl: './crud-proyect.component.html',
  styleUrls: ['./crud-proyect.component.css']
})
export class CrudProyectComponent implements OnInit {
  misProyectos : Proyectos [] = [];
  constructor(private datosPortfolio: ProyectosService) { }
  selectedProyectos: Proyectos =  new Proyectos();

  addOrEdit() {
    if (this.selectedProyectos.titulo != '') {
      this.datosPortfolio.save(this.selectedProyectos).subscribe((data) => {
        this.datosPortfolio.mostrarProyectos().subscribe((data) => {
          this.misProyectos = data;
        });
      });
      this.selectedProyectos = new Proyectos();
      Swal.fire({
        icon: 'success',
        title: 'Your work has been saved',
        showConfirmButton: false,
        timer: 1500,
      });
    }
  }
  openForEdit(proyect: Proyectos) {
    this.selectedProyectos = proyect;
  }
  cancelEdit() {
    this.selectedProyectos = new Proyectos();
    this.datosPortfolio.mostrarProyectos().subscribe((data) => {
      this.misProyectos = data;
    });
  }
  delete(id: number | undefined): void {
    Swal.fire({
      title: 'esta seguro de eliminar?',
      text: 'crt + z´n!',
      icon: 'warning',
      showCancelButton: true,
      confirmButtonColor: '#3085d6',
      cancelButtonColor: '#d33',
      confirmButtonText: 'si, eliminar!',
    }).then((result) => {
      if (result.isConfirmed) {
        this.datosPortfolio.delete(id).subscribe((data) => {
          this.datosPortfolio.mostrarProyectos().subscribe((data) => {
            this.misProyectos = data;
          });
        });
        Swal.fire('Eliminado!', 'satisfactoriamente');
      }
    });
  }


  ngOnInit(): void {
    this.datosPortfolio.mostrarProyectos().subscribe((data) => {
      this.misProyectos = data;
    });
  }

}
