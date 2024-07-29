```mermaid
classDiagram
    baseAccount "1" --<|"1" CurrentAccount:implements
    baseAccount "1"--<| "1" PoupancaAccount:implements
    baseAccount "1" --<| "1" ClientAccount:implements
    CurrentAccount "1..*" --o "1" ClientAccount
    PoupancaAccount "1..*" --o "1" ClientAccount
    
    Client "1" --* "1" ClientAccount
    BankManager "1" --* "1..*" ClientAccount


    iTransactions "1" --<| "1" Withdrawn: implements
    iTransactions "1" --<| "1" Deposit: implements
    iTransactions "1" --<| "1" Transfer: implements 

    Withdrawn "0..*" --o "1" ClientAccount
    Deposit "0..*" --o "1" ClientAccount
    Transfer "0..*" --o "1" ClientAccount


    class Client{
        -ClientID: number
        -Name: String
        -CPF: String
        -Address: String
        -BornDate: string
        -State: String
        -City: String
        -ClientUsername:string
        -ClientPassword: string

    }

    class baseAccount {
        <<interface>>
        -Client:Client
        -Card: Card
        -IsActive: bool
        -InitDate: string
        
        getIsActive(): bool
        setIsActive(): void
    }
    class ClientAccount{
        -ClientAccountID: number
        -Client: Client
        -BankManager: BankManager
        -State: String
        -City: String
        -PoupancaAccount: PoupancaAccount[]
        -CurrentAccount: CurrentAccount[]
        -Withdraw:Withdraw[]
        -Deposit: Deposit[]
        -Payments: Payments[]
        

    }
    class CurrentAccount {
        -currentAccountID:number
        -currentAccountNumber:number
        -CreditCardAccount: CreditCardAccount
        -LimitChequeEspecial: number

        getCurrentAccountNumber(): number
        getLimitChequeEspecial: number
        setLimitChequeEspecial: void

    }
    class PoupancaAccount{
        -currentAccountID: number
        -PoupancaAccountNumber:number
        -PoupancaRendimento: number

        getPoupancaAccountNumber(): number
        getPoupancaRendimento():number
        setPoupancaRendimento(): void
    }
    class BankManager{
        -BankManagerID: number
        -Name: String
        -CPF: String
        -InitDate: string
        -State: String
        -City: String
        -ClientAccount: ClientAccount[]

        -deactivateAccount()

    }

    class iTransactions {
        <<interface>>
        -Amount: number
        -Type: enum~Credit or Debt~
        -Transaction_name: String
        -Transaction_date: string
        -status: ~Processing, Completed, Cancelled~

        -processTransaction():void
    }

    class Withdrawn {

        + processWithdrawn(): void
    }
    class Deposit {
        
        + processDeposit(): void

    }
    class Transfer {

        + processTransfer():void
    }
