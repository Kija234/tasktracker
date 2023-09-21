import { CouchDBProvider } from '../couchDB/couchDB.provider';
import { CreateTaskDto } from './tasks.dto';
export declare class TaskService {
    private readonly couchDbProvider;
    private readonly couchdb;
    constructor(couchDbProvider: CouchDBProvider);
    createDocument(document: any): Promise<any>;
    getDocument(id: string): Promise<any>;
    getAll(): Promise<any>;
    updateDocument(id: string, updateDtoTask: CreateTaskDto): Promise<any>;
    deleteDocument(id: string): Promise<string>;
    deleteDocument2(id: string): Promise<unknown>;
}
