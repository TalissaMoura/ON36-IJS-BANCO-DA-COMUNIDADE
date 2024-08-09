```mermaid
classDiagram

iPeople ..> iDeactivate : instantiate
iPeople ..> iCreatePeopleType : instantiate


iPeople <| .. BankManager: implements
iPeople <| .. Client : implements

iDeactivate <| .. deactivateClient: implements 
iDeactivate <| .. deactivateBankManager: implements 

iCreatePeopleType <| .. createClient: implements 
iCreatePeopleType <| .. createBankManager: implements 


class iPeople {

    <<interface>>

    - peopleID: uuidv4
    - name: string
    - CPF: string
    - isActive: boolean

    - deactivateAccount():iDeactivate
    - createPeopleType(): iCreatePeopleType
}

class BankManager{
        -BankManagerID: uuidv4
        -BankManagerToken = uuidv4
        -InitDate: string
        -State: string
        -City: string
        -ClientAccount: ClientAccount[]

        - createPeopleType(): createClient
        - deactivateAccount(): deactivateBankManager

}

class Client {
     -Address: string
     -BornDate: string
     -State: string
     -City: string
     -isActive:boolean
     -BankManager: BankManager
     -poupancaAccount = PoupancaAccount[]
     -currentAccount = currentAccount[]

     -createPeopleType(): Client 
}


class iDeactivate {
    <<interface>>
    
    - deactivate():
}

class deactivateClient {
    - deactivate(bankManagerToken)
}

class deactivateBankManager {
    - deactivate()
}

class iCreatePeopleType {
    <<interface>>
    
    - create():
}

class createClient {
    - create(bankManagerToken)
}

class createBankManager {
    - create()
}

