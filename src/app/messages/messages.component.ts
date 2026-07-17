import { Component, inject } from '@angular/core';
import { MessageService } from '../message.service';

@Component({
    selector: 'app-messages',
    templateUrl: './messages.component.html',
    styleUrls: ['./messages.component.scss'],
    imports: []
})
export class MessagesComponent {
    protected readonly messageService = inject(MessageService);
}
