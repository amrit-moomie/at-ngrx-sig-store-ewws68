
import { computed } from '@angular/core';
import { patchState, signalStore, type, withComputed, withHooks } from '@ngrx/signals';
import { addEntities, addEntity, EntityId, withEntities } from '@ngrx/signals/entities';

interface Person {
  Id: EntityId;
  name: string;
  age: number;
}

const entities: Person[] =
  [
    { Id: '1', name: 'John', age: 30 },
    { Id: '2', name: 'Jane', age: 25 },
    { Id: '3', name: 'Jack', age: 35 },
    { Id: '4', name: 'Jill', age: 40 },
    { Id: '5', name: 'Joe', age: 45 },
    { Id: '6', name: 'Jill', age: 50 },
    { Id: '7', name: 'Jill', age: 55 }
  ];

export const PersonStore = signalStore(
  { providedIn: 'root' },
  withEntities({ entity: type<Person>(), collection: 'person' }),
  withComputed((store) => {
    return {
      personEntities$: computed(() => store.personEntities())
    };
  }),
  withHooks({
    onInit: (store) => {
      patchState(store, addEntities(entities, { collection: 'person', idKey: 'Id' }));
    }
  })

)
