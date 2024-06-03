import { Injectable } from '@angular/core';
import { Observable, of } from 'rxjs';
import { HttpClient } from '@angular/common/http';
import { CreateKeyCategories, KeyCategoriesType } from '../Interfaces/KeyCategoriesType';

@Injectable({
  providedIn: 'root'
})
export class KeyCategoriesService {
  private apiurl = 'https://localhost:7062/api';
  constructor(private http: HttpClient) {}

  getItems(): Observable<KeyCategoriesType[]> {
    return this.http.get<KeyCategoriesType[]>(this.apiurl + "/KeyCategories");
  }

  getKeyCategories(id: number){
    return this.http.get<KeyCategoriesType>(`${this.apiurl}/KeyCategories/${id}`);
  };

  deleteKeyCategories(id:number){
    return this.http.delete(`${this.apiurl}/KeyCategories/${id}`);
    
  };

  createKeyCategories(participants: any){
    return this.http.post<CreateKeyCategories>(`${this.apiurl}/KeyCategories`, participants);
  };
  updateKeyCategories(id: number, events: any){
    return this.http.put(`${this.apiurl}/KeyCategories/${id}`, events);  
  };

}
