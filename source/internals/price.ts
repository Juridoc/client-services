/*!
 * Copyright (C) 2018-2019 Juridoc
 */
import * as Class from '@singleware/class';
import * as RestDB from '@singleware/restdb';

import * as Types from '../types';

/**
 * Services price, entity class.
 */
@RestDB.Schema.Entity('services/price')
@Class.Describe()
export class Price extends Class.Null {
  /**
   * Seat type.
   */
  @RestDB.Schema.Required()
  @RestDB.Schema.Enumeration([...Object.values(Types.Seat.Internal), ...Object.values(Types.Seat.External)])
  @Class.Public()
  public type!: Types.AnySeat;

  /**
   * Total price.
   */
  @RestDB.Schema.Required()
  @RestDB.Schema.Number()
  @Class.Public()
  public total!: number;

  /**
   * Base price.
   */
  @RestDB.Schema.Required()
  @RestDB.Schema.Number()
  @Class.Public()
  public base!: number;
}
