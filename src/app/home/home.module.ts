import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { IonicModule } from '@ionic/angular';
import { RouterModule } from '@angular/router';



import { HttpClientModule } from '@angular/common/http';




import { HomePage } from './home.page';
import { GoogleMapsComponent } from '../google-maps/google-maps.component';


@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    HttpClientModule,
    RouterModule.forChild([
      {
        path: '',
        component: HomePage
      }
    ])
  ],
  declarations: [HomePage, GoogleMapsComponent]
})
export class HomePageModule {}
