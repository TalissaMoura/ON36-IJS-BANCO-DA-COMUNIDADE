import { PeopleService } from './people.service';
import bankManager from './creators/bankManager.model';
export declare class bankManagerController {
    private readonly peopleService;
    constructor(peopleService: PeopleService);
    createBankManger(name: string, cpf: string): bankManager;
    findBankManagerByID(id: string): bankManager;
    updateBankManager(id: string, name: string, cpf: string): bankManager;
    deactiveBankManager(id: string): bankManager;
}
