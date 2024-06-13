import { Component, computed, effect, inject, signal } from '@angular/core';
import { Store } from '@ngrx/store';
import { Observable } from 'rxjs';
import { AppState } from '../states/app.state';
import { selectCount } from '../states/counter/counter.selector';
import { AsyncPipe } from '@angular/common';
import { CounterStore } from '../store/counter.store';

@Component({
  selector: 'app-counter',
  standalone: true,
  imports: [AsyncPipe],
  templateUrl: './counter.component.html',
  styleUrl: './counter.component.scss',
  providers: [CounterStore]
})
export class CounterComponent {
  count$: Observable<number>;
  counterStore = inject(CounterStore);

  constructor(private store: Store<AppState>){
    this.count$ = store.select(selectCount);
  }

}
