import { HttpClient } from "@angular/common/http";
import { Injectable } from "@angular/core";
import { Observable } from "rxjs";
import { environment } from "../../environments/environment";

@Injectable()
export class ServiceDepartamentos{
    constructor(private _http:HttpClient){

    }
    getDepartamentos():Observable<any>{
        let request='api/departamentos';
        let url=environment.urlApiDepartamentos+request;
        return this._http.get(url);
    }
}