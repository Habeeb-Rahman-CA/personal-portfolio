import { Component, HostListener, inject } from '@angular/core';
import { ScrollService } from '../../../services/scroll.service';
import { RouterModule } from '@angular/router';
import { MatTabsModule } from '@angular/material/tabs';
import { MatIconModule } from '@angular/material/icon'
import { CommonModule } from '@angular/common';
import { IWork } from '../../../interface/works.interface';

@Component({
  selector: 'app-home',
  imports: [RouterModule, MatTabsModule, CommonModule, MatIconModule],
  templateUrl: './home.component.html',
  styleUrl: './home.component.css',
})
export class HomeComponent {
  scrollService = inject(ScrollService);

  works: IWork[] = [
    {
      name: "ArtOgram",
      desc: "Lorem ipsum dolor sit, amet consectetur adipisicing elit. Culpa voluptas beatae qui inventoreexplicabo exdolor deleniti molestias, corrupti pariatur eius omnis nemo architecto laudantium quis reiciendis voluptatibus rem. Vitae? lorem",
      imgUrl: "artOgram.png",
      link: "#",
      tools: ["MongoDB", "Express.js", "Angular", "Node.js", "Razorpay"]
    },
    {
      name: "Loom Collective",
      desc: "Lorem ipsum dolor sit, amet consectetur adipisicing elit. Culpa voluptas beatae qui inventoreexplicabo exdolor deleniti molestias, corrupti pariatur eius omnis nemo architecto laudantium quis reiciendis voluptatibus rem. Vitae? lorem",
      imgUrl: "loomCollective.png",
      link: "http://loomcollective.netlify.app",
      tools: ["PostgreSQL", "Nest.js", "Angular", "Node.js"]
    },
    {
      name: "Bitora.",
      desc: "Lorem ipsum dolor sit, amet consectetur adipisicing elit. Culpa voluptas beatae qui inventoreexplicabo exdolor deleniti molestias, corrupti pariatur eius omnis nemo architecto laudantium quis reiciendis voluptatibus rem. Vitae? lorem",
      imgUrl: "birora.png",
      link: "http://bitora.netlify.app",
      tools: ["HTML", "CSS", "Javascript", "Chart.js", "TradingView"]
    },
  ]

  @HostListener('window:scroll', [])
  onWindowScroll() {
    this.scrollService.updateScrollY(window.scrollY);
  }

}
