import { Directive, HostBinding, HostListener } from '@angular/core';

@Directive({
  selector: '[appHighlight]'
})
export class HighlightDirective {
  @HostBinding('style.backgroundColor') backColor: string| undefined;
  
  @HostListener('mouseenter') onMouseEnter(){
    this.backColor = "green";
  }

  @HostListener('mouseleave') onMouseLeave(){
    this.backColor ='';
  }

}
