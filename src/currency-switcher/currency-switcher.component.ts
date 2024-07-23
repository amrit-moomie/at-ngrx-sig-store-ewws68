import { Component, inject } from '@angular/core';
import { CurrencyStore } from '../currency.store';

@Component({
  selector: 'app-currency-switcher',
  templateUrl: './currency-switcher.component.html',
  styleUrls: ['./currency-switcher.component.css'],
  standalone: true,
})
export class CurrencySwitcherComponent {
  currencyStore = inject(CurrencyStore);
}
