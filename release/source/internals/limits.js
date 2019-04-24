"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.Limits = void 0;
/*!
 * Copyright (C) 2018-2019 Juridoc
 */
const Class = require("@singleware/class");
const RestDB = require("@singleware/restdb");
/**
 * Services limits, entity class.
 */
let Limits = class Limits extends Class.Null {
};
__decorate([
    RestDB.Schema.Required(),
    RestDB.Schema.Number(1),
    Class.Public()
], Limits.prototype, "seats", void 0);
__decorate([
    RestDB.Schema.Required(),
    RestDB.Schema.Number(0),
    Class.Public()
], Limits.prototype, "signatures", void 0);
Limits = __decorate([
    RestDB.Schema.Entity('services/limits'),
    Class.Describe()
], Limits);
exports.Limits = Limits;
//# sourceMappingURL=limits.js.map