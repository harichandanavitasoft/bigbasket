import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { RouterLink, RouterOutlet } from '@angular/router';

@Component({
  selector: 'app-hdfc-discount',
  standalone: true,
  imports: [CommonModule,RouterLink,RouterOutlet],
  templateUrl: './hdfc-discount.component.html',
  styleUrl: './hdfc-discount.component.css'
})
export class HdfcDiscountComponent {

}
