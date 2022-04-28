import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-proyectos',
  templateUrl: './proyectos.component.html',
  styleUrls: ['./proyectos.component.css']
})
export class ProyectosComponent implements OnInit {
  slides = [
    "https://placekitten.com/250/400",
    "https://placekitten.com/250/400",
    "https://placekitten.com/250/400"
    ];
  constructor() { }

  ngOnInit(): void {
  }

}
