import { TaskService } from './tasks.service';
import { CouchDBProvider } from 'src/couchDB/couchDB.provider';
import { CreateTaskDto } from './tasks.dto';
export declare class TaskController {
    private readonly taskService;
    private readonly couchdbProvider;
    private couchdb;
    constructor(taskService: TaskService, couchdbProvider: CouchDBProvider);
    getAll(): Promise<any>;
    getOne(id: string): Promise<any>;
    addTask(createTaskDTo: CreateTaskDto): Promise<any>;
    remove(id: string): Promise<string>;
    remove2(id: string): Promise<unknown>;
    updateTask(updateDtoTask: CreateTaskDto, id: string): Promise<any>;
}
