

import { NgModule } from '@angular/core';
import { TranslateModule } from '@ngx-translate/core';
import { IonicPageModule } from 'ionic-angular';

import { ListaProdutoFornecedorPage } from './lista-produto-fornecedor';

@NgModule({
  declarations: [
    ListaProdutoFornecedorPage,
  ],
  imports: [
    IonicPageModule.forChild(ListaProdutoFornecedorPage),
    TranslateModule.forChild()
  ],
  exports: [
    ListaProdutoFornecedorPage
  ]
})
export class ListaProdutoFornecedorPageModule { }
