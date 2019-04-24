"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.Entity = void 0;
/*!
 * Copyright (C) 2018-2019 Juridoc
 */
const Class = require("@singleware/class");
const RestDB = require("@singleware/restdb");
const Internals = require("./internals");
/**
 * Services entity class.
 */
let Entity = class Entity extends Class.Null {
    /**
     * Get the service price.
     */
    get price() {
        return this.recurrenceList[0].price;
    }
    /**
     * Get the service base price.
     */
    get base() {
        return this.recurrenceList[0].base;
    }
    /**
     * Get the recurrence entity that corresponds to the specified recurrence type.
     * @param type Recurrence type.
     * @returns Returns the recurrence entity.
     * @throws Throws an error when the recurrence entity isn't found.
     */
    getRecurrenceByType(type) {
        const entity = this.recurrenceList.find(recurrence => recurrence.type === type);
        if (entity === void 0) {
            throw new TypeError(`Recurrence entity '${type}' doesn't found.`);
        }
        return entity;
    }
};
__decorate([
    RestDB.Schema.Primary(),
    RestDB.Schema.Id(),
    Class.Public()
], Entity.prototype, "id", void 0);
__decorate([
    RestDB.Schema.Required(),
    RestDB.Schema.Array(String),
    Class.Public()
], Entity.prototype, "addonsIdList", void 0);
__decorate([
    RestDB.Schema.Required(),
    RestDB.Schema.Array(String),
    Class.Public()
], Entity.prototype, "rolesIdList", void 0);
__decorate([
    RestDB.Schema.Required(),
    RestDB.Schema.Date(),
    Class.Public()
], Entity.prototype, "createdAt", void 0);
__decorate([
    RestDB.Schema.Required(),
    RestDB.Schema.String(),
    Class.Public()
], Entity.prototype, "title", void 0);
__decorate([
    RestDB.Schema.Required(),
    RestDB.Schema.Number(),
    Class.Public()
], Entity.prototype, "weight", void 0);
__decorate([
    RestDB.Schema.Required(),
    RestDB.Schema.Object(Internals.Limits),
    Class.Public()
], Entity.prototype, "limits", void 0);
__decorate([
    RestDB.Schema.Array(String),
    Class.Public()
], Entity.prototype, "featureList", void 0);
__decorate([
    RestDB.Schema.Required(),
    RestDB.Schema.Array(Internals.Recurrence),
    Class.Public()
], Entity.prototype, "recurrenceList", void 0);
__decorate([
    RestDB.Schema.Required(),
    RestDB.Schema.Array(String),
    Class.Public()
], Entity.prototype, "countryCodeList", void 0);
__decorate([
    Class.Public()
], Entity.prototype, "price", null);
__decorate([
    Class.Public()
], Entity.prototype, "base", null);
__decorate([
    Class.Public()
], Entity.prototype, "getRecurrenceByType", null);
Entity = __decorate([
    RestDB.Schema.Entity('services'),
    Class.Describe()
], Entity);
exports.Entity = Entity;
//# sourceMappingURL=entity.js.map