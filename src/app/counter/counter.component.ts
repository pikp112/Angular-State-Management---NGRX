import { Component, computed, effect, signal } from '@angular/core';
import { Store } from '@ngrx/store';
import { Observable } from 'rxjs';
import { AppState } from '../states/app.state';
import { selectCount } from '../states/counter/counter.selector';
import { AsyncPipe } from '@angular/common';

@Component({
  selector: 'app-counter',
  standalone: true,
  imports: [AsyncPipe],
  templateUrl: './counter.component.html',
  styleUrl: './counter.component.scss'
})
export class CounterComponent {
  count$: Observable<number>;
  count = signal(0);
  double = computed(() => this.count() * 2);

  constructor(private store: Store<AppState>){
    this.count$ = store.select(selectCount);
    effect(() => {
      console.log(`The current value of count: ${this.count()}.`);
    })
  }

  increment(){
    this.count.update((number) => number + 1);
  }

  decrement(){
    this.count.update((number) => number - 1);
  }

  reset(){
    this.count.set(0);
  }
}
