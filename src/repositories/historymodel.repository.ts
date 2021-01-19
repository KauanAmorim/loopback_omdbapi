import {DefaultCrudRepository} from '@loopback/repository';
import {Historymodel, HistorymodelRelations} from '../models';
import {OmdbapiMysqlDataSource} from '../datasources';
import {inject} from '@loopback/core';

export class HistorymodelRepository extends DefaultCrudRepository<
  Historymodel,
  typeof Historymodel.prototype.id,
  HistorymodelRelations
> {
  constructor(
    @inject('datasources.omdbapi_mysql') dataSource: OmdbapiMysqlDataSource,
  ) {
    super(Historymodel, dataSource);
  }
}
