// src/app/store/effects/item.effects.ts
import { Injectable } from '@angular/core';
import { Actions, createEffect, ofType } from '@ngrx/effects';
import { of } from 'rxjs';
import { catchError, map, mergeMap } from 'rxjs/operators';
import { loadItems, loadItemsSuccess, loadItemsFailure } from '../actions/item.actions';
import { ItemService } from '../../services/item.service';

@Injectable()
export class ItemEffects {
  loadItems$ = createEffect(() =>
    this.actions$.pipe(
      ofType(loadItems),
      mergeMap(() =>
        this.itemService.getItems().pipe(
          map(items => loadItemsSuccess({ items })),
          catchError(error => of(loadItemsFailure({ error: error.message })))
        )
      )
    )
  );

  constructor(
    private actions$: Actions,
    private itemService: ItemService
  ) {}
}
