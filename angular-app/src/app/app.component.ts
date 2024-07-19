import { Component, HostListener } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'angular-app'
  message: string = '';
  @HostListener('window:reactToAngularEvent', ['$event'])
  onCustomEvent(event: CustomEvent) {
    console.log('hi from angular')
    console.log('Received event from React:', event);
    this.message = event.detail.message;
    console.log('Message received:', this.message);
  }
}
