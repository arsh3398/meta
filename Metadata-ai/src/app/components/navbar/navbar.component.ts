import { Component } from '@angular/core';
import {faBars, faX} from '@fortawesome/free-solid-svg-icons'
@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.scss']
})
export class NavbarComponent {
  icon=faBars;
  isActive=false;
  styles={'height':'100vh', 'display':'block'}
  
  displayChange(){
    if (this.isActive==false && this.icon==faBars) {
      this.isActive=true
      this.icon=faX
    } else {
      this.isActive=false
      this.icon=faBars
    }
  }
  closeNav(){
    this.isActive=false;
    this.icon=faBars
  }

}
