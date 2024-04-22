import { Component } from '@angular/core';
import { MACHINES, Machine } from '../models/Machine';

@Component({
  selector: 'app-list',
  templateUrl: './list.component.html',
  styleUrls: ['./list.component.scss']
})
export class ListComponent {
  machines = MACHINES;
  master = 'Иванов';
  doneCount: number = 0;

  onDone(machine: Machine){
    this.doneCount++;
    const index = this.machines.findIndex(m =>m.id == machine.id);
    this.machines[index] = machine;
  }
}
