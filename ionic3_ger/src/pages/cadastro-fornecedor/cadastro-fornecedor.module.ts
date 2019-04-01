

import { NgModule } from '@angular/core';
import { TranslateModule } from '@ngx-translate/core';
import { IonicPageModule } from 'ionic-angular';

import { CadastroFornecedorPage } from './cadastro-fornecedor';

@NgModule({
  declarations: [
    CadastroFornecedorPage,
  ],
  imports: [
    IonicPageModule.forChild(CadastroFornecedorPage),
    TranslateModule.forChild()
  ],
  exports: [
    CadastroFornecedorPage
  ]
})
export class CadastroFornecedorPageModule { }
