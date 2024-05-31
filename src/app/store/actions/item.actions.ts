// src/app/store/actions/item.actions.ts
import { Update } from '@ngrx/entity';
import { createAction, props } from '@ngrx/store';
import { Item } from 'src/app/models/item';

export const loadItems = createAction('[Item] Load Items');
export const loadItemsSuccess = createAction('[Item] Load Items Success', props<{ items: Item[] }>());
export const loadItemsFailure = createAction('[Item] Load Items Failure', props<{ error: string }>());
export const addItem = createAction('[Item] Add Item', props<{ item: Item }>());
export const updateItem = createAction('[Item] Update Item', props<{ update: Update<Item>}>());
export const deleteItem = createAction('[Item] Remove Item', props<{id: string}>());
export const updateAllNames = createAction('[Item] update All names');
