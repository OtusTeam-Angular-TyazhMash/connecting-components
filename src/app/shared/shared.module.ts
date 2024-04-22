import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AvatarComponent } from './avatar/avatar.component';
import { AlertComponent } from './components/alert/alert.component';
import { HighlightDirective } from './directives/highlight.directive';



@NgModule({
  declarations: [AvatarComponent, AlertComponent, HighlightDirective ],
  imports: [
    CommonModule
  ],
  exports:[AvatarComponent, AlertComponent, HighlightDirective]
})
export class SharedModule { }
