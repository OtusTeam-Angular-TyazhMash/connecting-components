// src/app/services/item.service.ts
import { Injectable } from '@angular/core';
import { of } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ItemService {
  getItems() {
    // Simulate API call
    return of(['Item 1', 'Item 2', 'Item 3']);
  }
}
