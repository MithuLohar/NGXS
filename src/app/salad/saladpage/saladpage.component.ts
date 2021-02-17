import { SaladState } from './../salad.state';
import { Component, OnInit } from '@angular/core';
import { Select, Store } from '@ngxs/store';
import { StartOver } from '../salad.actions';
import { ConfirmOrder } from '../../shared/app.actions';
@Component({
  selector: 'saladpage',
  templateUrl: './saladpage.component.html',
  styleUrls: ['./saladpage.component.scss'],
})
export class SaladpageComponent implements OnInit {
  @Select() salad$;
  @Select(SaladState.getDressing) dressing$;
  @Select((state) => state.salad.price) price$;
  constructor(private store: Store) {}

  ngOnInit(): void {}
  startOver() {
    this.store.dispatch(new StartOver());
  }
}
