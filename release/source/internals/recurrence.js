"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.Recurrence = void 0;
/*!
 * Copyright (C) 2018-2019 Juridoc
 */
const Class = require("@singleware/class");
const RestDB = require("@singleware/restdb");
const Types = require("../types");
const price_1 = require("./price");
/**
 * Services recurrence, entity class.
 */
let Recurrence = class Recurrence extends Class.Null {
    /**
     * Get the recurrence price.
     */
    get price() {
        return this.getPriceBySeat(Types.Seat.Internal.Creator).total;
    }
    /**
     * Get the recurrence base price.
     */
    get base() {
        return this.getPriceBySeat(Types.Seat.Internal.Creator).base;
    }
    /**
     * Get the price entity that corresponds to the specified seat type.
     * @param type Seat type.
     * @returns Returns the price entity.
     * @throws Throws an error when the price entity isn't found.
     */
    getPriceBySeat(type) {
        const entity = this.priceList.find((price) => price.type === type);
        if (entity === void 0) {
            throw new TypeError(`Price entity '${type}' doesn't found.`);
        }
        return entity;
    }
};
__decorate([
    RestDB.Schema.Required(),
    RestDB.Schema.Enumeration(Object.values(Types.Recurrence)),
    Class.Public()
], Recurrence.prototype, "type", void 0);
__decorate([
    RestDB.Schema.Required(),
    RestDB.Schema.Array(price_1.Price),
    Class.Public()
], Recurrence.prototype, "priceList", void 0);
__decorate([
    Class.Public()
], Recurrence.prototype, "price", null);
__decorate([
    Class.Public()
], Recurrence.prototype, "base", null);
__decorate([
    Class.Public()
], Recurrence.prototype, "getPriceBySeat", null);
Recurrence = __decorate([
    RestDB.Schema.Entity('services/recurrence'),
    Class.Describe()
], Recurrence);
exports.Recurrence = Recurrence;
//# sourceMappingURL=recurrence.js.map