import {inject, Provider} from '@loopback/core';
import {getService} from '@loopback/service-proxy';
import {DsOmdbApiDataSource} from '../datasources';

export interface ServiceOmdbApi {
  query(title: string): Promise<any>;
}

export class ServiceOmdbApiProvider implements Provider<ServiceOmdbApi> {
  constructor(
    // dsOmdbApi must match the name property in the datasource json file
    @inject('datasources.dsOmdbApi')
    protected dataSource: DsOmdbApiDataSource = new DsOmdbApiDataSource(),
  ) { }

  value(): Promise<ServiceOmdbApi> {
    return getService(this.dataSource);
  }
}
