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
exports.TaskController = void 0;
const common_1 = require("@nestjs/common");
const tasks_service_1 = require("./tasks.service");
const couchDB_provider_1 = require("../couchDB/couchDB.provider");
const tasks_dto_1 = require("./tasks.dto");
let TaskController = exports.TaskController = class TaskController {
    constructor(taskService, couchdbProvider) {
        this.taskService = taskService;
        this.couchdbProvider = couchdbProvider;
        this.couchdb = this.couchdbProvider.getDBInstance();
    }
    async getAll() {
        try {
            const data = await this.taskService.getAll();
            return data.rows;
        }
        catch (error) {
            throw new common_1.HttpException('Data not found.', 404);
        }
    }
    async getOne(id) {
        try {
            return await this.taskService.getDocument(id);
        }
        catch (error) {
            throw new common_1.HttpException('File not found', 404);
        }
    }
    async addTask(createTaskDTo) {
        try {
            return await this.taskService.createDocument(createTaskDTo);
        }
        catch (error) {
            throw new common_1.HttpException('Database not found', 404);
        }
    }
    async remove(id) {
        try {
            return await this.taskService.deleteDocument(id);
        }
        catch (error) {
            throw new common_1.HttpException('Internal server error', 500);
        }
    }
    remove2(id) {
        return this.taskService
            .deleteDocument2(id)
            .then((res) => res)
            .catch((error) => {
            throw new common_1.HttpException('Internal server error', 500);
        });
    }
    async updateTask(updateDtoTask, id) {
        try {
            return await this.taskService.updateDocument(id, updateDtoTask);
        }
        catch (error) {
            throw new common_1.HttpException('I am a Teapot', 418);
        }
    }
};
__decorate([
    (0, common_1.Get)(),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", []),
    __metadata("design:returntype", Promise)
], TaskController.prototype, "getAll", null);
__decorate([
    (0, common_1.Get)(':id'),
    __param(0, (0, common_1.Param)('id')),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [String]),
    __metadata("design:returntype", Promise)
], TaskController.prototype, "getOne", null);
__decorate([
    (0, common_1.Post)(),
    __param(0, (0, common_1.Body)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [tasks_dto_1.CreateTaskDto]),
    __metadata("design:returntype", Promise)
], TaskController.prototype, "addTask", null);
__decorate([
    (0, common_1.Delete)(':id'),
    __param(0, (0, common_1.Param)('id')),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [String]),
    __metadata("design:returntype", Promise)
], TaskController.prototype, "remove", null);
__decorate([
    (0, common_1.Delete)(':id/2'),
    __param(0, (0, common_1.Param)('id')),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [String]),
    __metadata("design:returntype", void 0)
], TaskController.prototype, "remove2", null);
__decorate([
    (0, common_1.Put)(':id'),
    __param(0, (0, common_1.Body)()),
    __param(1, (0, common_1.Param)('id')),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [tasks_dto_1.CreateTaskDto, String]),
    __metadata("design:returntype", Promise)
], TaskController.prototype, "updateTask", null);
exports.TaskController = TaskController = __decorate([
    (0, common_1.Controller)('/tasks'),
    __metadata("design:paramtypes", [tasks_service_1.TaskService,
        couchDB_provider_1.CouchDBProvider])
], TaskController);
//# sourceMappingURL=tasks.controller.js.map