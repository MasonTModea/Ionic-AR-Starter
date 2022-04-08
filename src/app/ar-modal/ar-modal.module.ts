import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { ArModalPageRoutingModule } from './ar-modal-routing.module';

import { ArModalPage } from './ar-modal.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    ArModalPageRoutingModule
  ],
  declarations: [ArModalPage]
})
export class ArModalPageModule {}
