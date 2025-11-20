import { Component, inject } from '@angular/core';
import { MessageService } from '../message.service';

@Component({
    selector: 'app-messages',
    templateUrl: './messages.component.html',
    styleUrls: ['./messages.component.css'],
    imports: []
})
export class MessagesComponent {
    protected readonly messageService = inject(MessageService);
}
