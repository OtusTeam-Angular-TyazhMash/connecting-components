// src/app/store/reducers/item.reducer.ts
import { Action, createReducer, on } from '@ngrx/store';
import { loadItems, loadItemsSuccess, loadItemsFailure, addItem } from '../actions/item.actions';
import { initialItemState, ItemState } from '../state';

const _itemReducer = createReducer(
  initialItemState,
  on(loadItems, (state) => ({ ...state, loading: true })),
  on(loadItemsSuccess, (state, { items }) => ({ ...state, list: items, loading: false })),
  on(loadItemsFailure, (state, { error }) => ({ ...state, error, loading: false })),
  on(addItem, (state, { item }) => ({ ...state, list: [...state.list, item] }))
);

export function itemReducer(state: ItemState | undefined, action: Action) {
  return _itemReducer(state, action);
}
