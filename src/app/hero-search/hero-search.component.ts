import { Component, inject } from '@angular/core';
import { Observable, Subject } from 'rxjs';
import { debounceTime, distinctUntilChanged, switchMap } from 'rxjs/operators';
import { Hero } from '../hero';
import { HeroService } from '../hero.service';
import { AsyncPipe } from '@angular/common';
import { RouterLink } from '@angular/router';

@Component({
    selector: 'app-hero-search',
    templateUrl: './hero-search.component.html',
    styleUrls: ['./hero-search.component.css'],
    standalone: true,
    imports: [RouterLink, AsyncPipe],
})
export class HeroSearchComponent {
    protected heroes$: Observable<Hero[]>;

    private readonly heroService = inject(HeroService);
    private readonly searchTerms = new Subject<string>();
    private readonly searchWait = 300;

    constructor() {
        this.heroes$ = this.searchTerms.pipe(
            debounceTime(this.searchWait),
            distinctUntilChanged(),
            switchMap((term: string) => this.heroService.searchHeroes(term))
        );
    }

    search(term: string): void {
        this.searchTerms.next(term);
    }
}
