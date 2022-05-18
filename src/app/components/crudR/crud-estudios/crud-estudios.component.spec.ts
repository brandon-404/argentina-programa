import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CrudEstudiosComponent } from './crud-estudios.component';

describe('CrudEstudiosComponent', () => {
  let component: CrudEstudiosComponent;
  let fixture: ComponentFixture<CrudEstudiosComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CrudEstudiosComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(CrudEstudiosComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
