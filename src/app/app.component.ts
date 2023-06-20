import { Component } from '@angular/core';
@Component({
  selector: 'app-root',
  templateUrl: 'app.component.html',
  styleUrls: ['app.component.scss'],
})
export class AppComponent {
  public appPages = [
    { title: 'aejemarc@gmail.com', url: '/folder/inbox', icon: 'mail' },
    { title: 'Gasang Mabini Batangas', url: '/folder/outbox', icon: '' },
    { title: 'BS Information Technology', url: '/folder/favorites', icon: '' },
    { title: 'Male', url: '/folder/archived', icon: '' },
    { title: '21 Years Old', url: '/folder/trash', icon: '' },
    { title: 'september 21,2001', url: '/folder/spam', icon: '' },
  ];
  public labels = ['God', 'Family', 'School', 'Friends', 'Travel', 'Reminders'];
  constructor() {}
}
