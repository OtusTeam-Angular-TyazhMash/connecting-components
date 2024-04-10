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
}
