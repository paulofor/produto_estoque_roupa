
/* tslint:disable */
import {
} from '../index';

declare var Object: any;
export interface EstoqueProdutoInterface {
}

export class EstoqueProduto implements EstoqueProdutoInterface {
  constructor(data?: EstoqueProdutoInterface) {
    Object.assign(this, data);
  }
  /**
   * The name of the model represented by this $resource,
   * i.e. `GanhoDorCanvasMySql`.
   */
  public static getModelName() {
    return "EstoqueProduto";
  }
  /**
  * @method factory
  * @author Gerador Java 
  * @license MIT
  * This method creates an instance of EstoqueProduto for dynamic purposes.
  **/
  public static factory(data: EstoqueProdutoInterface): EstoqueProduto{
    return new EstoqueProduto(data);
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
      name: 'EstoqueProduto',
      plural: 'EstoqueProdutos',
      path: 'EstoqueProdutos',
      idName: 'id',
      properties: {
		
      },
      relations: {
      }
    }
  }
}