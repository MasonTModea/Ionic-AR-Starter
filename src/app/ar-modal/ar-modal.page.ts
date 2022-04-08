import { Component, OnInit } from '@angular/core';
import {ModalController} from '@ionic/angular';

@Component({
  selector: 'app-ar-modal',
  templateUrl: './ar-modal.page.html',
  styleUrls: ['./ar-modal.page.scss'],
})
export class ArModalPage implements OnInit {

  constructor(private modalCtrl: ModalController) { }
  ngOnInit() {
  }
  close(){
    this.modalCtrl.dismiss();
  }

}
