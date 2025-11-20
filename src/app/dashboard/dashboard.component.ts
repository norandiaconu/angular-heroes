import { Component, OnInit, inject } from '@angular/core';
import { Hero } from '../hero';
import { HeroService } from '../hero.service';

import { RouterLink } from '@angular/router';
import { HeroSearchComponent } from '../hero-search/hero-search.component';

@Component({
    selector: 'app-dashboard',
    templateUrl: './dashboard.component.html',
    styleUrls: ['./dashboard.component.css'],
    imports: [RouterLink, HeroSearchComponent]
})
export class DashboardComponent implements OnInit {
    protected heroes: Hero[] = [];

    private heroService = inject(HeroService);

    ngOnInit() {
        this.getHeroes();
    }

    private getHeroes(): void {
        this.heroService.getHeroes().subscribe((heroes) => (this.heroes = heroes.slice(1, 5)));
    }
}
