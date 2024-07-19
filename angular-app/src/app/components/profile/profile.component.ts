import { Component, HostListener } from '@angular/core';
import { Subscription } from 'rxjs';
import eventBus from '../../../../../shared/eventBus';

@Component({
  selector: 'app-profile',
  standalone: true,
  imports: [],
  templateUrl: './profile.component.html',
  styleUrl: './profile.component.css'
})
export class ProfileComponent {
  ngOnInit(): void {
    console.log('Profile component initialized'); // Example console log
  }
  message: string = '';

  @HostListener('window:reactToAngularEvent', ['$event'])
  onCustomEvent(event: CustomEvent) {
    this.message = event.detail.message;
  }
}
