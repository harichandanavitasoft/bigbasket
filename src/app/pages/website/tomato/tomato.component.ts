import { CommonModule } from '@angular/common';
import { Component, OnInit } from '@angular/core';
import { RouterLink, RouterOutlet } from '@angular/router';

@Component({
  selector: 'app-tomato',
  standalone: true,
  imports: [CommonModule,RouterLink,RouterOutlet],
  templateUrl: './tomato.component.html',
  styleUrl: './tomato.component.css'
})
export class TomatoComponent implements OnInit{
  constructor() { }
  ngOnInit(): void {
    this.setupAccordion();
    
  }
  setupAccordion() {
    const acc = document.getElementsByClassName("accordion");

    for (let i = 0; i < acc.length; i++) {
      acc[i].addEventListener("click", function(this: HTMLElement) {
        this.classList.toggle("active");
        const panel = this.nextElementSibling as HTMLElement;
        if (panel.style.maxHeight) {
          panel.style.maxHeight  = "";
        } else {
          panel.style.maxHeight = panel.scrollHeight + "px";
        }
      });
    }
  }
  



}
