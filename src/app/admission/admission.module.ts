import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { AdmissionPageRoutingModule } from './admission-routing.module';

import { AdmissionPage } from './admission.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    AdmissionPageRoutingModule
  ],
  declarations: [AdmissionPage]
})
export class AdmissionPageModule {}
