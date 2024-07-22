export default interface baseTransactions {
    _amount: number
    _type: string
    _transaction_name: string
    _transaction_date: string
    _status: string

    processTransaction()
    
}