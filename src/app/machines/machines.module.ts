import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ListComponent } from './list/list.component';
import { ListItemComponent } from './list-item/list-item.component';
import { MachinesRoutingModule } from './machines-routing.module';
import { MachineCreateFormComponent } from './machine-create-form/machine-create-form.component';
import { ReactiveFormsModule } from '@angular/forms';

@NgModule({
  declarations: [ListComponent, ListItemComponent, MachineCreateFormComponent],
  imports: [CommonModule, MachinesRoutingModule, ReactiveFormsModule],
})
export class MachinesModule {}
