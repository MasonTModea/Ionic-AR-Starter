import { Component, OnInit, ViewEncapsulation } from '@angular/core';
import { ModalController } from '@ionic/angular';
import {ArModalPage} from '../ar-modal/ar-modal.page';
@Component({
  selector: 'app-home',
  templateUrl: './home.page.html',
  styleUrls: ['./home.page.scss'],
  encapsulation: ViewEncapsulation.None
})
export class HomePage implements OnInit {
  constructor(private modalController: ModalController) { }
  ngOnInit() {
  }

  async launchArModal(){
    const modal = await this.modalController.create({
      component: ArModalPage,
    });
    return await modal.present();
  }
}
