

import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SDKBrowserModule, SDKModels, LoopBackAuth, InternalStorage } from '../shared/sdk';
import { HttpClientModule } from '@angular/common/http';
import { SocketDriver } from '../shared/sdk/sockets/socket.driver';

import { ProdutoApi } from '../shared/sdk';
import { MovimentoEntradaApi } from '../shared/sdk';
import { MovimentoSaidaApi } from '../shared/sdk';
import { FornecedorApi } from '../shared/sdk';
import { ClienteApi } from '../shared/sdk';
import { EstoqueProdutoApi } from '../shared/sdk';
import { ContatoFornecedorApi } from '../shared/sdk';


@NgModule({
	imports: [
		CommonModule,
		HttpClientModule,
		SDKBrowserModule.forRoot(),
	],
	providers: [
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
	],
	declarations: 
	[
	]
})
export class ServicoModule { }