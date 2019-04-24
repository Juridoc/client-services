/*!
 * Copyright (C) 2018-2019 Juridoc
 */
import * as Class from '@singleware/class';
import * as Injection from '@singleware/injection';
import * as RestDB from '@singleware/restdb';

import * as ApiCore from '@juridoc/client-core';

import * as Requests from './requests';

import { Entity } from './entity';

/**
 * Services mapper class.
 */
@Injection.Describe({ singleton: true, name: 'services' })
@Class.Describe()
export class Mapper extends Class.Null {
  /**
   * Client instance.
   */
  @Injection.Inject(ApiCore.Client)
  @Class.Private()
  private client!: ApiCore.Client;

  /**
   * Mapper instance.
   */
  @Class.Private()
  private mapper = new RestDB.Mapper<Entity>(this.client, Entity);

  /**
   * Get the error entity from the last operation.
   */
  @Class.Public()
  public get error(): ApiCore.Entities.Error | undefined {
    return this.client.error;
  }

  /**
   * Subscribe to the entity that corresponds to the specified Id using the given subscription request.
   * @param id Service Id.
   * @param request Service subscription request.
   * @returns Returns a promise to get true when the subscription was updated, false otherwise.
   * @throws Throws an error when the service wasn't found.
   */
  @Class.Public()
  public async subscribe(id: string, request: Requests.Subscribe): Promise<boolean> {
    return (await this.mapper.updateByIdEx(Requests.Subscribe, id, request))!;
  }

  /**
   * Load the service that corresponds to the specified service Id.
   * @param id Service Id.
   * @param fields Fields to be selected.
   * @returns Returns a promise to get the service entity.
   * @throws Throws an error when the service wasn't found.
   */
  @Class.Public()
  public async load(id: string, fields?: string[]): Promise<Entity> {
    return (await this.mapper.findById(id, fields))!;
  }

  /**
   * List all services that corresponds to the specified filter.
   * @param query Query filter.
   * @param fields Fields to be selected.
   * @returns Returns a promise to get the service list or undefined when an error occurs.
   */
  @Class.Public()
  public async list(query: RestDB.Query, fields?: string[]): Promise<Entity[] | undefined> {
    return await this.mapper.find(query, fields);
  }

  /**
   * Count all services that corresponds to the specified filter.
   * @param query Query filter.
   * @returns Returns a promise to get the number of services or undefined when an error occurs.
   */
  @Class.Public()
  public async count(query: RestDB.Query): Promise<number | undefined> {
    return await this.mapper.count(query);
  }
}
