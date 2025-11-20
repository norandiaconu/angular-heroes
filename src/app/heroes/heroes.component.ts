import { Component, OnInit, inject } from '@angular/core';
import { Hero } from '../hero';
import { HeroService } from '../hero.service';
import { RouterLink } from '@angular/router';

@Component({
    selector: 'app-heroes',
    templateUrl: './heroes.component.html',
    styleUrls: ['./heroes.component.css'],
    imports: [RouterLink]
})
export class HeroesComponent implements OnInit {
    protected heroes: Hero[] = [];

    private readonly heroService = inject(HeroService);

    ngOnInit() {
        this.getHeroes();
    }

    protected add(name: string): void {
        name = name.trim();
        if (!name) {
            return;
        }
        this.heroService.addHero({ name } as Hero).subscribe((hero) => {
            this.heroes.push(hero);
        });
    }

    protected delete(hero: Hero): void {
        this.heroes = this.heroes.filter((h) => h !== hero);
        this.heroService.deleteHero(hero).subscribe();
    }

    private getHeroes(): void {
        this.heroService.getHeroes().subscribe((heroes) => (this.heroes = heroes));
    }
}
