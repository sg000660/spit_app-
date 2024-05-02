import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { AdmissionPage } from './admission.page';

const routes: Routes = [
  {
    path: '',
    component: AdmissionPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class AdmissionPageRoutingModule {}
