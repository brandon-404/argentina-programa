import { Component, OnInit } from '@angular/core';
import {SkillsService} from "src/app/services/skills/skills.service";

@Component({
  selector: 'app-habilidades',
  templateUrl: './habilidades.component.html',
  styleUrls: ['./habilidades.component.css']
})
export class HabilidadesComponent implements OnInit {
  misSkills:any;
  constructor(private datosPortfolio:SkillsService) { }

  ngOnInit(): void {
    this.datosPortfolio.mostrarSkills().subscribe(data=>{
      this.misSkills = data;
    })
  }

}
