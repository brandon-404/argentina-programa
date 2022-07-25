import { Component, OnInit } from '@angular/core';
import {ProyectosService} from 'src/app/services/proyectos/proyectos.service';

@Component({
  selector: 'app-proyectos',
  templateUrl: './proyectos.component.html',
  styleUrls: ['./proyectos.component.css'],
})
export class ProyectosComponent implements OnInit {
  misProyectos:any;
  slideConfig = {
    slidesToShow: 4,
    autoplay: true,
    touchmove: true,
    arrows: false,  
    responsive: [
      {
        breakpoint: 1500,
        settings: {
          slidesToShow: 3,
        },
      },
      {
        breakpoint: 1115,
        settings: {
          slidesToShow: 2,
        },
      },
      {
        breakpoint: 850,
        settings: {
          slidesToShow: 3,
        },
      },
      {
        breakpoint: 600,
        settings: {
          slidesToShow: 2,
        },
      },
      {
        breakpoint: 362,
        settings: {
          slidesToShow: 1,
        },
      }
    ],
  };

  constructor(private datosPortfolio:ProyectosService) {}

  ngOnInit(): void {
    this.datosPortfolio.mostrarProyectos().subscribe(data => {
      this.misProyectos = data;
    })
  }
}
