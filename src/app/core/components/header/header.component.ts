import { ChangeDetectionStrategy, Component, inject } from '@angular/core';
import { MatIconModule } from '@angular/material/icon';
import { SideBarSignal } from '../../../shared/signals/sidebar.signal';
import { Store } from '@ngrx/store';
import { Observable } from 'rxjs';
import { AppState } from '../../../states/app.state';
import { selectCount } from '../../../states/counter/counter.selector';
import { AsyncPipe } from '@angular/common';

@Component({
  selector: 'app-header',
  standalone: true,
  imports: [MatIconModule, AsyncPipe],
  templateUrl: './header.component.html',
  styleUrl: './header.component.scss',
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class HeaderComponent {
  public readonly sidebarSignal = inject(SideBarSignal);
  count$: Observable<number>;

  constructor(private store: Store<AppState>){
    this.count$ = store.select(selectCount);
  }
  toggle() {
    this.sidebarSignal.sidebarOpen.update(val => !val);
  }
}
