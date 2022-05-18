import { Component, OnInit } from '@angular/core';
import { Estudio } from 'src/app/models/estudios';
import { EstudiosService } from 'src/app/services/estudios/estudios.service';

@Component({
  selector: 'app-crud-estudios',
  templateUrl: './crud-estudios.component.html',
  styleUrls: ['./crud-estudios.component.css']
})
export class CrudEstudiosComponent implements OnInit {
  misEstudios: Estudio [] = [];
  constructor(private datosPortfolio:EstudiosService) { }
  selectedEstudios: Estudio = new Estudio();
  addOrEdit(){
    this.datosPortfolio.saveEstudio(this.selectedEstudios).subscribe(data =>{
      this.datosPortfolio.mostrarEstudios().subscribe(data => {
        this.misEstudios = data;
      })
    });
    this.selectedEstudios = new Estudio();
  }
  
  openForEdit(estudio: Estudio) {
    this.selectedEstudios = estudio;
  }
  cancelEdit(){
    this.selectedEstudios = new Estudio();
    this.datosPortfolio.mostrarEstudios().subscribe(data => {
      this.misEstudios = data;
    })
  }
  delete(id: number | undefined): void {
    this.datosPortfolio.deleteEstudio(id).subscribe(data => {
      this.datosPortfolio.mostrarEstudios().subscribe(data => {
        this.misEstudios = data;
      })
    })
  }

  ngOnInit(): void {
    
    this.datosPortfolio.mostrarEstudios().subscribe(data => {
      this.misEstudios = data;
    })
  }

}
