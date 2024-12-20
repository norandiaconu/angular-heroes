import { TestBed } from '@angular/core/testing';
import { Hero } from './hero';

import { InMemoryDataService } from './in-memory-data.service';

describe('InMemoryDataService', () => {
    let service: InMemoryDataService;
    let heroes: Hero[];

    beforeEach(() => {
        service = TestBed.inject(InMemoryDataService);
        heroes = [
            { id: 11, name: 'Dr Nice' },
            { id: 12, name: 'Narco' },
            { id: 13, name: 'Bombasto' },
            { id: 14, name: 'Celeritas' },
            { id: 15, name: 'Magneta' },
            { id: 16, name: 'RubberMan' },
            { id: 17, name: 'Dynama' },
            { id: 18, name: 'Dr IQ' },
            { id: 19, name: 'Magma' },
            { id: 20, name: 'Tornado' }
        ];
    });

    it('should be created', () => {
        expect(service).toBeTruthy();
    });

    it('should createDb', () => {
        expect(service.createDb()).toEqual({heroes});
    });

    it('should genId', () => {
        expect(service.genId(heroes)).toEqual(21);
    });

    it('should genId with empty list', () => {
        heroes = [];
        expect(service.genId(heroes)).toEqual(11);
    });
});
