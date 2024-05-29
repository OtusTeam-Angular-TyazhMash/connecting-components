// src/app/store/selectors/item.selectors.ts
import { createSelector } from '@ngrx/store';
import { AppState } from '../state';
import { ItemState } from '../state';

export const selectItemState = (state: AppState) => state.items;
//export const selectItemState = createFeatureSelector<AppState, ItemState>('items');

export const selectItemList = createSelector(
  selectItemState,
  (state: ItemState) => state.list
);

export const selectItemLoading = createSelector(
  selectItemState,
  (state: ItemState) => state.loading
);

export const selectItemError = createSelector(
  selectItemState,
  (state: ItemState) => state.error
);
