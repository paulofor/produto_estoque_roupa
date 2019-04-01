
/* tslint:disable */
import {
	Fornecedor,
	Produto,
} from '../index';

declare var Object: any;
export interface MovimentoEntradaInterface {
	"id"?: number;
	"data"?: Date;
	"precoUnitario"?: number;
	"quantidade"?: number;
	"precoTotal"?: number;
	fornecedor?: Fornecedor;
	produto?: Produto;
}

export class MovimentoEntrada implements MovimentoEntradaInterface {
	id?: number;
	data?: Date;
	precoUnitario?: number;
	quantidade?: number;
	precoTotal?: number;
	fornecedor?: Fornecedor;
	produto?: Produto;
  constructor(data?: MovimentoEntradaInterface) {
    Object.assign(this, data);
  }
  /**
   * The name of the model represented by this $resource,
   * i.e. `GanhoDorCanvasMySql`.
   */
  public static getModelName() {
    return "MovimentoEntrada";
  }
  /**
  * @method factory
  * @author Gerador Java 
  * @license MIT
  * This method creates an instance of MovimentoEntrada for dynamic purposes.
  **/
  public static factory(data: MovimentoEntradaInterface): MovimentoEntrada{
    return new MovimentoEntrada(data);
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
      name: 'MovimentoEntrada',
      plural: 'MovimentoEntradas',
      path: 'MovimentoEntradas',
      idName: 'id',
      properties: {
		
        "id" : {
        	name : "id",
        	type : "number"
        },
        "data" : {
        	name : "data",
        	type : "Date"
        },
        "precoUnitario" : {
        	name : "precoUnitario",
        	type : "number"
        },
        "quantidade" : {
        	name : "quantidade",
        	type : "number"
        },
        "precoTotal" : {
        	name : "precoTotal",
        	type : "number"
        },
      },
      relations: {
      }
    }
  }
}