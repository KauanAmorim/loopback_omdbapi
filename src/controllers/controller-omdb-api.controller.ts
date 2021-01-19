import {inject} from '@loopback/context';
import {get, post, param, getModelSchemaRef, requestBody} from '@loopback/rest';
import {ServiceOmdbApi} from '../services';
import {Historymodel} from '../models';
import {HistorymodelRepository} from '../repositories';

export class ControllerOmdbApiController {
  constructor(
    @inject('services.ServiceOmdbApi')
    protected omdbapiService: ServiceOmdbApi
  ) {}

  @post('/query', {
    responses: {
      200: {
        description: "post query",
        content: { 'application/json': { schema: getModelSchemaRef(Historymodel) } }
      }
    }
  })
  //ts-lint:disable-next-line: no-any
  async query(
    @requestBody({
      content: {
        'application/json': {
          schema: getModelSchemaRef(Historymodel, { exclude: ['id']})
        }
      }
    })
    history: Omit<Historymodel, 'id'>
  ): Promise<Historymodel> 
  {
    // return history.movie_title;
    console.log(`Calling OmdbApi Service for movie/show: ${history.movie_title}`);
    let data = await this.callOmdbapi(history.movie_title)
    return data;
  }

  async callOmdbapi(title: string): Promise<any> 
  {
    return await this.omdbapiService.query(title);
  }
}
