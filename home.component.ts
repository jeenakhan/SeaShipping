import { Component } from '@angular/core';
import { trigger, style, transition, animate } from '@angular/animations';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css'],
  animations: [
    trigger('slideInUp', [
      transition(':enter', [
        style({ transform: 'translateY(100%)', opacity: 0 }), // Initial state
        animate('0.7s ease-out', style({ transform: 'translateY(0)', opacity: 1 })) // Final state
      ])
    ]),
    trigger('slideInDown', [
      transition(':enter', [
        style({ transform: 'translateY(-100%)', opacity: 0 }), // Initial state
        animate('0.7s ease-out', style({ transform: 'translateY(0)', opacity: 1 })) // Final state
      ])
    ])
  ]
})
export class HomeComponent {
}