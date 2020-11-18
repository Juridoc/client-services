"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.Mapper = void 0;
/*!
 * Copyright (C) 2018-2019 Juridoc
 */
const Class = require("@singleware/class");
const Injection = require("@singleware/injection");
const RestDB = require("@singleware/restdb");
const ApiCore = require("@juridoc/client-core");
const Requests = require("./requests");
const entity_1 = require("./entity");
/**
 * Services mapper class.
 */
let Mapper = class Mapper extends Class.Null {
    constructor() {
        super(...arguments);
        /**
         * Mapper instance.
         */
        this.mapper = new RestDB.Mapper(this.client, entity_1.Entity);
    }
    /**
     * Get the error entity from the last operation.
     */
    get error() {
        return this.client.error;
    }
    /**
     * Subscribe to the entity that corresponds to the specified Id using the given subscription request.
     * @param id Service Id.
     * @param request Service subscription request.
     * @returns Returns a promise to get true when the subscription was updated, false otherwise.
     * @throws Throws an error when the service wasn't found.
     */
    async subscribe(id, request) {
        return (await this.mapper.updateByIdEx(Requests.Subscribe, id, request));
    }
    /**
     * Load the service that corresponds to the specified service Id.
     * @param id Service Id.
     * @param fields Fields to be selected.
     * @returns Returns a promise to get the service entity.
     * @throws Throws an error when the service wasn't found.
     */
    async load(id, fields) {
        return (await this.mapper.findById(id, fields));
    }
    /**
     * List all services that corresponds to the specified filter.
     * @param query Query filter.
     * @param fields Fields to be selected.
     * @returns Returns a promise to get the service list or undefined when an error occurs.
     */
    async list(query, fields) {
        return await this.mapper.find(query, fields);
    }
    /**
     * Count all services that corresponds to the specified filter.
     * @param query Query filter.
     * @returns Returns a promise to get the number of services or undefined when an error occurs.
     */
    async count(query) {
        return await this.mapper.count(query);
    }
};
__decorate([
    Injection.Inject(ApiCore.Client),
    Class.Private()
], Mapper.prototype, "client", void 0);
__decorate([
    Class.Private()
], Mapper.prototype, "mapper", void 0);
__decorate([
    Class.Public()
], Mapper.prototype, "error", null);
__decorate([
    Class.Public()
], Mapper.prototype, "subscribe", null);
__decorate([
    Class.Public()
], Mapper.prototype, "load", null);
__decorate([
    Class.Public()
], Mapper.prototype, "list", null);
__decorate([
    Class.Public()
], Mapper.prototype, "count", null);
Mapper = __decorate([
    Injection.Describe({ singleton: true, name: 'services' }),
    Class.Describe()
], Mapper);
exports.Mapper = Mapper;
//# sourceMappingURL=mapper.js.map