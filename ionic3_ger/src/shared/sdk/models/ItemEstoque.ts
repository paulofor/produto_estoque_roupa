
/* tslint:disable */
import {
	EstoqueProduto,
	Produto,
} from '../index';

declare var Object: any;
export interface ItemEstoqueInterface {
	"id"?: number;
	"quantidade"?: number;
	"valorTotal"?: number;
	"valorMedio"?: number;
	estoqueProduto?: EstoqueProduto;
	produto?: Produto;
}

export class ItemEstoque implements ItemEstoqueInterface {
	id?: number;
	quantidade?: number;
	valorTotal?: number;
	valorMedio?: number;
	estoqueProduto?: EstoqueProduto;
	produto?: Produto;
  constructor(data?: ItemEstoqueInterface) {
    Object.assign(this, data);
  }
  /**
   * The name of the model represented by this $resource,
   * i.e. `GanhoDorCanvasMySql`.
   */
  public static getModelName() {
    return "ItemEstoque";
  }
  /**
  * @method factory
  * @author Gerador Java 
  * @license MIT
  * This method creates an instance of ItemEstoque for dynamic purposes.
  **/
  public static factory(data: ItemEstoqueInterface): ItemEstoque{
    return new ItemEstoque(data);
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
      name: 'ItemEstoque',
      plural: 'ItemEstoques',
      path: 'ItemEstoques',
      idName: 'id',
      properties: {
		
        "id" : {
        	name : "id",
        	type : "number"
        },
        "quantidade" : {
        	name : "quantidade",
        	type : "number"
        },
        "valorTotal" : {
        	name : "valorTotal",
        	type : "number"
        },
        "valorMedio" : {
        	name : "valorMedio",
        	type : "number"
        },
      },
      relations: {
      }
    }
  }
}