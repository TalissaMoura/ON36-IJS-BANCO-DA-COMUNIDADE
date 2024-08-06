```mermaid
classDiagram

iAccounts ..> iDeposit : instantiate
iAccounts ..> iWithdrawn : instantiate
iAccounts ..> iTransfer : instantiate
iAccounts ..> iOpenAccount: instantiate

iAccounts <| .. currentAccount: implements
iAccounts <| .. poupancaAccount: implements

iDeposit <| .. depositCurrentAccount: implements 
iDeposit <| .. depositPoupancaAccount: implements 

iWithdrawn <| .. withdrawnCurrentAccount: implements 
iWithdrawn <| .. withdrawnPoupancaAccount: implements 

iTransfer <| .. transferCurrentAccount: implements 
iTransfer <| .. transferPoupancaAccount: implements 

iOpenAccount <| .. openCurrentAccount: implements 
iOpenAccount <| .. openPoupancaAccount: implements


class iAccounts {
        <<interface>>
        -accountID: uuid4
        -accountNumber: number
        -isActive: bool
        -initDate: string
        -amount: number

        - deactivate: iDeactivateAccount
        - createAccount(): iOpenAccount
        - createDeposit(): iDeposit
        - createTransfer(): iTransfer
        - createWithdrawn(): iWithdrawn 
    }


class currentAccount  {
    - limitChequeEspecial: number
    
    - createAccount(): openCurrentAccount
    - createDeposit(): depositCurrentAccount
    - createTransfer(): transferCurrentAccount
    - createWithdrawn(): withdrawnCurrentAccount
    - deactivate(): deactivateCurrentAccount
}

class poupancaAccount  {
    - rendimento: number

    - createAccount(): openPoupancatAccount
    - createDeposit():depositPoupancaAccount
    - createWithdrawn():withdrawnPoupancaAccount
    - createTransfer():transferPoupancaAccount
    - deactivate(): deactivateCurrentAccount
}

class iDeposit {
    <<interface>>
    - processDeposit()
}

class iWithdrawn {
    <<interface>>
    - processWihdrawn()
}

class iTransfer{
    <<interface>>
    - processTransfer()
}

class iOpenAccount {
    <<interface>>
    - create(bankManagerToken)
    - addAccountToClient(ClientAccount)
}


