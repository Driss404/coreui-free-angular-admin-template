import { Component, Input, HostListener } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';

import { ClassToggleService, HeaderComponent } from '@coreui/angular';

@Component({
  selector: 'app-default-header',
  templateUrl: './default-header.component.html',
  styleUrls: ['./default-header.component.scss'],
})
export class DefaultHeaderComponent extends HeaderComponent {

  // @Input() sidebarId: string = "sidebar";
  // public show: boolean= true;

  //
  isScrolled:boolean = false;

  public newMessages = new Array(4)
  public newTasks = new Array(5)
  public newNotifications = new Array(5)

  constructor(private classToggler: ClassToggleService) {
    super();

  }
  // hide(){ *ngIf="show"
  //   if(this.show == true){
  //     this.show = !this.show;
  //   } else {
  //     this.show = !this.show;
  //   }
  // }

  //
  @HostListener('window:scroll')
  onWindowScroll() {
    this.isScrolled = window.scrollY > 0;
  }

}
