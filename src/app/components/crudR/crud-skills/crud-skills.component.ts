import { Component, OnInit } from '@angular/core';
import { SkillsService } from 'src/app/services/skills/skills.service';
import { Skills } from 'src/app/models/skills';
import Swal from 'sweetalert2';

@Component({
  selector: 'app-crud-skills',
  templateUrl: './crud-skills.component.html',
  styleUrls: ['./crud-skills.component.css'],
})
export class CrudSkillsComponent implements OnInit {
  misSkilss: Skills[] = [];

  constructor(private datosPortfolio: SkillsService) {}

  selectedSkills: Skills = new Skills();

  addOrEdit() {
    if (this.selectedSkills.nombre_tecnologia != '') {
      this.datosPortfolio.save(this.selectedSkills).subscribe((data) => {
        this.datosPortfolio.mostrarSkills().subscribe((data) => {
          this.misSkilss = data;
        });
      });
      this.selectedSkills = new Skills();
      Swal.fire({
        icon: 'success',
        title: 'Your work has been saved',
        showConfirmButton: false,
        timer: 1500,
      });
    }
  }
  openForEdit(skill: Skills) {
    this.selectedSkills = skill;
  }
  cancelEdit() {
    this.selectedSkills = new Skills();
    this.datosPortfolio.mostrarSkills().subscribe((data) => {
      this.misSkilss = data;
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
          this.datosPortfolio.mostrarSkills().subscribe((data) => {
            this.misSkilss = data;
          });
        });
        Swal.fire('Eliminado!', 'satisfactoriamente');
      }
    });
  }

  ngOnInit(): void {
    this.datosPortfolio.mostrarSkills().subscribe((data) => {
      this.misSkilss = data;
    });
  }
}
