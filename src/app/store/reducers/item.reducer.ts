// src/app/store/reducers/item.reducer.ts
import { Action, createReducer, on } from '@ngrx/store';
import { loadItems, loadItemsSuccess, loadItemsFailure, addItem, updateItem, deleteItem, updateAllNames } from '../actions/item.actions';
import { initialItemState, ItemState } from '../state';
import { createEntityAdapter } from '@ngrx/entity';
import { Item } from 'src/app/models/item';

export const adapter = createEntityAdapter<Item>();

const _itemReducer = createReducer(
  initialItemState,
  on(loadItems, (state) => ({ ...state, loading: true })),
  on(loadItemsSuccess, (state, { items }) => adapter.setAll(items, { ...state, loading: false })),
  on(loadItemsFailure, (state, { error }) => ({ ...state, error, loading: false })),
  on(addItem, (state, { item }) => adapter.addOne(item, state)),
  on(updateItem, (state, {update}) => adapter.updateOne(update, state)),
  on(deleteItem, (state,{id}) => adapter.removeOne(id, state)),
  on(updateAllNames, (state) => adapter.map(item => ({...item,name: item.name.toLocaleUpperCase()}), state))
);

export function itemReducer(state: ItemState | undefined, action: Action) {
  return _itemReducer(state, action);
}

export const {
  selectIds,
  selectEntities,
  selectAll,
  selectTotal,
} = adapter.getSelectors();
