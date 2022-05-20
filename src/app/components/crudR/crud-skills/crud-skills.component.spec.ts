import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CrudSkillsComponent } from './crud-skills.component';

describe('CrudSkillsComponent', () => {
  let component: CrudSkillsComponent;
  let fixture: ComponentFixture<CrudSkillsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CrudSkillsComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(CrudSkillsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
