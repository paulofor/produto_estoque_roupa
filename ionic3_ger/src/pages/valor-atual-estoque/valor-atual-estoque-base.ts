


import { Component } from '@angular/core';
import { IonicPage, ModalController, NavController } from 'ionic-angular';
import { Screenshot } from '@ionic-native/screenshot';


import { EstoqueProduto, EstoqueProdutoApi } from '../../shared/sdk';


export abstract class ValorAtualEstoquePageBase {

  protected item: EstoqueProduto;

  constructor(protected navCtrl: NavController, protected srv: EstoqueProdutoApi, 
  				 protected screenshot: Screenshot) {
  }

  //protected abstract getLista();
  
  protected carrega() {
    this.srv.getValorAtualEstoquePageLoad()
      .subscribe((result: EstoqueProduto) => {
        console.log('Result', JSON.stringify(result));
        this.item = result;
      });
  }
  
   
  protected carregaPrototipo() {
    this.srv.getValorAtualEstoquePageLoad()
      .subscribe((result: EstoqueProduto) => {
        console.log('Result-Prototipo', JSON.stringify(result));
        this.item = result;
      });
  }
  
  protected testaFoto() {
    this.screenshot.save('jpg', 100, 'ValorAtualEstoquePage');
  }

  
}
