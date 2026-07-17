import { Component, OnInit, inject } from '@angular/core';
import { RouterLink } from '@angular/router';
import { Hero } from '../hero';
import { HeroSearchComponent } from '../hero-search/hero-search.component';
import { HeroService } from '../hero.service';

@Component({
    selector: 'app-dashboard',
    templateUrl: './dashboard.component.html',
    styleUrls: ['./dashboard.component.scss'],
    imports: [RouterLink, HeroSearchComponent]
})
export class DashboardComponent implements OnInit {
    protected heroes: Hero[] = [];

    private readonly heroService = inject(HeroService);

    ngOnInit() {
        this.getHeroes();
    }

    private getHeroes(): void {
        this.heroService.getHeroes().subscribe((heroes) => (this.heroes = heroes.slice(1, 5)));
    }
}
