import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-crud-r',
  templateUrl: './crud-r.component.html',
  styleUrls: ['./crud-r.component.css']
})
export class CrudRComponent implements OnInit {
  constructor(private router: Router) { }
  logOut() {
    this.router.navigate(['/']);
  }
  ngOnInit(): void {
  }

}
