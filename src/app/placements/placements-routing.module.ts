import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { PlacementsPage } from './placements.page';

const routes: Routes = [
  {
    path: '',
    component: PlacementsPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class PlacementsPageRoutingModule {}
