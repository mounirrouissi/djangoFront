import { Directive, HostBinding, HostListener, Input } from '@angular/core';

@Directive({ selector: '[mwFavorite]' })
export class favoriteDirective {

  @HostBinding('class.is-saturated') saturated=true;
  @HostBinding("class.is-favorite-hovering") hover=false;
  @HostBinding("class.is-favorite-clicked") clicked=false;

  @HostListener("mouseclick") onMouseClick(){
    this.clicked=true;
  }

  @HostListener('mouseenter') onMouseEnter(){
    this.hover=true;
  }
  @HostListener("mouseleave") onMouseLeave(){
    this.hover=false;
  }
@Input() set mwFavorite(value)
{
  this.saturated=value;
}

}
