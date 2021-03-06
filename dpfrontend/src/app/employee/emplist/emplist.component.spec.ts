import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { EmpListComponent } from './emplist.component';

describe('EmpListComponent', () => {
  let component: EmpListComponent;
  let fixture: ComponentFixture<EmpListComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ EmpListComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(EmpListComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
