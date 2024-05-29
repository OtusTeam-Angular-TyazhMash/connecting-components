// src/app/store/state.ts
export interface AppState {
    items: ItemState;
  }
  
  export interface ItemState {
    list: string[];
    loading: boolean;
    error: string | null;
  }
  
  export const initialItemState: ItemState = {
    list: [],
    loading: false,
    error: null,
  };
  