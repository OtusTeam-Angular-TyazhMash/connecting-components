import { ChangeDetectionStrategy, Component, OnChanges, OnInit, SimpleChanges } from '@angular/core';
import { MACHINES, Machine } from '../models/Machine';

@Component({
  selector: 'app-list',
  templateUrl: './list.component.html',
  styleUrls: ['./list.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class ListComponent implements OnInit {
  showChild: boolean = false;

  
  text: string = '1';
  machines = Array<Machine>(1000);
  ngOnInit(): void {
    for(var i = 0; i<5000; i++){
      this.machines[i]=MACHINES[0];
    } 
  }
  
  master = 'Иванов';
  doneCount: number = 0;

  toggleChild() {
    this.showChild = !this.showChild;
  }
  onDone(machine: Machine){
    this.doneCount++;
    const index = this.machines.findIndex(m =>m.id == machine.id);
    this.machines[index] = machine;
  }
}
