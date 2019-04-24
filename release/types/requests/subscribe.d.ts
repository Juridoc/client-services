/*!
 * Copyright (C) 2018-2019 Juridoc
 */
import * as Class from '@singleware/class';
import * as Types from '../types';
/**
 * Services subscription request.
 */
export declare class Subscribe extends Class.Null {
    /**
     * Card Id.
     */
    cardId?: string;
    /**
     * Subscription recurrence.
     */
    recurrence: Types.Recurrence;
}
