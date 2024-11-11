import { HttpClient,HttpHeaders } from "@angular/common/http";
import { Injectable } from "@angular/core";
import { Observable } from "rxjs";
import { environment } from "../../environments/environment";
import { Departamento } from "../models/departamento";

@Injectable()
export class ServiceDepartamentos{
    constructor(private _http:HttpClient){

    }
    getDepartamentos():Observable<any>{
        let request='api/departamentos';
        let url=environment.urlApiDepartamentos+request;
        return this._http.get(url);
    }
    createDepartamentos(departamento:Departamento):Observable<any>{
        
        let json=JSON.stringify(departamento);
        //DEBEMOS INDICAR EN LA PETICION QUE TIPO DE FORMATO TIENE EL OBJ A ENVIAR
        let header=new HttpHeaders();
        header=header.set("Content-type","application/json");
        let request='api/departamentos';
        let url=environment.urlApiDepartamentos+request;
        return this._http.post(url,json,{headers:header});
    }
}