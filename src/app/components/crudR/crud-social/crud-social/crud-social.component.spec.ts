import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CrudSocialComponent } from './crud-social.component';

describe('CrudSocialComponent', () => {
  let component: CrudSocialComponent;
  let fixture: ComponentFixture<CrudSocialComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CrudSocialComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(CrudSocialComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
