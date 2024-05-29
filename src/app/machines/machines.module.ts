import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ListComponent } from './list/list.component';
import { ListItemComponent } from './list-item/list-item.component';
import { MachinesRoutingModule } from './machines-routing.module';
import { MachineCreateFormComponent } from './machine-create-form/machine-create-form.component';
import { ReactiveFormsModule } from '@angular/forms';
import { ScrollingModule } from '@angular/cdk/scrolling';
import { CdkVirtualScrollViewport } from '@angular/cdk/scrolling';
import { SearchComponent } from './search/search.component';
import { HttpClientModule } from '@angular/common/http';

@NgModule({
  declarations: [
    ListComponent,
    ListItemComponent,
    MachineCreateFormComponent,
    SearchComponent,
  ],
  imports: [
    CommonModule,
    MachinesRoutingModule,
    ReactiveFormsModule,
    ScrollingModule,
    CdkVirtualScrollViewport,
    HttpClientModule,
  ],
})
export class MachinesModule {}
