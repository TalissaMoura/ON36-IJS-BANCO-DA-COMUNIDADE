import { PeopleService } from './people.service';
import Client from './creators/client.model';
export declare class clientController {
    private readonly peopleService;
    constructor(peopleService: PeopleService);
    createClient(name: string, cpf: string): Client;
    findClientByID(id: string): Client;
    updateClientById(id: string, name: string, cpf: string): Client;
    deactiveClientbyID(id: string): Client;
}
