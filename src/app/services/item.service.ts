import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable, map, of, shareReplay } from 'rxjs';
import { Item } from '../models/item';

@Injectable({
  providedIn: 'root'
})
export class ItemService {
  private apiUrl = 'https://cat-fact.herokuapp.com/facts/random?animal_type=cat&amount=2';

  constructor(private http: HttpClient) {}
  
  getItems(): Observable<Item[]> {
    return this.http.get<any[]>(this.apiUrl).pipe(
      map(response => this._transformResponse(response))
    );
  }
  
  _transformResponse(response: any[]): Item[] {
    return response.map(data => ({
      id: data._id,
      name: data.text
    }));
  } 
  
}