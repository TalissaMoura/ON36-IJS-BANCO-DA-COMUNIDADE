import Client from './creators/client.model';
import bankManager from './creators/bankManager.model';
export declare class PeopleService {
    private readonly filePathBankManger;
    private readonly filePathClient;
    private readClients;
    private writeClients;
    private readBankManagers;
    private writeBankManagers;
    createClient(name: string, cpf: string): Client;
    findClientById(id: string): Client;
    updateClient(id: string, name: string, cpf: string): Client;
    deactivateClientById(id: string): Client;
    createBankManager(name: string, cpf: string): bankManager;
    findBankManagerById(id: string): bankManager;
    updateBankManager(id: string, name: string, cpf: string): bankManager;
    deactivateBankManagerById(id: string): bankManager;
}
