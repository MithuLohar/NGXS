import { Injectable } from '@angular/core';
import { Router } from '@angular/router';
import { Action, Actions, ofAction, State, StateContext } from '@ngxs/store';

export class Navigate {
  static readonly type = '[router] navigate';
  constructor(public payload: string) {}
}
@State<string>({
  name: 'router',
  defaults: '',
})
export class RouterState {
  constructor(private router: Router) {}
  @Action(Navigate)
  async changeRoute(context: StateContext<string>, actions: Navigate) {
    const path = actions.payload;
    await this.router.navigate([path]);
    context.setState(path);
  }
}
@Injectable()
export class RoutHandler {
  constructor(private router: Router, private actions$: Actions) {
    actions$
      .pipe(ofAction(Navigate))
      .subscribe(({ payload }) => this.router.navigate([payload]));
  }

  @Action(Navigate)
  async changeRoute(context: StateContext<string>, action: Navigate) {
    const path = action.payload;
    // context.setState(path);
    await this.router.navigate([path]);
    context.setState(path);
  }
}
@Injectable()
export class RouteHandler {
  constructor(private router: Router, private actions$: Actions) {
    this.actions$
      .pipe(ofAction(Navigate))
      .subscribe(({ payload }) => this.router.navigate([payload]));
  }
}
