/*!
 * Copyright (C) 2018-2019 Juridoc
 */
import * as Class from '@singleware/class';
import * as RestDB from '@singleware/restdb';

/**
 * Services limits, entity class.
 */
@RestDB.Schema.Entity('services/limits')
@Class.Describe()
export class Limits extends Class.Null {
  /**
   * Max seats.
   */
  @RestDB.Schema.Required()
  @RestDB.Schema.Number(1)
  @Class.Public()
  public seats!: number;

  /**
   * Bonus signatures.
   */
  @RestDB.Schema.Required()
  @RestDB.Schema.Number(0)
  @Class.Public()
  public signatures!: number;
}
