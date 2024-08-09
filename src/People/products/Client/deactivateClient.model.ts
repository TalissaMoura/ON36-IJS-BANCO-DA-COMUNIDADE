import Client from "../../creators/client.model";
import iDeactivatePeopleType from "../interfaces/iDeactivatePeopleType.model";

export default class deactivateClient implements iDeactivatePeopleType{
    deactivate(account:Client){
        account._isActive = false
        return account
    }
}