/*!
 * Copyright (C) 2018-2019 Juridoc
 */
import * as Class from '@singleware/class';
import * as Internals from './internals';
/**
 * Services entity class.
 */
export declare class Entity extends Class.Null {
    /**
     * Service Id.
     */
    id: string;
    /**
     * Service addons.
     */
    addonsIdList: string[];
    /**
     * Service roles.
     */
    rolesIdList: string[];
    /**
     * Creation date.
     */
    createdAt: Date;
    /**
     * Service title.
     */
    title: string;
    /**
     * Service weight.
     */
    weight: number;
    /**
     * Service limits.
     */
    limits: Internals.Limits;
    /**
     * Service feature list.
     */
    featureList?: string[];
    /**
     * Service recurrence list.
     */
    recurrenceList: Internals.Recurrence[];
    /**
     * Countries that support this service.
     */
    countryCodeList: string[];
    /**
     * Get the service price.
     */
    get price(): number;
    /**
     * Get the service base price.
     */
    get base(): number;
    /**
     * Get the recurrence entity that corresponds to the specified recurrence type.
     * @param type Recurrence type.
     * @returns Returns the recurrence entity.
     * @throws Throws an error when the recurrence entity isn't found.
     */
    getRecurrenceByType(type: string): Internals.Recurrence;
}
