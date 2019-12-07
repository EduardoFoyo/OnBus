import { Component } from '@angular/core';
import { NavController } from '@ionic/angular';
import { AlertController, } from '@ionic/angular';
import {Directive, ElementRef, Input, OnInit, OnDestroy} from 'angular2/core';
import {Gesture} from 'ionic-angular/gestures/gesture';



@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss'],
})
export class HomePage {

  constructor(
    private navCtrl: NavController,
    private alertCtrl: AlertController
  ) {}


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



