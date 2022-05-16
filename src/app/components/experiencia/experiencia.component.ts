import { Component, OnInit } from '@angular/core';
import {ExperienciaService} from "src/app/services/experiencia/experiencia.service"

@Component({
  selector: 'app-experiencia',
  templateUrl: './experiencia.component.html',
  styleUrls: ['./experiencia.component.css']
})
export class ExperienciaComponent implements OnInit {
  misExperiencias:any;
  constructor(private datosPortfolio:ExperienciaService) { }

  ngOnInit(): void {
    this.datosPortfolio.mostrarExperiencia().subscribe(data=>{
      this.misExperiencias = data;
    })
  }

}
