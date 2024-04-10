import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

const routes: Routes = [{
  path: 'machines',
  data: { title: 'Сегодня'  },
  loadChildren: () =>
    import('./machines/machines.module').then((m) => m.MachinesModule),
},];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
