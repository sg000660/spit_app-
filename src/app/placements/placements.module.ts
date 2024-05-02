import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { PlacementsPageRoutingModule } from './placements-routing.module';

import { PlacementsPage } from './placements.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    PlacementsPageRoutingModule
  ],
  declarations: [PlacementsPage]
})
export class PlacementsPageModule {}
