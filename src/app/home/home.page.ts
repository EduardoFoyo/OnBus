import { Component } from '@angular/core';
import { NavController } from '@ionic/angular';
<<<<<<< HEAD
import { UserService } from '../api/user.service';
=======
import { AlertController, } from '@ionic/angular';
import {Directive, ElementRef, Input, OnInit, OnDestroy} from 'angular2/core';
import {Gesture} from 'ionic-angular/gestures/gesture';


>>>>>>> 12bc0d59af60819b007f80606d079343160e5281

@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss'],
})
export class HomePage {

  users: any;
  constructor(
    private navCtrl: NavController,
<<<<<<< HEAD
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
=======
    private alertCtrl: AlertController
  ) {}
>>>>>>> 12bc0d59af60819b007f80606d079343160e5281


  push(){
    this.navCtrl.navigateForward('/prueba');
  }

  async presentAlert(e) {
    const alert = await this.alertCtrl.create({
    message: 'Tu reporte fue enviado. Será atendido con urgencia.',
    subHeader: 'REPORTE ENVIADO',
    buttons: ['Aceptar']
   });
   await alert.present(); 
  }
}



