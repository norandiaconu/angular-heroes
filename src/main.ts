import { enableProdMode, importProvidersFrom } from "@angular/core";
import { environment } from "./environments/environment";
import {
    provideHttpClient,
    withInterceptorsFromDi,
} from "@angular/common/http";
import { HttpClientInMemoryWebApiModule } from "angular-in-memory-web-api";
import { InMemoryDataService } from "./app/in-memory-data.service";
import { BrowserModule, bootstrapApplication } from "@angular/platform-browser";
import { FormsModule } from "@angular/forms";
import { AppRoutingModule } from "./app/app-routing.module";
import { AppComponent } from "./app/app.component";

if (environment.production) {
    enableProdMode();
}

bootstrapApplication(AppComponent, {
    providers: [
        importProvidersFrom(BrowserModule, FormsModule, AppRoutingModule),
        provideHttpClient(withInterceptorsFromDi()),
        importProvidersFrom([
            HttpClientInMemoryWebApiModule.forRoot(InMemoryDataService, {
                dataEncapsulation: false,
            }),
        ]),
    ],
}).catch((err) => console.error(err));
