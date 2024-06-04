import { RouterStateSerializer } from '@ngrx/router-store';
import { RouterStateSnapshot, ActivatedRouteSnapshot } from '@angular/router';

export interface RouterStateUrl {
  url: string;
  params: { [key: string]: any };
  queryParams: { [key: string]: any };
}

export class CustomSerializer implements RouterStateSerializer<RouterStateUrl> {
  serialize(routerState: RouterStateSnapshot): RouterStateUrl {
    const { url } = routerState;
    const { queryParams } = routerState.root;

    let state: ActivatedRouteSnapshot = routerState.root;
    while (state.firstChild) {
      state = state.firstChild;
    }
    const { params } = state;

    return { url, params, queryParams };
  }
}