/*!
 * Copyright (C) 2018-2019 Juridoc
 */
import * as Class from '@singleware/class';
import * as RestDB from '@singleware/restdb';

import * as Internals from './internals';

/**
 * Services entity class.
 */
@RestDB.Schema.Entity('services')
@Class.Describe()
export class Entity extends Class.Null {
  /**
   * Service Id.
   */
  @RestDB.Schema.Primary()
  @RestDB.Schema.Id()
  @Class.Public()
  public id!: string;

  /**
   * Service addons.
   */
  @RestDB.Schema.Required()
  @RestDB.Schema.Array(String)
  @Class.Public()
  public addonsIdList!: string[];

  /**
   * Service roles.
   */
  @RestDB.Schema.Required()
  @RestDB.Schema.Array(String)
  @Class.Public()
  public rolesIdList!: string[];

  /**
   * Creation date.
   */
  @RestDB.Schema.Required()
  @RestDB.Schema.Date()
  @Class.Public()
  public createdAt!: Date;

  /**
   * Service title.
   */
  @RestDB.Schema.Required()
  @RestDB.Schema.String()
  @Class.Public()
  public title!: string;

  /**
   * Service weight.
   */
  @RestDB.Schema.Required()
  @RestDB.Schema.Number()
  @Class.Public()
  public weight!: number;

  /**
   * Service limits.
   */
  @RestDB.Schema.Required()
  @RestDB.Schema.Object(Internals.Limits)
  @Class.Public()
  public limits!: Internals.Limits;

  /**
   * Service feature list.
   */
  @RestDB.Schema.Array(String)
  @Class.Public()
  public featureList?: string[];

  /**
   * Service recurrence list.
   */
  @RestDB.Schema.Required()
  @RestDB.Schema.Array(Internals.Recurrence)
  @Class.Public()
  public recurrenceList!: Internals.Recurrence[];

  /**
   * Countries that support this service.
   */
  @RestDB.Schema.Required()
  @RestDB.Schema.Array(String)
  @Class.Public()
  public countryCodeList!: string[];

  /**
   * Get the service price.
   */
  @Class.Public()
  public get price() {
    return this.recurrenceList[0].price;
  }

  /**
   * Get the service base price.
   */
  @Class.Public()
  public get base() {
    return this.recurrenceList[0].base;
  }

  /**
   * Get the recurrence entity that corresponds to the specified recurrence type.
   * @param type Recurrence type.
   * @returns Returns the recurrence entity.
   * @throws Throws an error when the recurrence entity isn't found.
   */
  @Class.Public()
  public getRecurrenceByType(type: string): Internals.Recurrence {
    const entity = this.recurrenceList.find(recurrence => recurrence.type === type);
    if (entity === void 0) {
      throw new TypeError(`Recurrence entity '${type}' doesn't found.`);
    }
    return entity;
  }
}
