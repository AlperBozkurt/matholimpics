import { Injectable } from '@angular/core';
import { HttpClient, HttpParams } from '@angular/common/http';
import { userBaseUrl } from 'src/environments/environment';
import { IUser } from 'src/models/IUser';

@Injectable({
  providedIn: 'root'
})
export class ExternalApiService {
  //https://app.quicktype.io/
  constructor(private http: HttpClient) { }

   // all Users
   allUsers() {
    return this.http.get<IUser[]>(userBaseUrl)
  }

}
