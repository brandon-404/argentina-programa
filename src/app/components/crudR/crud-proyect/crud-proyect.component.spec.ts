import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CrudProyectComponent } from './crud-proyect.component';

describe('CrudProyectComponent', () => {
  let component: CrudProyectComponent;
  let fixture: ComponentFixture<CrudProyectComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CrudProyectComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(CrudProyectComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
