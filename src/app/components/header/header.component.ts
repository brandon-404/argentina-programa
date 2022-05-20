import { Component, OnInit } from '@angular/core';
import { SocialService } from 'src/app/services/social/social.service';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit {
  Facebook:any;
  Instagram:any;
  GitHub:any;
  LinkedIn:any;
  constructor(private datosPortfolio : SocialService) { }

  ngOnInit(): void {
    this.datosPortfolio.mostrarPorNombre("Facebook").subscribe(data=> {
      this.Facebook= data;
    })
    this.datosPortfolio.mostrarPorNombre("Instagram").subscribe(data=> {
      this.Instagram= data;
    })
    this.datosPortfolio.mostrarPorNombre("GitHub").subscribe(data=> {
      this.GitHub= data;
    })
    this.datosPortfolio.mostrarPorNombre("LinkedIn").subscribe(data=> {
      this.LinkedIn= data;
    })
  }

}
