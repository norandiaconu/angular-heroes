import { Component, OnInit, inject } from '@angular/core';
import { Hero } from '../hero';
import { ActivatedRoute } from '@angular/router';
import { Location, UpperCasePipe } from '@angular/common';
import { HeroService } from '../hero.service';
import { FormsModule } from '@angular/forms';

@Component({
    selector: 'app-hero-detail',
    templateUrl: './hero-detail.component.html',
    styleUrls: ['./hero-detail.component.css'],
    imports: [FormsModule, UpperCasePipe]
})
export class HeroDetailComponent implements OnInit {
    protected hero: Hero = new Hero();

    private readonly route = inject(ActivatedRoute);
    private readonly heroService = inject(HeroService);
    private readonly location = inject(Location);

    ngOnInit(): void {
        this.getHero();
    }

    protected goBack(): void {
        this.location.back();
    }

    protected save(): void {
        this.heroService.updateHero(this.hero).subscribe(() => this.goBack());
    }

    private getHero(): void {
        const id = this.route.snapshot.paramMap.get('id');
        const numId = id != null ? +id : 0;
        this.heroService.getHero(numId).subscribe((hero) => (this.hero = hero));
    }
}
