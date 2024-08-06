import Client from "../../creators/client.model";
import iCreatePeopleType from "../interfaces/iCreatePeopleType.model";

export default class createClientAccount implements iCreatePeopleType {
    create(name: string, cpf: string){
        const account = new Client()
        account._name = name 
        account._cpf = cpf 
        account._isActive = true
        return account
    }
}