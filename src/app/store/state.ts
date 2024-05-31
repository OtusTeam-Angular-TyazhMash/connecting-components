import { EntityState } from "@ngrx/entity";
import { Item } from "../models/item";

// src/app/store/state.ts
export interface AppState {
    items: ItemState;
  }
  
  export interface ItemState extends EntityState<Item>{
    loading: boolean;
    error: string | null;
  }
  
  export const initialItemState: ItemState = {
    ids: [],
    entities: {},
    loading: false,
    error: null,
  };
  