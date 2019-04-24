/*!
 * Copyright (C) 2018-2019 Juridoc
 */
import * as Class from '@singleware/class';
import * as Types from '../types';
import { Price } from './price';
/**
 * Services recurrence, entity class.
 */
export declare class Recurrence extends Class.Null {
    /**
     * Recurrence type.
     */
    type: Types.Recurrence;
    /**
     * Recurrence prices.
     */
    priceList: Price[];
    /**
     * Get the recurrence price.
     */
    get price(): number;
    /**
     * Get the recurrence base price.
     */
    get base(): number;
    /**
     * Get the price entity that corresponds to the specified seat type.
     * @param type Seat type.
     * @returns Returns the price entity.
     * @throws Throws an error when the price entity isn't found.
     */
    getPriceBySeat(type: string): Price;
}
