import { Component, OnInit } from '@angular/core';
import {UserService } from 'src/app/services/user/user.service';
import {User} from 'src/app/models/user';
import Swal from 'sweetalert2';

@Component({
  selector: 'app-crud-user',
  templateUrl: './crud-user.component.html',
  styleUrls: ['./crud-user.component.css']
})
export class CrudUserComponent implements OnInit {
  myUser : User = new User();
  constructor(private datosPortfolio: UserService) { }
  selectedUSer : User = new User();

  addOrEdit() {
    if (this.selectedUSer.username != '') {
      this.datosPortfolio.editar(this.selectedUSer.id ,this.selectedUSer).subscribe((data) => {
        this.datosPortfolio.mostrarUsuario().subscribe((data) => {
          this.myUser = data[0];
        });
      });
      this.selectedUSer = new User();
      Swal.fire({
        icon: 'success',
        title: 'Your work has been saved',
        showConfirmButton: false,
        timer: 1500,
      });
    }
  }
  openForEdit(user: User) {
    this.selectedUSer = user;
  }
  cancelEdit() {
    this.selectedUSer = new User();
    this.datosPortfolio.mostrarUsuario().subscribe((data) => {
      this.myUser = data[0];
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
          this.datosPortfolio.mostrarUsuario().subscribe((data) => {
            this.myUser = data[0];
          });
        });
        Swal.fire('Eliminado!', 'satisfactoriamente');
      }
    });
  }

  ngOnInit(): void {
    this.datosPortfolio.mostrarUsuario().subscribe((data) => {
      this.myUser = data[0];
    });
  }

}
