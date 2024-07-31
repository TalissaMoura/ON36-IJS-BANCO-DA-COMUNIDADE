import Client from "../Clients/Client";
export default abstract class baseAccount {
    _client: Client;
    _isActive: boolean;
    _initDate: string;
    constructor(client: Client, isActive: boolean, initDate: string);
    abstract get isActive(): boolean;
    abstract set isActive(new_active: boolean);
}
