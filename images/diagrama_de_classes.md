```mermaid
classDiagram
    baseAccount "1" --<|"1" CurrentAccount:implements
    baseAccount "1"--<| "1" PoupancaAccount:implements
    baseAccount "1" --<| "1" ClientAccount:implements
    CurrentAccount "1..*" --o "1" ClientAccount
    PoupancaAccount "1..*" --o "1" ClientAccount
    
    Card "1" --* "1" baseAccount
    Client "1" --* "1" ClientAccount
    BankManager "1" --* "1..*" ClientAccount

    CreditCardAccount "0 .. 1" --o "1" CurrentAccount
    CreditCardAccount "1" --* "0..*" CreditCardAccountTransactions
    CreditCardAccountTransactions "1"--o "1" AccountTransactions
    CreditCardAccountTransactions "0..n"--o "1" CreditCardBill

    baseTransactions --<| Transactions: implements
    baseTransactions --<| AccountTransactions:implements
    baseTransactions --<| CreditCardAccountTransactions:implements
    Transactions "1" --* "1" AccountTransactions
    Transactions "1" --o "1" Loans
    Transactions "1" --o "1" Withdrawn
    Transactions "1" --o "1" Deposit
    Transactions "1" --o "1" Payments

    Loans "0..*" --o "1" CurrentAccount
    Loans "1..n" --o "1" LoanBill
    Withdrawn "0..*" --o "1" ClientAccount
    Deposit "0..*" --o "1" ClientAccount
    Payments "0..*" --o "1" ClientAccount

    Recievables  --<|  CreditCardBill: extends
    Recievables  --<|  LoanBill: extends
    Bill  --<|  LoanBill: implements
    Bill  --<|  CreditCardBill: implements

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
    class Card {
        -CardID: number
        -CardNumber: number
        -CardPassword:string

        getCardNumber(): number
        getCardPassword(): number
        setCardPassword(): void
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
        -BankManager: BankManager
        -State: String
        -City: String
        -PoupancaAccount: PoupancaAccount[]
        -CurrentAccount: CurrentAccount[]
        -Withdraw:Withdraw[]
        -Deposit: Deposit[]
        -Payments: Payments[]
        
        makeLoanRequest(CurrentAccount):Loan
        makeCreditCardAccountRequest(CurrentAccount): CreditCardAccount
        makeDeposit():Deposit
        makePayment(): Payments
        makeWithdraw: Withdraw

    }
    class CurrentAccount {
        -currentAccountID:number
        -currentAccountNumber:number
        -Loans: Loans[]
        -CreditCardAccount: CreditCardAccount
        -LimitChequeEspecial: number

        getCurrentAccountNumber(): number
        getLimitChequeEspecial: number
        setLimitChequeEspecial: void
        listLoans(): list
        listCreditCardAccount:list

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

        -approveLoan():Loan
        -approveCreditCardAccount():CreditCardAccount
        -approveCreditLimit(CreditCardAccount):CreditCardAccount

    }

    class baseTransactions {
        <<interface>>
        -Amount: number
        -Type: enum~Credit or Debt~
        -Transaction_name: String
        -Transaction_date: string
        -status: ~Processing, In Progress, Completed, Not Allowed~

        -processTransaction():void
    }

    class Transactions{
        -TransactionsID: number
        -AccountTransactions: AccountTransactions
        -status: ~Processing, In Progress, Completed, Not Allowed~

    }

    class AccountTransactions{
        -Transactions: Transactions
        -AccountTransactionsId: number
        -ClientAccount: ClientAccount

    }
    class CreditCardAccount {
        -CurrentAccount: CurrentAccount
        -CreditCardAccountID: number
        -InitDate: string
        -LimitAmount: number
        -CreditCardAccountTransactions: CreditCardAccountTransactions[]
        -CreditCardBill: CreditCardBill[]

        getLimitAmount()
        setLimitAmount()
    }
    class CreditCardAccountTransactions {
        -CreditCardAccount: CreditCardAccount
        -AccountTransactions: AccountTransactions
        -CreditCardBill: CreditCardBill
        -Installments: number 

    }
    class Loans {
        -Transactions: Transactions
        -CurrentAccount:CurrentAccount
        -LoanID: number
        -LoanAmount: number
        -LoanSituation: "Paid","Not paid"
        -LoanStatus: "Open","Not Open"
        -Loan_start_date: string 
        -Loan_due_date: string
        -LoanBill: LoanBill[]
    }
    class Withdrawn {
        -Transactions: Transactions
        -WithdrawnID: number
        -Withdrawn_Amount: number
        -Withdrawn_date: string
        -ClientAccount:ClientAccount
        -status: ~Processing, In Progress, Completed, Not Allowed~

        - processWithdrawn(): void
    }
    class Deposit {
        -Transactions: Transactions
        -DepositID: number
        -Deposit_date: string
        -Deposit_amount: number
        -ClientAccount:ClientAccount
        -status: ~Processing, In Progress, Completed, Not Allowed~
        
        - processDeposit(): void

    }
    class Transfer {
        -Transactions: Transactions
        -TransferID: number
        -transfer_date: string
        -transfer_amount: number
        -ClientAccount:ClientAccount
        -AccountToTransfer:ClientAccount
        -status: ~Processing, In Progress, Completed, Not Allowed~

        processTransfer():void
    }
    class Payments {
        -Transactions: Transactions
        -PaymentID: number
        -payment_date: string
        -payment_amount: number
        -ClientAccount:ClientAccount
        -CPF: String
        -CNPJ: String
        -status: ~Processing, In Progress, Completed, Not Allowed~
        
        -makePayment():Payment
        -makeCreditBillPayment(CreditCardBill): CreditCardBill
        -makeLoanBillPayment(LoanBill): LoanBill
        -processPayment():void
      
    }
    class Recievables {
        <<abstract>>

        <<abstract>> create_product():Bill
    }
    class Bill {
        - BillSituation: ~"Paid","Repaid"~
        - TotalAmount: number
        - Due_date: string
        - BillStatus: ~"Open","Closed"~
        
        - calculate_bill()
    }
    class CreditCardBill {
        - CreditCardBillID: number
        - CreditCardAccount: CreditCardAccount
        - CreditCardAccountTransactions: CreditCardAccountTransactions[]
        - Close_Date: string

        getCreditCardBill()
    }
    class LoanBill {
        - Loan: Loan
        - LoanBillID: number

        getLoanBill()
    }
    