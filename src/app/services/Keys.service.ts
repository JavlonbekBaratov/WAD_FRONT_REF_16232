import { Injectable } from '@angular/core';
import { Observable, of } from 'rxjs';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { CreateKey, KeyType } from '../Interfaces/Keys';

@Injectable({
  providedIn: 'root',
})
export class KeysService {
  private apiurl = 'https://localhost:7062/api';
  constructor(private http: HttpClient) {}
  getItems(): Observable<KeyType[]> {
    return this.http.get<KeyType[]>(this.apiurl + "/Keys");
  }

  getKey(id: number){
    return this.http.get<KeyType>(`${this.apiurl}/Keys/${id}`);
  };

  deleteKey(id:number){
    return this.http.delete(`${this.apiurl}/Keys/${id}`);
  };

  createNewKey(participants: any){
    return this.http.post<CreateKey>(`${this.apiurl}/Keys`, participants);
  };
  updateKey(id: number, events: any){
    return this.http.put(`${this.apiurl}/Keys/${id}`, events);  
  };
}
