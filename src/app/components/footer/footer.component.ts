import { Component, OnInit } from '@angular/core';
import { UserService } from 'src/app/services/user/user.service';

@Component({
  selector: 'app-footer',
  templateUrl: './footer.component.html',
  styleUrls: ['./footer.component.css']
})
export class FooterComponent implements OnInit {
  myUser:any;
  constructor(private datosPortfolio : UserService) { }

  ngOnInit(): void {
    this.datosPortfolio.mostrarUsuario().subscribe(data => {
      this.myUser = data;
    })
  }

}
