import { Component, ViewChild, inject } from '@angular/core';
import { AsyncPipe, CommonModule } from '@angular/common';
import { RouterLink, RouterOutlet } from '@angular/router';
import { HeaderComponent } from './core/components/header/header.component';
import { FooterComponent } from './core/components/footer/footer.component';
import { HeroComponent } from './core/components/hero/hero.component';
import { MatButtonModule } from '@angular/material/button';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatCheckboxModule } from '@angular/material/checkbox';
import { MatSidenav, MatSidenavModule } from '@angular/material/sidenav';
import { MatInputModule } from '@angular/material/input';
import { SideBarSignal } from './shared/signals/sidebar.signal';
import { ScreenSizeDirective } from './shared/directives/screen-size.directive';
import { ScreenSizeSignal } from './shared/signals/screen-size.signal';
import { CounterComponent } from './counter/counter.component';
import { Observable } from 'rxjs/internal/Observable';
import { Store } from '@ngrx/store';
import { AppState } from './states/app.state';
import { selectCount } from './states/counter/counter.selector';
import { ProductComponent } from './product/product.component';
import { IProduct } from './shared/models/product.interface';
import { selectCartProducts } from './states/cart/cart.selector';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [
    CommonModule,
    RouterOutlet,
    RouterLink,
    HeaderComponent,
    FooterComponent,
    HeroComponent,
    MatButtonModule,
    MatSidenavModule,
    ScreenSizeDirective,
    MatSidenavModule,
    MatCheckboxModule,
    MatFormFieldModule,
    MatButtonModule,
    MatInputModule,
    CounterComponent,
    ProductComponent,
    RouterLink,
    RouterOutlet
  ],
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss',
})
export class AppComponent {
  title = 'angular-material-tailwind-boilerplate';
  showFiller = false;
  sidebarSignal = inject(SideBarSignal);
  screenSignal = inject(ScreenSizeSignal);
  currentScreen = '';
  count$: Observable<number>;
  products$: Observable<IProduct[]>;

  constructor(private store: Store<AppState>) {
    this.count$ = store.select(selectCount);
    this.products$ = store.select(selectCartProducts);
  }

  @ViewChild('sidenav') sidenav!: MatSidenav;

  toggle() {
    this.sidenav.toggle();
    // this.showFiller = !this.showFiller;
    // this.showFiller ? this.sidenav.open() : this.sidenav.close();
  }
  computeSize(size: string) {
    this.currentScreen = size;
  }
}
