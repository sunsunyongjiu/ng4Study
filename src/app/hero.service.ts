import { Injectable } from '@angular/core';
import { Hero } from './hero';
import { HEROES } from './mock-heroes';
import { Observable } from 'rxjs/Observable';
import { MessageService } from './message.service';
import { of } from 'rxjs/observable/of';

@Injectable()
export class HeroService {
  getHeroes():Observable<Hero[]> {
    this.messageService.add('HeroService: fetched heroes');
    return of(HEROES)
  }
  constructor(private messageService: MessageService) { }

}
