

import { NgModule } from '@angular/core';
import { TranslateModule } from '@ngx-translate/core';
import { IonicPageModule } from 'ionic-angular';

import { CadastroEntradaPage } from './cadastro-entrada';

@NgModule({
  declarations: [
    CadastroEntradaPage,
  ],
  imports: [
    IonicPageModule.forChild(CadastroEntradaPage),
    TranslateModule.forChild()
  ],
  exports: [
    CadastroEntradaPage
  ]
})
export class CadastroEntradaPageModule { }
