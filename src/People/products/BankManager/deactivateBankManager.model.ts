import bankManager from "src/People/creators/bankManager.model";
import iDeactivatePeopleType from "../interfaces/iDeactivatePeopleType.model";


export default class deactivateBankManager implements iDeactivatePeopleType{
    deactivate(account:bankManager){
        account._isActive = false 
    }
}