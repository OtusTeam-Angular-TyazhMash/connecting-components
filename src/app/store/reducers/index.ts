// src/app/store/reducers/index.ts
import { ActionReducerMap } from '@ngrx/store';
import { AppState } from '../state';
import { itemReducer } from './item.reducer';

export const reducers: ActionReducerMap<AppState> = {
  items: itemReducer,
};
