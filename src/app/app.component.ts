// src/app/app.component.ts
import { Component, OnInit } from '@angular/core';
import { Store } from '@ngrx/store';
import { Observable } from 'rxjs';
import { AppState } from './store/state';
import { loadItems, addItem, updateAllNames } from './store/actions/item.actions';
import { selectAll, selectItemLoading, selectItemError } from './store/selectors/item.selectors';
import { Item } from './models/item';

@Component({
  selector: 'app-root',
  templateUrl: 'app.component.html',
  styles: []
})
export class AppComponent implements OnInit {
  items$: Observable<Item[]>;
  loading$: Observable<boolean>;
  error$: Observable<string | null>;
  newItem: string = '';

  constructor(private store: Store<AppState>) {
    this.items$ = this.store.select(selectAll);
    this.loading$ = this.store.select(selectItemLoading);
    this.error$ = this.store.select(selectItemError);
  }

  ngOnInit() {
    this.store.dispatch(loadItems());
  }

  addNewItem() {
    if (this.newItem.trim()) {
      const newItemObj = { id: new Date().toISOString(), name: this.newItem  }
      this.store.dispatch(addItem({ item: newItemObj}));
      this.newItem = '';
    }
  }

  updateAllNames(){
    this.store.dispatch(updateAllNames());
  }
}
