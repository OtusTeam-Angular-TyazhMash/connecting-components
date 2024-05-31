// src/app/store/selectors/item.selectors.ts
import { createFeatureSelector, createSelector } from '@ngrx/store';
import { AppState } from '../state';
import { ItemState } from '../state';
import { adapter } from '../reducers/item.reducer';

//export const selectItemState = (state: AppState) => state.items;
export const selectItemState = createFeatureSelector<AppState, ItemState>('items');

export const {
  selectAll
} = adapter.getSelectors(selectItemState);

export const selectItemLoading = createSelector(
  selectItemState,
  (state: ItemState) => state.loading
);

export const selectItemError = createSelector(
  selectItemState,
  (state: ItemState) => state.error
);
