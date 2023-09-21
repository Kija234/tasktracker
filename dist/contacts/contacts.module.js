"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.ContactModule = void 0;
const common_1 = require("@nestjs/common");
const contacts_controller_1 = require("./contacts.controller");
const contacts_service_1 = require("./contacts.service");
const couchDB_provider_1 = require("../couchDB/couchDB.provider");
let ContactModule = exports.ContactModule = class ContactModule {
};
exports.ContactModule = ContactModule = __decorate([
    (0, common_1.Module)({
        imports: [],
        controllers: [contacts_controller_1.ContactController],
        providers: [contacts_service_1.ContactService, couchDB_provider_1.CouchDBProvider],
    })
], ContactModule);
//# sourceMappingURL=contacts.module.js.map