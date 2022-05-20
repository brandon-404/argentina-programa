import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { SlickCarouselModule } from 'ngx-slick-carousel';

import { AppComponent } from './app.component';
import { HeaderComponent } from './components/header/header.component';
import { PerfilComponent } from './components/perfil/perfil.component';
import { ExperienciaComponent } from './components/experiencia/experiencia.component';
import { EstudiosComponent } from './components/estudios/estudios.component';
import { HabilidadesComponent } from './components/habilidades/habilidades.component';
import { ProyectosComponent } from './components/proyectos/proyectos.component';
import { FooterComponent } from './components/footer/footer.component';
import {HttpClientModule } from '@angular/common/http';
import { CrudRComponent } from './components/crudR/crud-r/crud-r.component';
import { CrudEstudiosComponent } from './components/crudR/crud-estudios/crud-estudios.component'
import { FormsModule } from '@angular/forms';
import { VistaPrincipalComponent } from './components/vista-principal/vista-principal.component';
import { RouterModule } from '@angular/router';
import { CrudExperienciaComponent } from './components/crudR/crud-experiencia/crud-experiencia/crud-experiencia.component';
import { CrudSocialComponent } from './components/crudR/crud-social/crud-social/crud-social.component';
import { CrudSkillsComponent } from './components/crudR/crud-skills/crud-skills.component';
import { CrudProyectComponent } from './components/crudR/crud-proyect/crud-proyect.component';

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    PerfilComponent,
    ExperienciaComponent,
    EstudiosComponent,
    HabilidadesComponent,
    ProyectosComponent,
    FooterComponent,
    CrudRComponent,
    CrudEstudiosComponent,
    VistaPrincipalComponent,
    CrudExperienciaComponent,
    CrudSocialComponent,
    CrudSkillsComponent,
    CrudProyectComponent,
  ],
  imports: [BrowserModule, SlickCarouselModule,  HttpClientModule, FormsModule,
    RouterModule.forRoot([
      { path: '', redirectTo : "portfolio", pathMatch : "full"},
      { path: 'portfolio', component: VistaPrincipalComponent },
      { path: 'crudRepository', component: CrudRComponent }
    ]),
  ],
  providers: [],
  bootstrap: [AppComponent],
 
})
export class AppModule {}
