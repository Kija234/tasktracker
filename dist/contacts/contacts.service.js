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
exports.ContactService = void 0;
const common_1 = require("@nestjs/common");
const couchDB_provider_1 = require("../couchDB/couchDB.provider");
let ContactService = exports.ContactService = class ContactService {
    constructor(couchdbProvider) {
        this.couchdbProvider = couchdbProvider;
        this.couchdb = this.couchdbProvider.getDBInstance();
    }
    async createDocument(document) {
        const db = this.couchdb.use('contacts');
        return await db.insert(document);
    }
    async getDocument(id) {
        const db = this.couchdb.use('contacts');
        const docs = await db.get(id);
        return docs;
    }
    getAll() {
        const db = this.couchdb.use('contacts');
        const docs = db.list().catch((error) => {
            throw new common_1.HttpException('Database not found', 404);
        });
        return docs;
    }
    async deleteDocument(id) {
        const db = this.couchdb.use('contacts');
        const doc = await db.get(id);
        console.log(id, doc._rev);
        await db.destroy(id, doc._rev);
        return 'Deletion succesful';
    }
    async updateContact(id, updContact) {
        const db = this.couchdb.use('contacts');
        const doc = await db.get(id);
        console.log(id, doc._rev);
        await db.insert({ _id: doc._id, _rev: doc._rev, updContact });
        return doc;
    }
};
exports.ContactService = ContactService = __decorate([
    (0, common_1.Injectable)(),
    __metadata("design:paramtypes", [couchDB_provider_1.CouchDBProvider])
], ContactService);
//# sourceMappingURL=contacts.service.js.map