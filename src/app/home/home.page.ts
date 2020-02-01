import { Component } from '@angular/core';
import { Router} from '@angular/router'
import { NavController } from "@ionic/angular";
import { AppareilsPage } from '../appareils/appareils.page';


@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss'],
})
export class HomePage {

  constructor(public router:Router) {}

  navigateTo(){
    this.router.navigate(['/appareils'])
 
  }
}
