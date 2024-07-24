import { Component, inject, OnInit } from '@angular/core';
import { PersonStore } from './data/person.store';
import { JsonPipe, NgFor } from '@angular/common';

@Component({
  selector: 'app-person-component',
  standalone: true,
  imports: [JsonPipe, NgFor],
  templateUrl: './person-component.component.html',
  styleUrl: './person-component.component.scss'
})

export class PersonComponentComponent implements OnInit {
  ngOnInit(): void {
    this.personStore.personEntities().sort((a, b) => a.age - b.age);
  }
  personStore = inject(PersonStore);
}
