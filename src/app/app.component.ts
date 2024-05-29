// src/app/app.component.ts
import { Component, OnInit } from '@angular/core';
import { Store } from '@ngrx/store';
import { Observable } from 'rxjs';
import { AppState } from './store/state';
import { loadItems, addItem } from './store/actions/item.actions';
import { selectItemList, selectItemLoading, selectItemError } from './store/selectors/item.selectors';

@Component({
  selector: 'app-root',
  templateUrl: 'app.component.html',
  styles: []
})
export class AppComponent implements OnInit {
  items$: Observable<string[]>;
  loading$: Observable<boolean>;
  error$: Observable<string | null>;
  newItem: string = '';

  constructor(private store: Store<AppState>) {
    this.items$ = this.store.select(selectItemList);
    this.loading$ = this.store.select(selectItemLoading);
    this.error$ = this.store.select(selectItemError);
  }

  ngOnInit() {
    this.store.dispatch(loadItems());
  }

  addNewItem() {
    if (this.newItem.trim()) {
      this.store.dispatch(addItem({ item: this.newItem }));
      this.newItem = '';
    }
  }
}
