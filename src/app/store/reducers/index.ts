// src/app/store/reducers/index.ts
import { ActionReducerMap } from '@ngrx/store';
import { AppState } from '../state';
import { itemReducer } from './item.reducer';
import { routerReducer } from '@ngrx/router-store';

export const reducers: ActionReducerMap<AppState> = {
  items: itemReducer,
  router: routerReducer
};
