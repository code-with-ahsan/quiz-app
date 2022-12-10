import { Injectable, inject } from '@angular/core';
import {
  ActivatedRouteSnapshot,
  CanActivate,
  Router,
  RouterStateSnapshot,
  UrlTree,
} from '@angular/router';
import { Store } from '@ngrx/store';
import { Observable, take, map } from 'rxjs';
import { AppState } from '../store/reducers';
import { selectIsLoggedIn } from '../store/selectors/auth.selectors';

@Injectable({
  providedIn: 'root',
})
export class AuthGuard implements CanActivate {
  store: Store<AppState>;
  router: Router;
  constructor() {
    this.store = inject(Store<AppState>);
    this.router = inject(Router);
  }
  canActivate(
    route: ActivatedRouteSnapshot,
    state: RouterStateSnapshot
  ):
    | Observable<boolean | UrlTree>
    | Promise<boolean | UrlTree>
    | boolean
    | UrlTree {
    const isLoggedIn = this.store.select(selectIsLoggedIn);
    return isLoggedIn.pipe(
      map((loggedIn) => {
        if (route.url[0]?.path === 'login') {
          if (loggedIn) {
            this.router.navigate(['/']);
            return false;
          }
          return true;
        }
        if (!loggedIn) {
          this.router.navigate(['/login']);
        }
        return loggedIn;
      })
    );
  }
}
