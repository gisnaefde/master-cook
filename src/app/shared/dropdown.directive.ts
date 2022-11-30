import { Directive , HostBinding , HostListener} from '@angular/core';

@Directive({ selector: '[appDropdown]' }) //selector ini agar bisa di masukan kedalam tag html
export class DropdownDirective {
  @HostBinding('class.open') //menambahkan class open
  isOpen = false;

  @HostListener('click') toggleOpen() { //untuk mendapatkan informasi click
    this.isOpen = !this.isOpen;
  }
}

