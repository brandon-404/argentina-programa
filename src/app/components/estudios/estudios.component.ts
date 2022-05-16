import { Component, OnInit } from '@angular/core';
import { EstudiosService } from 'src/app/services/estudios/estudios.service';

@Component({
  selector: 'app-estudios',
  templateUrl: './estudios.component.html',
  styleUrls: ['./estudios.component.css']
})
export class EstudiosComponent implements OnInit {
   misEstudios:any;
  constructor(private datosPortfolio:EstudiosService) { }

  ngOnInit(): void {
    this.datosPortfolio.mostrarEstudios().subscribe(data => {
      this.misEstudios = data;
    })
  }

}
