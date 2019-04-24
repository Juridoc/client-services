/*!
 * Copyright (C) 2018-2019 Juridoc
 */
import * as Class from '@singleware/class';
import * as RestDB from '@singleware/restdb';

import * as Types from '../types';

import { Price } from './price';

/**
 * Services recurrence, entity class.
 */
@RestDB.Schema.Entity('services/recurrence')
@Class.Describe()
export class Recurrence extends Class.Null {
  /**
   * Recurrence type.
   */
  @RestDB.Schema.Required()
  @RestDB.Schema.Enumeration(Object.values(Types.Recurrence))
  @Class.Public()
  public type!: Types.Recurrence;

  /**
   * Recurrence prices.
   */
  @RestDB.Schema.Required()
  @RestDB.Schema.Array(Price)
  @Class.Public()
  public priceList!: Price[];

  /**
   * Get the recurrence price.
   */
  @Class.Public()
  public get price() {
    return this.getPriceBySeat(Types.Seat.Internal.Creator).total;
  }

  /**
   * Get the recurrence base price.
   */
  @Class.Public()
  public get base() {
    return this.getPriceBySeat(Types.Seat.Internal.Creator).base;
  }

  /**
   * Get the price entity that corresponds to the specified seat type.
   * @param type Seat type.
   * @returns Returns the price entity.
   * @throws Throws an error when the price entity isn't found.
   */
  @Class.Public()
  public getPriceBySeat(type: string): Price {
    const entity = this.priceList.find((price) => price.type === type);
    if (entity === void 0) {
      throw new TypeError(`Price entity '${type}' doesn't found.`);
    }
    return entity;
  }
}
