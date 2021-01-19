import {inject} from '@loopback/context';
import {get, param} from '@loopback/rest';
import {ServiceOmdbApi} from '../services';

export class ControllerOmdbApiController {
  constructor(
    @inject('services.ServiceOmdbApi')
    protected omdbapiService: ServiceOmdbApi,
  ) {}

  @get('/query/{title}')
  //ts-lint:disable-next-line: no-any
  async query(@param.path.string('title') title: string): Promise<any> 
  {
    const titleArray: Array<string> = title.split(' ');
    const requestTitle: string = titleArray.join('+');
    console.log(`Calling OmdbApi Service for movie/show: ${title}`);
    return await this.callOmdbapi(requestTitle);
  }

  async callOmdbapi(title: string): Promise<any> 
  {
    return await this.omdbapiService.query(title);
  }
}
