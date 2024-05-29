// src/app/store/actions/item.actions.ts
import { createAction, props } from '@ngrx/store';

export const loadItems = createAction('[Item] Load Items');
export const loadItemsSuccess = createAction('[Item] Load Items Success', props<{ items: string[] }>());
export const loadItemsFailure = createAction('[Item] Load Items Failure', props<{ error: string }>());
export const addItem = createAction('[Item] Add Item', props<{ item: string }>());
