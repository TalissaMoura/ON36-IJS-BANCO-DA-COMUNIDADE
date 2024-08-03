import iCreatePeopleType from "../products/interfaces/iCreatePeopleType.model"
import iDeactivate from "../products/interfaces/iDeactivatePeopleType.model"

export default interface iPeople {
    _peopleID: string 
    _name: string
    _cpf: string
    _isActive: boolean


    deactivateAccount():iDeactivate
    createPeopleType(): iCreatePeopleType
}