import {Entity, model, property} from '@loopback/repository';

@model({settings: {strict: false}})
export class Historymodel extends Entity {
  @property({
    type: 'number',
    id: true,
    generated: true,
  })
  id?: number;

  @property({
    type: 'string',
    required: true,
  })
  movie_title: string;

  // Define well-known properties here

  // Indexer property to allow additional data
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  [prop: string]: any;

  constructor(data?: Partial<Historymodel>) {
    super(data);
  }
}

export interface HistorymodelRelations {
  // describe navigational properties here
}

export type HistorymodelWithRelations = Historymodel & HistorymodelRelations;
