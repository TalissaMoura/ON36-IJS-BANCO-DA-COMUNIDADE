import Client from "../client/client.model"

export default abstract class baseAccount {
    _client: Client
    _isActive: boolean
    _initDate: string
    
    constructor(client:Client,isActive:boolean,initDate:string){
        this._client = client
        this._isActive = isActive
        this._initDate = initDate
    }

     abstract get isActive()
     abstract set isActive(new_active:boolean)
}