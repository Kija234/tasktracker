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
exports.TaskService = void 0;
const common_1 = require("@nestjs/common");
const couchDB_provider_1 = require("../couchDB/couchDB.provider");
let TaskService = exports.TaskService = class TaskService {
    constructor(couchDbProvider) {
        this.couchDbProvider = couchDbProvider;
        this.couchdb = this.couchDbProvider.getDBInstance();
    }
    async createDocument(document) {
        const db = this.couchdb.use('tasktracker');
        return await db.insert(document);
    }
    async getDocument(id) {
        const db = this.couchdb.use('tasktracker');
        const docs = await db.get(id);
        return docs;
    }
    async getAll() {
        const db = this.couchdb.use('tasktracker');
        const docs = await db
            .list({ include_docs: true })
            .catch((error) => console.log(error));
        return docs;
    }
    async updateDocument(id, updateDtoTask) {
        const db = this.couchdb.use('tasktracker');
        const doc = await db.get(id);
        console.log(id, doc._rev);
        await db.insert({ _id: doc._id, _rev: doc._rev, updateDtoTask });
        return doc;
    }
    async deleteDocument(id) {
        const db = this.couchdb.use('tasktracker');
        const doc = await db.get(id);
        console.log(id, doc._rev);
        await db.destroy(id, doc._rev);
        return 'Successfully deleted';
    }
    deleteDocument2(id) {
        return new Promise((resolve, reject) => {
            const db = this.couchdb.use('tasktracker');
            db.get(id)
                .then((doc) => {
                console.log(id, doc._rev);
                db.destroy(id, doc._rev).then((res) => resolve('Successfully deleted'));
            })
                .catch((err) => reject(err));
        });
    }
};
exports.TaskService = TaskService = __decorate([
    (0, common_1.Injectable)(),
    __metadata("design:paramtypes", [couchDB_provider_1.CouchDBProvider])
], TaskService);
//# sourceMappingURL=tasks.service.js.map