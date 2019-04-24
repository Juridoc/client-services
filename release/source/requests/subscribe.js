"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.Subscribe = void 0;
/*!
 * Copyright (C) 2018-2019 Juridoc
 */
const Class = require("@singleware/class");
const RestDB = require("@singleware/restdb");
const Types = require("../types");
/**
 * Services subscription request.
 */
let Subscribe = class Subscribe extends Class.Null {
};
__decorate([
    RestDB.Schema.Id(),
    Class.Public()
], Subscribe.prototype, "cardId", void 0);
__decorate([
    RestDB.Schema.Required(),
    RestDB.Schema.Enumeration(Object.values(Types.Recurrence)),
    Class.Public()
], Subscribe.prototype, "recurrence", void 0);
Subscribe = __decorate([
    RestDB.Schema.Entity('services/{id}/subscribe'),
    Class.Describe()
], Subscribe);
exports.Subscribe = Subscribe;
//# sourceMappingURL=subscribe.js.map