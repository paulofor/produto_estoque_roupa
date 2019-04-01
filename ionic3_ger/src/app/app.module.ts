
import { BrowserModule } from '@angular/platform-browser';
import { ErrorHandler, NgModule } from '@angular/core';
import { IonicApp, IonicErrorHandler, IonicModule } from 'ionic-angular';
import { HttpClientModule } from '@angular/common/http';
import { SocketDriver } from '../shared/sdk/sockets/socket.driver';
import { SDKBrowserModule, SDKModels, LoopBackAuth, InternalStorage } from '../shared/sdk';
import { MyApp } from './app.component';
import { HomePage } from '../pages/home/home';
import { Screenshot } from '@ionic-native/screenshot';
import { ChartsModule } from 'ng2-charts';
import { CadastroEntradaPage } from '../pages/cadastro-entrada/cadastro-entrada';
import { MovimentacaoProdutoPage } from '../pages/movimentacao-produto/movimentacao-produto';
import { CadastroProdutoPage } from '../pages/cadastro-produto/cadastro-produto';
import { CadastroFornecedorPage } from '../pages/cadastro-fornecedor/cadastro-fornecedor';
import { ListaProdutoFornecedorPage } from '../pages/lista-produto-fornecedor/lista-produto-fornecedor';

import { StatusBar } from '@ionic-native/status-bar';
import { SplashScreen } from '@ionic-native/splash-screen';
import { ProdutoApi } from '../shared/sdk';
import { MovimentoEntradaApi } from '../shared/sdk';
import { MovimentoSaidaApi } from '../shared/sdk';
import { FornecedorApi } from '../shared/sdk';
import { ClienteApi } from '../shared/sdk';
import { EstoqueProdutoApi } from '../shared/sdk';
import { ContatoFornecedorApi } from '../shared/sdk';


@NgModule({
  declarations: [
    MyApp,
    HomePage,
    CadastroEntradaPage,
	
    MovimentacaoProdutoPage,
	
    CadastroProdutoPage,
	
    CadastroFornecedorPage,
	
    ListaProdutoFornecedorPage,
	
  ],
  imports: [
    BrowserModule,
    IonicModule.forRoot(MyApp),
    HttpClientModule,
    SDKBrowserModule.forRoot(),
    ChartsModule
  ],
  bootstrap: [IonicApp],
  entryComponents: [
    MyApp,
    HomePage,
    CadastroEntradaPage,
	
    MovimentacaoProdutoPage,
	
    CadastroProdutoPage,
	
    CadastroFornecedorPage,
	
    ListaProdutoFornecedorPage,
	
  ],
  providers: [
    StatusBar,
    SplashScreen,
    {provide: ErrorHandler, useClass: IonicErrorHandler},
    SocketDriver,
    SDKModels,
    LoopBackAuth,
    InternalStorage,
	ProdutoApi,
	
	MovimentoEntradaApi,
	
	MovimentoSaidaApi,
	
	FornecedorApi,
	
	ClienteApi,
	
	EstoqueProdutoApi,
	
	ContatoFornecedorApi,
	
    Screenshot
  ]
})
export class AppModule {}
