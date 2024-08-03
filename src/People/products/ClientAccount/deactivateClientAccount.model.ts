import ClientAccount from "src/clientAccount/clientAccount.model";
import iDeactivatePeopleType from "../interfaces/iDeactivatePeopleType.model";

export default class deactivateClientAccount implements iDeactivatePeopleType{
    _client: ClientAccount
    constructor(client:ClientAccount){
        this._client = client
    }
    deactivate():void{
        
    }
}