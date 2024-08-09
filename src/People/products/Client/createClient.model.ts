import Client from "../../creators/client.model";
import iCreatePeopleType from "../interfaces/iCreatePeopleType.model";
import { v4 as uuidv4 } from 'uuid';


export default class createClientAccount implements iCreatePeopleType {
    create(name: string, cpf: string){
        const account = new Client()
        account._peopleID = uuidv4()
        account._name = name 
        account._cpf = cpf 
        account._isActive = true
        account._currentAccount = []
        account._poupancaAccount = []
        return account
    }
}