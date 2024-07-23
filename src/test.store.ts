import { HttpClient } from '@angular/common/http';
import { computed, inject } from '@angular/core';
import { addEntities, addEntity, withEntities } from '@ngrx/signals/entities';
import { patchState, signalStore, type, withComputed, withHooks, withState } from '@ngrx/signals';
} from '@ngrx/signals';
import { rxMethod } from '@ngrx/signals/rxjs-interop';
import { of, pipe, switchMap, tap } from 'rxjs';

interface Person {
  name: string;
  age: number;
}

export const CurrencyStore = signalStore(
  { providedIn: 'root' },
  withEntities({ entity: type<Person>(), collection: 'person' }),
  withComputed({ data }) => ({
    exchangeRate: computed(() => data),
  })
)
