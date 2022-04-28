import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-habilidades',
  templateUrl: './habilidades.component.html',
  styleUrls: ['./habilidades.component.css']
})
export class HabilidadesComponent implements OnInit {

  barras = [
    {habilidad:"HTML", nivel:"50%"},
    {habilidad:"CSS", nivel:"50%"},
    {habilidad:"JS", nivel:"100%"}
  ];

  constructor() { }

  ngOnInit(): void {
  }

}
