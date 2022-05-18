import { Component, OnInit } from '@angular/core';
import { Estudios } from 'src/app/models/estudios';
import { EstudiosService } from 'src/app/services/estudios/estudios.service';

@Component({
  selector: 'app-crud-estudios',
  templateUrl: './crud-estudios.component.html',
  styleUrls: ['./crud-estudios.component.css']
})
export class CrudEstudiosComponent implements OnInit {
  misEstudios: Estudios [] = [];
  constructor(private datosPortfolio:EstudiosService) { }
  selectedEstudios: Estudios = new Estudios();
  addOrEdit(){
    this.datosPortfolio.saveEstudio(this.selectedEstudios).subscribe(data =>{
      this.datosPortfolio.mostrarEstudios().subscribe(data => {
        this.misEstudios = data;
      })
    });
    this.selectedEstudios = new Estudios();
  }
  

  ngOnInit(): void {
    
    this.datosPortfolio.mostrarEstudios().subscribe(data => {
      this.misEstudios = data;
    })
  }

}
