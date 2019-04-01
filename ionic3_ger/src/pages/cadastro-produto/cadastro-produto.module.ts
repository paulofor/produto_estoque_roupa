

import { NgModule } from '@angular/core';
import { TranslateModule } from '@ngx-translate/core';
import { IonicPageModule } from 'ionic-angular';

import { CadastroProdutoPage } from './cadastro-produto';

@NgModule({
  declarations: [
    CadastroProdutoPage,
  ],
  imports: [
    IonicPageModule.forChild(CadastroProdutoPage),
    TranslateModule.forChild()
  ],
  exports: [
    CadastroProdutoPage
  ]
})
export class CadastroProdutoPageModule { }
