import { ComponentFixture, TestBed, waitForAsync } from '@angular/core/testing';
import { HeroSearchComponent } from '../hero-search/hero-search.component';
import { DashboardComponent } from './dashboard.component';
import { provideHttpClient } from '@angular/common/http';

describe('DashboardComponent', () => {
    let component: DashboardComponent;
    let fixture: ComponentFixture<DashboardComponent>;

    beforeEach(waitForAsync(() => {
        TestBed.configureTestingModule({
            imports: [DashboardComponent, HeroSearchComponent],
            providers: [provideHttpClient()]
        }).compileComponents();
    }));

    beforeEach(() => {
        fixture = TestBed.createComponent(DashboardComponent);
        component = fixture.componentInstance;
        fixture.detectChanges();
    });

    it('should create', () => {
        expect(component).toBeTruthy();
    });
});
