import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { RouterLink, RouterOutlet } from '@angular/router';

@Component({
  selector: 'app-beans-okra',
  standalone: true,
  imports: [CommonModule,RouterLink,RouterOutlet],
  templateUrl: './beans-okra.component.html',
  styleUrl: './beans-okra.component.css'
})
export class BeansOkraComponent {

}
