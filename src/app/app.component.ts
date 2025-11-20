import { Component } from '@angular/core';
import { RouterLink, RouterOutlet } from '@angular/router';
import { MessagesComponent } from './messages/messages.component';

@Component({
    selector: 'app-root',
    templateUrl: './app.component.html',
    styleUrls: ['./app.component.css'],
    imports: [RouterLink, RouterOutlet, MessagesComponent]
})
export class AppComponent {
    protected title = 'Tour of Heroes';
}
