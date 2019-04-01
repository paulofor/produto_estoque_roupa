

import { NgModule } from '@angular/core';
import { TranslateModule } from '@ngx-translate/core';
import { IonicPageModule } from 'ionic-angular';

import { MovimentacaoProdutoPage } from './movimentacao-produto';

@NgModule({
  declarations: [
    MovimentacaoProdutoPage,
  ],
  imports: [
    IonicPageModule.forChild(MovimentacaoProdutoPage),
    TranslateModule.forChild()
  ],
  exports: [
    MovimentacaoProdutoPage
  ]
})
export class MovimentacaoProdutoPageModule { }
