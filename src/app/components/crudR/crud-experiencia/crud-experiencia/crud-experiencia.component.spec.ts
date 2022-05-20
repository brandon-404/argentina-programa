import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CrudExperienciaComponent } from './crud-experiencia.component';

describe('CrudExperienciaComponent', () => {
  let component: CrudExperienciaComponent;
  let fixture: ComponentFixture<CrudExperienciaComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CrudExperienciaComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(CrudExperienciaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
