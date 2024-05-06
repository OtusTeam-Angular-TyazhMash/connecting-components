import { Component } from '@angular/core';
import { FormArray, FormBuilder, FormControl, FormGroup, FormRecord, Validators } from '@angular/forms';
import { MachineCreate } from '../models/MachineCreate';
import { vinValidator } from '../validators/vinValidator';

@Component({
  selector: 'app-machine-create-form',
  templateUrl: './machine-create-form.component.html',
  styleUrls: ['./machine-create-form.component.scss']
})
export class MachineCreateFormComponent {
  constructor(private fb: FormBuilder){
    
  } 
  machine = new MachineCreate();
  machineForm = this.fb.group({
    make:['', Validators.required],
    model:['', Validators.required],
    year:['', [Validators.min(1945), Validators.max(2024)]],
    vin:['', [Validators.required, vinValidator()]],
    number:[''],

    services: this.fb.array([
      this.fb.group({
        date:['', Validators.required],
        place:['', Validators.required]
      })
    ]),
   
    dynamic: this.fb.record(
      {}
    )
  });
  get make() {
    return this.machineForm.get('make');
  }
 
  get services() {
    return this.machineForm.controls["services"];
  }

  get dynamic(){
    return this.machineForm.controls["dynamic"];
  }

  addDynamic(){
    this.machineForm.controls["dynamic"].addControl('wheel', this.fb.control(['', Validators.min(34)]))
  }

  addService(){
    const service = new FormGroup({
      date: new FormControl(''),
      place: new FormControl('')
    })
    this.services.push(service)
  }

  removeService(index: number){
    this.services.removeAt(index);
  }
 
  onPatch(){   
    this.machineForm.reset();
  }
  
  onSubmit() {
    // TODO: Use EventEmitter with form value
    console.warn(this.machineForm.value);
  }
}
