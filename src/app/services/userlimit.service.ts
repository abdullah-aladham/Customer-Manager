import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
@Injectable({
  providedIn: 'root'
})
export class UserlimitService {

  constructor(private http:HttpClient) { }
  /*getdata():Observable<any>{
    const url="";
    return this.http.get<any>();
  }*/
}
