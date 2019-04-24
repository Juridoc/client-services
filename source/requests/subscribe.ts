/*!
 * Copyright (C) 2018-2019 Juridoc
 */
import * as Class from '@singleware/class';
import * as RestDB from '@singleware/restdb';

import * as Types from '../types';

/**
 * Services subscription request.
 */
@RestDB.Schema.Entity('services/{id}/subscribe')
@Class.Describe()
export class Subscribe extends Class.Null {
  /**
   * Card Id.
   */
  @RestDB.Schema.Id()
  @Class.Public()
  public cardId?: string;

  /**
   * Subscription recurrence.
   */
  @RestDB.Schema.Required()
  @RestDB.Schema.Enumeration(Object.values(Types.Recurrence))
  @Class.Public()
  public recurrence!: Types.Recurrence;
}
