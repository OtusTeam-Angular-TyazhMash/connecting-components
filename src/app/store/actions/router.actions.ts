import { createActionGroup, props } from '@ngrx/store';

export const routerActions = createActionGroup({
  source: 'Router',
  events: {
    'Navigate': props<{ path: any[] }>(),
    'Navigate Replace': props<{ path: any[] }>(),
  },
});


