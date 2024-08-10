import Client from "../../creators/client.model";
import iCreatePeopleType from "../interfaces/iCreatePeopleType.model";
export default class createClientAccount implements iCreatePeopleType {
    create(name: string, cpf: string): Client;
}
