import { Component } from '@angular/core';
import { IonicPage, ModalController, NavController } from 'ionic-angular';
import { Screenshot } from '@ionic-native/screenshot';

import { MovimentoEntrada, MovimentoEntradaApi } from '../../shared/sdk';

@IonicPage()
@Component({
  selector: 'page-cadastro-entrada',
  templateUrl: 'cadastro-entrada.html'
})
export class CadastroEntradaPage {
  item: MovimentoEntrada;

  constructor(public navCtrl: NavController, public srv: MovimentoEntradaApi, 
  				private screenshot: Screenshot, public modalCtrl: ModalController) {
  }

  ionViewWillEnter() {
    console.log('ionViewWillEnter CadastroEntradaPage');
    this.carregaItem();
  }

  ionViewDidLoad() {
  	console.log('ionViewDidLoad CadastroEntradaPage');
  }
  
  carregaItem() {
    this.srv.obtemPrimeiro()
      .subscribe((result: MovimentoEntrada) => {
        console.log('Result', JSON.stringify(result));
        this.item = result;
      });
  }

  testaFoto() {
    this.screenshot.save('jpg', 100, 'CadastroEntradaPage');
  }
  
}
