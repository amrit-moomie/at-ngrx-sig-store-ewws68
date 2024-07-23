import { Component, inject } from '@angular/core';
import { DecimalPipe } from '@angular/common';
import { bootstrapApplication } from '@angular/platform-browser';
import 'zone.js';
import { CurrencySwitcherComponent } from './currency-switcher/currency-switcher.component';
import { CurrencyStore } from './currency.store';
import { provideHttpClient } from '@angular/common/http';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [CurrencySwitcherComponent, DecimalPipe],
  template: `
    <h1>My store</h1>
    <app-currency-switcher> </app-currency-switcher>
    The price is: 
    {{currencyStore.currentCurrency().symbol}} 
    {{priceInUsd / currencyStore.exchangeRate() | number:'0.0-2'}}
  `,
})
export class App {
  currencyStore = inject(CurrencyStore);

  priceInUsd = 10;
}

bootstrapApplication(App, { providers: [provideHttpClient()] });
