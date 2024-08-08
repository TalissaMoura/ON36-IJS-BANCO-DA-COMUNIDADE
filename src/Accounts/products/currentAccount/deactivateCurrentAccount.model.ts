import currentAccount from "src/Accounts/creators/currentAccount.model";
import iDeactivateAccount from "../interfaces/iDeactivateAccount.model"

export default class deactivateCurrentAccount implements iDeactivateAccount{
    deactivate(account:currentAccount){
        account._isActive = false
        return account
    }
}