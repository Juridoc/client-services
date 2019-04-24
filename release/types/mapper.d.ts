/*!
 * Copyright (C) 2018-2019 Juridoc
 */
import * as Class from '@singleware/class';
import * as RestDB from '@singleware/restdb';
import * as ApiCore from '@juridoc/client-core';
import * as Requests from './requests';
import { Entity } from './entity';
/**
 * Services mapper class.
 */
export declare class Mapper extends Class.Null {
    /**
     * Client instance.
     */
    private client;
    /**
     * Mapper instance.
     */
    private mapper;
    /**
     * Get the error entity from the last operation.
     */
    get error(): ApiCore.Entities.Error | undefined;
    /**
     * Subscribe to the entity that corresponds to the specified Id using the given subscription request.
     * @param id Service Id.
     * @param request Service subscription request.
     * @returns Returns a promise to get true when the subscription was updated, false otherwise.
     * @throws Throws an error when the service wasn't found.
     */
    subscribe(id: string, request: Requests.Subscribe): Promise<boolean>;
    /**
     * Load the service that corresponds to the specified service Id.
     * @param id Service Id.
     * @param fields Fields to be selected.
     * @returns Returns a promise to get the service entity.
     * @throws Throws an error when the service wasn't found.
     */
    load(id: string, fields?: string[]): Promise<Entity>;
    /**
     * List all services that corresponds to the specified filter.
     * @param query Query filter.
     * @param fields Fields to be selected.
     * @returns Returns a promise to get the service list or undefined when an error occurs.
     */
    list(query: RestDB.Query, fields?: string[]): Promise<Entity[] | undefined>;
    /**
     * Count all services that corresponds to the specified filter.
     * @param query Query filter.
     * @returns Returns a promise to get the number of services or undefined when an error occurs.
     */
    count(query: RestDB.Query): Promise<number | undefined>;
}
