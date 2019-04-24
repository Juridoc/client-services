/*!
 * Copyright (C) 2018-2019 Juridoc
 */
import * as Class from '@singleware/class';
import * as Types from '../types';
/**
 * Services price, entity class.
 */
export declare class Price extends Class.Null {
    /**
     * Seat type.
     */
    type: Types.AnySeat;
    /**
     * Total price.
     */
    total: number;
    /**
     * Base price.
     */
    base: number;
}
