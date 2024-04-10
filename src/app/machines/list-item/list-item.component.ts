import { Component, EventEmitter, Input, Output } from '@angular/core';
import { Machine } from '../models/Machine';

@Component({
  selector: 'app-list-item',
  templateUrl: './list-item.component.html',
  styleUrls: ['./list-item.component.scss']
})
export class ListItemComponent {
  @Input() machine!: string; ;

  
}