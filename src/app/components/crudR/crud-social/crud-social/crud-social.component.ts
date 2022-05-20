import { Component, OnInit } from '@angular/core';
import {RedSocial} from 'src/app/models/red-social';
import { SocialService } from 'src/app/services/social/social.service';
import Swal from 'sweetalert2';

@Component({
  selector: 'app-crud-social',
  templateUrl: './crud-social.component.html',
  styleUrls: ['./crud-social.component.css']
})
export class CrudSocialComponent implements OnInit {
  misRedes: RedSocial[] = [];

  constructor(private datosPortfolio:SocialService) { }

  selectedRed: RedSocial = new RedSocial();
  
  addOrEdit() {
    if (this.selectedRed.link != '') {
      this.datosPortfolio.save(this.selectedRed).subscribe((data) => {
        this.datosPortfolio.mostrarTodos().subscribe((data) => {
          this.misRedes = data;
        });
      });
      this.selectedRed = new RedSocial();
      Swal.fire({
        icon: 'success',
        title: 'Your work has been saved',
        showConfirmButton: false,
        timer: 1500,
      });
    }
  }
  openForEdit(red: RedSocial) {
    this.selectedRed = red;
  }
  cancelEdit() {
    this.selectedRed = new RedSocial();
    this.datosPortfolio.mostrarTodos().subscribe((data) => {
      this.misRedes = data;
    });
  }

  delete(id: number | undefined): void {
    Swal.fire({
      title: 'esta seguro de eliminar?',
      text: 'crt + z´n!',
      icon: 'warning',
      showCancelButton: true,
      confirmButtonColor: '#3085d6',
      cancelButtonColor: '#d33',
      confirmButtonText: 'si, eliminar!',
    }).then((result) => {
      if (result.isConfirmed) {
        this.datosPortfolio.delete(id).subscribe((data) => {
          this.datosPortfolio.mostrarTodos().subscribe((data) => {
            this.misRedes = data;
          });
        });
        Swal.fire('Eliminado!', 'satisfactoriamente');
      }
    });
  }


  ngOnInit(): void {
    this.datosPortfolio.mostrarTodos().subscribe((data) => {
      this.misRedes = data;
    });
  }

}
