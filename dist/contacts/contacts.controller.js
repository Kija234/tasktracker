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
var __param = (this && this.__param) || function (paramIndex, decorator) {
    return function (target, key) { decorator(target, key, paramIndex); }
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.ContactController = void 0;
const common_1 = require("@nestjs/common");
const contacts_service_1 = require("./contacts.service");
const couchDB_provider_1 = require("../couchDB/couchDB.provider");
const contacts_dto_1 = require("./contacts.dto");
let ContactController = exports.ContactController = class ContactController {
    constructor(contactService, couchdbProvider) {
        this.contactService = contactService;
        this.couchdbProvider = couchdbProvider;
        this.couchdb = this.couchdbProvider.getDBInstance();
    }
    async getAll() {
        try {
            const data = await this.contactService.getAll();
            return data.rows;
        }
        catch (error) {
            throw new common_1.HttpException('Data not found', 404);
        }
    }
    async getOne(id) {
        try {
            return await this.contactService.getDocument(id);
        }
        catch (error) {
            throw new common_1.HttpException('File not found', 404);
        }
    }
    async addContact(createContact) {
        try {
            this.contactService.createDocument(createContact);
        }
        catch (error) {
            throw new common_1.HttpException('Database not found', 404);
        }
    }
    async remove(id) {
        try {
            return await this.contactService.deleteDocument(id);
        }
        catch {
            throw new common_1.HttpException('Internal server error', 500);
        }
    }
    async updateContact(updContact, id) {
        try {
            return await this.contactService.updateContact(id, updContact);
        }
        catch (error) {
            throw new common_1.HttpException('File not found.', 418);
        }
    }
};
__decorate([
    (0, common_1.Get)(),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", []),
    __metadata("design:returntype", Promise)
], ContactController.prototype, "getAll", null);
__decorate([
    (0, common_1.Get)(':id'),
    __param(0, (0, common_1.Param)('id')),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [String]),
    __metadata("design:returntype", Promise)
], ContactController.prototype, "getOne", null);
__decorate([
    (0, common_1.Post)(),
    __param(0, (0, common_1.Body)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [contacts_dto_1.ContactDto]),
    __metadata("design:returntype", Promise)
], ContactController.prototype, "addContact", null);
__decorate([
    (0, common_1.Delete)(':id'),
    __param(0, (0, common_1.Param)('id')),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [String]),
    __metadata("design:returntype", Promise)
], ContactController.prototype, "remove", null);
__decorate([
    (0, common_1.Put)(':id'),
    __param(0, (0, common_1.Body)()),
    __param(1, (0, common_1.Param)('id')),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [contacts_dto_1.ContactDto, String]),
    __metadata("design:returntype", Promise)
], ContactController.prototype, "updateContact", null);
exports.ContactController = ContactController = __decorate([
    (0, common_1.Controller)('/contacts'),
    __metadata("design:paramtypes", [contacts_service_1.ContactService,
        couchDB_provider_1.CouchDBProvider])
], ContactController);
//# sourceMappingURL=contacts.controller.js.map