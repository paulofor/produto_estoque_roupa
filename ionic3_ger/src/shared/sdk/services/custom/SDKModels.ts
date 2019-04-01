
import { Injectable } from '@angular/core';
import { Container } from '../../models/Container';
import { User } from '../../models/User';
import { Produto } from '../../models/Produto';
import { MovimentoEntrada } from '../../models/MovimentoEntrada';
import { MovimentoSaida } from '../../models/MovimentoSaida';
import { Fornecedor } from '../../models/Fornecedor';
import { Cliente } from '../../models/Cliente';
import { EstoqueProduto } from '../../models/EstoqueProduto';
import { ContatoFornecedor } from '../../models/ContatoFornecedor';
export interface Models { [name: string]: any }

@Injectable()
export class SDKModels {

  private models: Models = {
	Produto: Produto,
	MovimentoEntrada: MovimentoEntrada,
	MovimentoSaida: MovimentoSaida,
	Fornecedor: Fornecedor,
	Cliente: Cliente,
	EstoqueProduto: EstoqueProduto,
	ContatoFornecedor: ContatoFornecedor,
	User: User,
    Container: Container
  };

  public get(modelName: string): any {
    return this.models[modelName];
  }

  public getAll(): Models {
    return this.models;
  }

  public getModelNames(): string[] {
    return Object.keys(this.models);
  }
}
