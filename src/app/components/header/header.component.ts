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
    this.datosPortfolio.mostrarRedSocial("Facebook").subscribe(data=> {
      this.Facebook= data;
    })
    this.datosPortfolio.mostrarRedSocial("Instagram").subscribe(data=> {
      this.Instagram= data;
    })
    this.datosPortfolio.mostrarRedSocial("GitHub").subscribe(data=> {
      this.GitHub= data;
    })
    this.datosPortfolio.mostrarRedSocial("LinkedIn").subscribe(data=> {
      this.LinkedIn= data;
    })
  }

}
