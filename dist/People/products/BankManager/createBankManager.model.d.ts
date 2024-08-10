import iCreatePeopleType from "../interfaces/iCreatePeopleType.model";
import bankManager from "../../creators/bankManager.model";
export default class createBankManager implements iCreatePeopleType {
    create(name: string, cpf: string): bankManager;
}
