import { Component, OnInit } from '@angular/core';
import { Experiencia } from 'src/app/models/experiencia';
import { ExperienciaService } from 'src/app/services/experiencia/experiencia.service';
import Swal from 'sweetalert2';

@Component({
  selector: 'app-crud-experiencia',
  templateUrl: './crud-experiencia.component.html',
  styleUrls: ['./crud-experiencia.component.css'],
})
export class CrudExperienciaComponent implements OnInit {
  misExp: Experiencia[] = [];

  constructor(private datosPortfolio: ExperienciaService) {}

  selectedExp: Experiencia = new Experiencia();

  addOrEdit() {
    if (this.selectedExp.leyenda != '') {
      this.datosPortfolio.saveExp(this.selectedExp).subscribe((data) => {
        this.datosPortfolio.mostrarExperiencia().subscribe((data) => {
          this.misExp = data;
        });
      });
      this.selectedExp = new Experiencia();
      Swal.fire({
        icon: 'success',
        title: 'Your work has been saved',
        showConfirmButton: false,
        timer: 1500,
      });
    }
  }

  openForEdit(exp: Experiencia) {
    this.selectedExp = exp;
  }
  cancelEdit() {
    this.selectedExp = new Experiencia();
    this.datosPortfolio.mostrarExperiencia().subscribe((data) => {
      this.misExp = data;
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
        this.datosPortfolio.deleteExp(id).subscribe((data) => {
          this.datosPortfolio.mostrarExperiencia().subscribe((data) => {
            this.misExp = data;
          });
        });
        Swal.fire('Eliminado!', 'satisfactoriamente');
      }
    });
  }


  ngOnInit(): void {
    this.datosPortfolio.mostrarExperiencia().subscribe((data) => {
      this.misExp = data;
    });
  }
}
