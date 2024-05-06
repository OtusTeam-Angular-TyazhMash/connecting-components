import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MachineCreateFormComponent } from './machine-create-form.component';

describe('MachineCreateFormComponent', () => {
  let component: MachineCreateFormComponent;
  let fixture: ComponentFixture<MachineCreateFormComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [MachineCreateFormComponent]
    });
    fixture = TestBed.createComponent(MachineCreateFormComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
