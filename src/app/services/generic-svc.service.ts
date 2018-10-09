import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { HttpHeaders } from '@angular/common/http';

const httpOptions = {
  headers: new HttpHeaders({
    'Content-Type':  'application/json',
    'Authorization': 'my-auth-token',
    'X-ciccetta':'zampabianca'
  })
};

@Injectable({
  providedIn: 'root'
})
export class GenericSvcService {

  constructor(private http: HttpClient) { }

  public getListOfNames() {
 
    let list:string[]=["Diego","Maria","Pluto","Topolino"];    
    return list;
}

public getBachFlowers() { 
  //return this.http.get("https://l81zzv6lgl.execute-api.us-east-2.amazonaws.com/Production", httpOptions);
 return this.http.get("https://dmm888enhanced.apphb.com/api/apicode/getflowers", httpOptions);
}



}