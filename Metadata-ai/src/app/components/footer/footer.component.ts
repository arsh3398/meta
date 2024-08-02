import { Component } from '@angular/core';
import {faFacebook,faTwitter,faInstagram,faLinkedin} from '@fortawesome/free-brands-svg-icons'

@Component({
  selector: 'app-footer',
  templateUrl: './footer.component.html',
  styleUrls: ['./footer.component.scss']
})
export class FooterComponent {
  faFacebook=faFacebook;
  faTwitter=faTwitter;
  faInstagram=faInstagram;
  faLinkedin=faLinkedin;
}
