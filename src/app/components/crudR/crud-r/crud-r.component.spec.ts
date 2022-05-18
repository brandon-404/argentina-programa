import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CrudRComponent } from './crud-r.component';

describe('CrudRComponent', () => {
  let component: CrudRComponent;
  let fixture: ComponentFixture<CrudRComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CrudRComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(CrudRComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
