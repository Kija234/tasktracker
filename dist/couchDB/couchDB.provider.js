"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.CouchDBProvider = void 0;
const common_1 = require("@nestjs/common");
let CouchDBProvider = exports.CouchDBProvider = class CouchDBProvider {
    constructor() {
        const nano = require('nano')('http://admin:admin@couchdb:5984');
        this.couchdb = nano;
        console.log(this.couchdb);
    }
    getDBInstance() {
        return this.couchdb;
    }
};
exports.CouchDBProvider = CouchDBProvider = __decorate([
    (0, common_1.Injectable)(),
    __metadata("design:paramtypes", [])
], CouchDBProvider);
//# sourceMappingURL=couchDB.provider.js.map