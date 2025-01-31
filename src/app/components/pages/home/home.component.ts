import { Component, HostListener, inject } from '@angular/core';
import { ScrollService } from '../../../services/scroll.service';
import { RouterModule } from '@angular/router';

@Component({
  selector: 'app-home',
  imports: [RouterModule],
  templateUrl: './home.component.html',
  styleUrl: './home.component.css'
})
export class HomeComponent {
  scrollService = inject(ScrollService)

  @HostListener('window:scroll', [])
  onWindowScroll(){
    this.scrollService.updateScrollY(window.scrollY)
  }
}
