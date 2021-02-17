import { AppState } from './shared/app.state';
import { Component } from '@angular/core';
import { Observable } from 'rxjs';
import { Select, Store } from '@ngxs/store';
import { ConfirmOrder, SetUsername } from './shared/app.actions';
import { Navigate } from './shared/router.state';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
})
export class AppComponent {
  // @Select((state) => state.app) app$;
  state$: Observable<AppState>;

  constructor(private store: Store) {
    this.state$ = this.store.select((state) => state);
  }

  clickHandler(username) {
    console.log(username);
    this.store.dispatch([
      new SetUsername(username),
      new Navigate('salad/order'),
    ]);
  }
  confirm() {
    this.store.dispatch(ConfirmOrder);
  }
}
