import { BrowserModule } from "@angular/platform-browser";
import { importProvidersFrom, NgModule } from "@angular/core";

import { AppComponent } from "./app.component";
import { HeroesComponent } from "./heroes/heroes.component";
import { FormsModule } from "@angular/forms";
import { HeroDetailComponent } from "./hero-detail/hero-detail.component";
import { MessagesComponent } from "./messages/messages.component";
import { AppRoutingModule } from "./app-routing.module";
import { DashboardComponent } from "./dashboard/dashboard.component";
import {
    provideHttpClient,
    withInterceptorsFromDi,
} from "@angular/common/http";
import { HttpClientInMemoryWebApiModule } from "angular-in-memory-web-api";
import { InMemoryDataService } from "./in-memory-data.service";
import { HeroSearchComponent } from "./hero-search/hero-search.component";

@NgModule({
    declarations: [
        AppComponent,
        HeroesComponent,
        HeroDetailComponent,
        MessagesComponent,
        DashboardComponent,
        HeroSearchComponent,
    ],
    bootstrap: [AppComponent],
    imports: [BrowserModule, FormsModule, AppRoutingModule],
    providers: [
        provideHttpClient(withInterceptorsFromDi()),
        importProvidersFrom([
            HttpClientInMemoryWebApiModule.forRoot(InMemoryDataService, {
                dataEncapsulation: false,
            }),
        ]),
    ],
})
export class AppModule {}
