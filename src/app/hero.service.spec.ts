import { TestBed } from '@angular/core/testing';
import { HeroService } from './hero.service';
import { provideHttpClient } from '@angular/common/http';

describe('HeroService', () => {
    let service: HeroService;

    beforeEach(() => {
        TestBed.configureTestingModule({
            providers: [provideHttpClient()]
        });
        service = TestBed.inject(HeroService);
    });

    it('should be created', () => {
        expect(service).toBeTruthy();
    });

    it('should getHeroes', () => {
        const sub = service.getHeroes().subscribe();
        sub.unsubscribe();
        expect(sub.closed).toBeTruthy();
    });

    it('should getHero', () => {
        const sub = service.getHero(0).subscribe();
        sub.unsubscribe();
        expect(sub.closed).toBeTruthy();
    });

    it('should updateHero', () => {
        const sub = service.updateHero({ name: 'test', id: 0 }).subscribe();
        sub.unsubscribe();
        expect(sub.closed).toBeTruthy();
    });

    it('should addHero', () => {
        const sub = service.addHero({ name: 'test', id: 0 }).subscribe();
        sub.unsubscribe();
        expect(sub.closed).toBeTruthy();
    });

    it('should deleteHero', () => {
        const sub = service.deleteHero({ name: 'test', id: 0 }).subscribe();
        sub.unsubscribe();
        expect(sub.closed).toBeTruthy();
    });

    it('should searchHeroes', () => {
        const sub = service.searchHeroes('test').subscribe();
        sub.unsubscribe();
        expect(sub.closed).toBeTruthy();
    });

    it('should searchHeroes with empty string', () => {
        const sub = service.searchHeroes('').subscribe();
        sub.unsubscribe();
        expect(sub.closed).toBeTruthy();
    });
});
