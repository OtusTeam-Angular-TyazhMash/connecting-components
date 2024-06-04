import { EntityState } from "@ngrx/entity";
import { Item } from "../models/item";
import { RouterState } from "@ngrx/router-store";

// src/app/store/state.ts
export interface AppState {
    items: ItemState;
    router: RouterState
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
  