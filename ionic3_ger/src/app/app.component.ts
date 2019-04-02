
import { Component, ViewChild } from '@angular/core';
import { Nav, Platform } from 'ionic-angular';
import { StatusBar } from '@ionic-native/status-bar';
import { SplashScreen } from '@ionic-native/splash-screen';

import { HomePage } from '../pages/home/home';
import { CadastroEntradaPage } from '../pages/cadastro-entrada/cadastro-entrada';
import { MovimentacaoProdutoPage } from '../pages/movimentacao-produto/movimentacao-produto';
import { CadastroProdutoPage } from '../pages/cadastro-produto/cadastro-produto';
import { CadastroFornecedorPage } from '../pages/cadastro-fornecedor/cadastro-fornecedor';
import { ListaProdutoFornecedorPage } from '../pages/lista-produto-fornecedor/lista-produto-fornecedor';
import { ValorAtualEstoquePage } from '../pages/valor-atual-estoque/valor-atual-estoque';


@Component({
  templateUrl: 'app.html'
})
export class MyApp {
  @ViewChild(Nav) nav: Nav;

  rootPage: any = HomePage;

  pages: Array<{title: string, component: any}>;

  constructor(public platform: Platform, public statusBar: StatusBar, public splashScreen: SplashScreen) {
    this.initializeApp();

    // used for an example of ngFor and navigation
    this.pages = [
	
      { title: 'CadastroEntrada' , component: CadastroEntradaPage},
	
      { title: 'MovimentacaoProduto' , component: MovimentacaoProdutoPage},
	
      { title: 'CadastroProduto' , component: CadastroProdutoPage},
	
      { title: 'CadastroFornecedor' , component: CadastroFornecedorPage},
	
      { title: 'ListaProdutoFornecedor' , component: ListaProdutoFornecedorPage},
	
      { title: 'ValorAtualEstoque' , component: ValorAtualEstoquePage},
	
     ];

  }

  initializeApp() {
    this.platform.ready().then(() => {
      // Okay, so the platform is ready and our plugins are available.
      // Here you can do any higher level native things you might need.
      this.statusBar.styleDefault();
      this.splashScreen.hide();
    });
  }

  openPage(page) {
    // Reset the content nav to have just this page
    // we wouldn't want the back button to show in this scenario
    this.nav.push(page.component);
  }
}
