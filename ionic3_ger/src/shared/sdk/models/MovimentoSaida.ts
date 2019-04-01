
/* tslint:disable */
import {
	Cliente,
	Produto,
} from '../index';

declare var Object: any;
export interface MovimentoSaidaInterface {
	"id"?: number;
	"quantidade"?: number;
	"valorUnitario"?: number;
	"valorTotal"?: number;
	"data"?: Date;
	cliente?: Cliente;
	produto?: Produto;
}

export class MovimentoSaida implements MovimentoSaidaInterface {
	id?: number;
	quantidade?: number;
	valorUnitario?: number;
	valorTotal?: number;
	data?: Date;
	cliente?: Cliente;
	produto?: Produto;
  constructor(data?: MovimentoSaidaInterface) {
    Object.assign(this, data);
  }
  /**
   * The name of the model represented by this $resource,
   * i.e. `GanhoDorCanvasMySql`.
   */
  public static getModelName() {
    return "MovimentoSaida";
  }
  /**
  * @method factory
  * @author Gerador Java 
  * @license MIT
  * This method creates an instance of MovimentoSaida for dynamic purposes.
  **/
  public static factory(data: MovimentoSaidaInterface): MovimentoSaida{
    return new MovimentoSaida(data);
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
      name: 'MovimentoSaida',
      plural: 'MovimentoSaidas',
      path: 'MovimentoSaidas',
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
        "valorUnitario" : {
        	name : "valorUnitario",
        	type : "number"
        },
        "valorTotal" : {
        	name : "valorTotal",
        	type : "number"
        },
        "data" : {
        	name : "data",
        	type : "Date"
        },
      },
      relations: {
      }
    }
  }
}