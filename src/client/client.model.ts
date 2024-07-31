import { v4 as uuidv4 } from 'uuid';

export default class Client {
    private _clientID: string
    private _name: string
    private _cpf: string
    private _address: string
    private _bornDate: string
    private _state: string
    private _city: string

    constructor(
        name:string,
        cpf: string,
        address:string,
        bornDate:string,
        state:string,
        city:string,
    ){
        this._address = address
        this._bornDate = bornDate
        this._clientID = uuidv4()
        this._name = name 
        this._cpf = cpf
        this._state = state
        this._city = city
    }
}