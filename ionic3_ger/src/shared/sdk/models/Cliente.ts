
/* tslint:disable */
import {
	MovimentoSaida,
} from '../index';

declare var Object: any;
export interface ClienteInterface {
	"nome"?: string;
	"id"?: number;
	listaMovimentoSaida?: MovimentoSaida[];
}

export class Cliente implements ClienteInterface {
	nome?: string;
	id?: number;
	listaMovimentoSaida?: MovimentoSaida[];
  constructor(data?: ClienteInterface) {
    Object.assign(this, data);
  }
  /**
   * The name of the model represented by this $resource,
   * i.e. `GanhoDorCanvasMySql`.
   */
  public static getModelName() {
    return "Cliente";
  }
  /**
  * @method factory
  * @author Gerador Java 
  * @license MIT
  * This method creates an instance of Cliente for dynamic purposes.
  **/
  public static factory(data: ClienteInterface): Cliente{
    return new Cliente(data);
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
      name: 'Cliente',
      plural: 'Clientes',
      path: 'Clientes',
      idName: 'id',
      properties: {
		
        "nome" : {
        	name : "nome",
        	type : "string"
        },
        "id" : {
        	name : "id",
        	type : "number"
        },
      },
      relations: {
      }
    }
  }
}