import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ListComponent } from './list/list.component';
import { MachineCreateFormComponent } from './machine-create-form/machine-create-form.component';

const routes: Routes = [
  { path: '', component: ListComponent },
  { path: 'new', component: MachineCreateFormComponent },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class MachinesRoutingModule {}
