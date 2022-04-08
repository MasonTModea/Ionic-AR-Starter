import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { ArModalPage } from './ar-modal.page';

const routes: Routes = [
  {
    path: '',
    component: ArModalPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class ArModalPageRoutingModule {}
