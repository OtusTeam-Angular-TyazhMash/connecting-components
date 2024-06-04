import { Injectable } from '@angular/core';
import { Actions, createEffect, ofType } from '@ngrx/effects';
import { Router } from '@angular/router';
import { map, tap } from 'rxjs/operators';
import { routerActions } from '../actions/router.actions';

@Injectable()
export class RouterEffects {
  constructor(private actions$: Actions, private router: Router) {}

  navigate$ = createEffect(() =>
    this.actions$.pipe(
      ofType(routerActions.navigate),
      map(action => action.path),
      tap(path => this.router.navigate(path))
    ),
    { dispatch: false }
  );

  navigateReplace$ = createEffect(() =>
    this.actions$.pipe(
      ofType(routerActions.navigateReplace),
      map(action => action.path),
      tap(path => this.router.navigate(path, { replaceUrl: true }))
    ),
    { dispatch: false }
  );
}