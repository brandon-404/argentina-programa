import { Component, OnInit } from '@angular/core';
import { SocialService } from 'src/app/services/social/social.service';
import { UserService } from 'src/app/services/user/user.service';
import {TokenService} from 'src/app/services/token.service';
import { User } from 'src/app/models/user';
import {Router} from '@angular/router';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css'],
})
export class HeaderComponent implements OnInit {
  Facebook: any;
  Instagram: any;
  GitHub: any;
  LinkedIn: any;
  constructor(
    private datosPortfolio: SocialService,
    private log: UserService,
    private token:TokenService,
    private router: Router
   
  ) {}
  tok : any
  user: User = new User();
  nada: string = "";
  session(username: string, password: string){
    this.user.username = username;
    this.user.password = password;
    this.log.logg(this.user).subscribe((data) => {
      this.tok = data;
      this.token.saveToken(this.tok.authorization);
      if(this.token.getToken() == "No Valido"){
        this.token.deleteToken();
      }else{
        this.router.navigate(['crudRepository'])
      }
    });
   
    
  }

  ngOnInit(): void {
    this.datosPortfolio.mostrarPorNombre('Facebook').subscribe((data) => {
      this.Facebook = data;
    });
    this.datosPortfolio.mostrarPorNombre('Instagram').subscribe((data) => {
      this.Instagram = data;
    });
    this.datosPortfolio.mostrarPorNombre('GitHub').subscribe((data) => {
      this.GitHub = data;
    });
    this.datosPortfolio.mostrarPorNombre('LinkedIn').subscribe((data) => {
      this.LinkedIn = data;
    });

  }
}
