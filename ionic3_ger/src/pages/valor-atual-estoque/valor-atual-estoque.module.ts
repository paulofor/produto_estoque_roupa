

import { NgModule } from '@angular/core';
import { TranslateModule } from '@ngx-translate/core';
import { IonicPageModule } from 'ionic-angular';

import { ValorAtualEstoquePage } from './valor-atual-estoque';

@NgModule({
  declarations: [
    ValorAtualEstoquePage,
  ],
  imports: [
    IonicPageModule.forChild(ValorAtualEstoquePage),
    TranslateModule.forChild()
  ],
  exports: [
    ValorAtualEstoquePage
  ]
})
export class ValorAtualEstoquePageModule { }
