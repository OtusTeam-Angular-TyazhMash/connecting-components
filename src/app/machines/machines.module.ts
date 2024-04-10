import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ListComponent } from './list/list.component';
import { ListItemComponent } from './list-item/list-item.component';
import { MachinesRoutingModule } from './machines-routing.module';



@NgModule({
  declarations: [
    ListComponent,
    ListItemComponent
  ],
  imports: [
    CommonModule,
    MachinesRoutingModule
  ]
})
export class MachinesModule { }
