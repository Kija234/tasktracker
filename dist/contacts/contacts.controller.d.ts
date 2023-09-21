import { ContactService } from './contacts.service';
import { CouchDBProvider } from 'src/couchDB/couchDB.provider';
import { ContactDto } from './contacts.dto';
export declare class ContactController {
    private readonly contactService;
    private readonly couchdbProvider;
    private couchdb;
    constructor(contactService: ContactService, couchdbProvider: CouchDBProvider);
    getAll(): Promise<any>;
    getOne(id: string): Promise<any>;
    addContact(createContact: ContactDto): Promise<void>;
    remove(id: string): Promise<string>;
    updateContact(updContact: ContactDto, id: string): Promise<any>;
}
