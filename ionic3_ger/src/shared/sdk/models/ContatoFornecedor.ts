
/* tslint:disable */
import {
	Fornecedor,
} from '../index';

declare var Object: any;
export interface ContatoFornecedorInterface {
	"id"?: number;
	"nome"?: string;
	"telefone"?: string;
	fornecedor?: Fornecedor;
}

export class ContatoFornecedor implements ContatoFornecedorInterface {
	id?: number;
	nome?: string;
	telefone?: string;
	fornecedor?: Fornecedor;
  constructor(data?: ContatoFornecedorInterface) {
    Object.assign(this, data);
  }
  /**
   * The name of the model represented by this $resource,
   * i.e. `GanhoDorCanvasMySql`.
   */
  public static getModelName() {
    return "ContatoFornecedor";
  }
  /**
  * @method factory
  * @author Gerador Java 
  * @license MIT
  * This method creates an instance of ContatoFornecedor for dynamic purposes.
  **/
  public static factory(data: ContatoFornecedorInterface): ContatoFornecedor{
    return new ContatoFornecedor(data);
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
      name: 'ContatoFornecedor',
      plural: 'ContatoFornecedors',
      path: 'ContatoFornecedors',
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
        "telefone" : {
        	name : "telefone",
        	type : "string"
        },
      },
      relations: {
      }
    }
  }
}