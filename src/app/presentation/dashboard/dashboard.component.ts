import { Component } from '@angular/core';
import { RouterOutlet,RouterLink } from '@angular/router';


@Component({
  selector: 'app-dshboard',
  standalone: true,
  imports: [ RouterOutlet,RouterLink,  ],
  templateUrl: './dashboard.component.html',
  styleUrl: './dashboard.component.css'
})
export class DashboardComponent {
  title = 'Dashboard';
}
