import clientAccount from "src/People/creators/clientAccount.model";
import iCreatePeopleType from "../interfaces/iCreatePeopleType.model";

export default class createClientAccount implements iCreatePeopleType {
    create(accessToken:string){

        return new clientAccount()
    }
}