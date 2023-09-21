import { ContactDto } from './contacts.dto';
import { CouchDBProvider } from 'src/couchDB/couchDB.provider';
export declare class ContactService {
    private readonly couchdbProvider;
    private couchdb;
    constructor(couchdbProvider: CouchDBProvider);
    createDocument(document: any): Promise<any>;
    getDocument(id: string): Promise<any>;
    getAll(): any;
    deleteDocument(id: string): Promise<string>;
    updateContact(id: string, updContact: ContactDto): Promise<any>;
}
