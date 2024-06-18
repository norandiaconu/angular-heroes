import { Component } from "@angular/core";
import { Observable, Subject } from "rxjs";
import { debounceTime, distinctUntilChanged, switchMap } from "rxjs/operators";
import { Hero } from "../hero";
import { HeroService } from "../hero.service";

@Component({
  selector: "app-hero-search",
  templateUrl: "./hero-search.component.html",
  styleUrls: ["./hero-search.component.css"]
})
export class HeroSearchComponent {
  heroes$: Observable<Hero[]>;
  private readonly searchTerms = new Subject<string>();
  searchWait = 300;

  constructor(private readonly heroService: HeroService) {
    this.heroes$ = this.searchTerms.pipe(
      debounceTime(this.searchWait), distinctUntilChanged(), switchMap(
        (term: string) => this.heroService.searchHeroes(term)
      )
    );
  }

  search(term: string): void {
    this.searchTerms.next(term);
  }
}
