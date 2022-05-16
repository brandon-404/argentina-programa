import { Component, OnInit } from '@angular/core';
import { UserService } from 'src/app/services/user/user.service';

@Component({
  selector: 'app-perfil',
  templateUrl: './perfil.component.html',
  styleUrls: ['./perfil.component.css'],
})
export class PerfilComponent implements OnInit {
  myUser: any;
  constructor(private datosPortfolio: UserService) {}

  ngOnInit(): void {
    this.datosPortfolio.mostrarUsuario().subscribe((data) => {
      this.myUser = data;
    });
  }
}
