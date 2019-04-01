
/* tslint:disable */
import {
	MovimentoEntrada,
	Produto,
	ContatoFornecedor,
} from '../index';

declare var Object: any;
export interface FornecedorInterface {
	"id"?: number;
	"nome"?: string;
	"site"?: string;
	"endereco"?: string;
	listaMovimentoEntrada?: MovimentoEntrada[];
	listaProduto?: Produto[];
	listaContatoFornecedor?: ContatoFornecedor[];
}

export class Fornecedor implements FornecedorInterface {
	id?: number;
	nome?: string;
	site?: string;
	endereco?: string;
	listaMovimentoEntrada?: MovimentoEntrada[];
	listaProduto?: Produto[];
	listaContatoFornecedor?: ContatoFornecedor[];
  constructor(data?: FornecedorInterface) {
    Object.assign(this, data);
  }
  /**
   * The name of the model represented by this $resource,
   * i.e. `GanhoDorCanvasMySql`.
   */
  public static getModelName() {
    return "Fornecedor";
  }
  /**
  * @method factory
  * @author Gerador Java 
  * @license MIT
  * This method creates an instance of Fornecedor for dynamic purposes.
  **/
  public static factory(data: FornecedorInterface): Fornecedor{
    return new Fornecedor(data);
  }
  /**
  * @method getModelDefinition
  * @author Gerador Java
  * @license MIT
  * This method returns an object that represents some of the model
  * definitions.
  **/
  public static getModelDefinition() {
    return {
      name: 'Fornecedor',
      plural: 'Fornecedors',
      path: 'Fornecedors',
      idName: 'id',
      properties: {
		
        "id" : {
        	name : "id",
        	type : "number"
        },
        "nome" : {
        	name : "nome",
        	type : "string"
        },
        "site" : {
        	name : "site",
        	type : "string"
        },
        "endereco" : {
        	name : "endereco",
        	type : "string"
        },
      },
      relations: {
      }
    }
  }
}