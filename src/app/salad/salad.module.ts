import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ToppingListComponent } from './topping-list/topping-list.component';
import { SaladpageComponent } from './saladpage/saladpage.component';
import { Routes, RouterModule } from '@angular/router';

import { NgxsModule } from '@ngxs/store';
import { SaladState } from './salad.state';

const routes: Routes = [{ path: 'order', component: SaladpageComponent }];

@NgModule({
  imports: [
    CommonModule,
    RouterModule.forChild(routes),
    NgxsModule.forFeature([SaladState]),
  ],
  declarations: [ToppingListComponent, SaladpageComponent],
})
export class SaladModule {}
