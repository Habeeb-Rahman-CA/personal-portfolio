import { Component, ElementRef, HostListener, inject } from '@angular/core';
import { ScrollService } from '../../../services/scroll.service';
import { RouterModule } from '@angular/router';
import { MatTabsModule } from '@angular/material/tabs';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-home',
  imports: [RouterModule, MatTabsModule, CommonModule],
  templateUrl: './home.component.html',
  styleUrl: './home.component.css',
})
export class HomeComponent {
  scrollService = inject(ScrollService);

  @HostListener('window:scroll', [])
  onWindowScroll() {
    this.scrollService.updateScrollY(window.scrollY);
  }
  
}
