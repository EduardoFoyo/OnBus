import { Component } from '@angular/core';
import { NavController } from '@ionic/angular';
import { UserService } from '../api/user.service';

@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss'],
})
export class HomePage {

  users: any;
  constructor(
    private navCtrl: NavController,
    //public restProvider: UserService
  ) {
    //this.getUsers();

  }

  /*getUsers() {
    this.restProvider.getUsers()
    .then(data => {
      this.users = data;
      console.log(this.users);
    });
  }*/


  push(){
    this.navCtrl.navigateForward('/prueba');
  }

}
