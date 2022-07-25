import { Component, OnInit } from '@angular/core';
import { Estudio } from 'src/app/models/estudios';
import { EstudiosService } from 'src/app/services/estudios/estudios.service';
import Swal from 'sweetalert2';

@Component({
  selector: 'app-crud-estudios',
  templateUrl: './crud-estudios.component.html',
  styleUrls: ['./crud-estudios.component.css'],
})
export class CrudEstudiosComponent implements OnInit {
  misEstudios: Estudio[] = [];
  constructor(private datosPortfolio: EstudiosService) {}
  selectedEstudios: Estudio = new Estudio();
  addOrEdit() {
    if (this.selectedEstudios.leyenda != "") {
      this.datosPortfolio
        .saveEstudio(this.selectedEstudios)
        .subscribe((data) => {
          this.datosPortfolio.mostrarEstudios().subscribe((data) => {
            this.misEstudios = data;
          });
        });
      this.selectedEstudios = new Estudio();
      Swal.fire({
        icon: 'success',
        title: 'Your work has been saved',
        showConfirmButton: false,
        timer: 1500,
      });
    }
  }

  openForEdit(estudio: Estudio) {
    this.selectedEstudios = estudio;
  }
  cancelEdit() {
    this.selectedEstudios = new Estudio();
    this.datosPortfolio.mostrarEstudios().subscribe((data) => {
      this.misEstudios = data;
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
        if( this.datosPortfolio.deleteEstudio(id).subscribe((data) => {
          this.datosPortfolio.mostrarEstudios().subscribe((data) => {
            this.misEstudios = data;
          });
        })){
          Swal.fire('Eliminado!', 'satisfactoriamente');
        }
      }
    });
  }

  ngOnInit(): void {
    this.datosPortfolio.mostrarEstudios().subscribe((data) => {
      this.misEstudios = data;
    });
  }
}
