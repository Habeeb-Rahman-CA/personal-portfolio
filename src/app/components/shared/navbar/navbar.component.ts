import { CommonModule } from '@angular/common';
import { Component, inject, OnInit } from '@angular/core';
import { ScrollService } from '../../../services/scroll.service';

@Component({
  selector: 'app-navbar',
  imports: [CommonModule],
  templateUrl: './navbar.component.html',
  styleUrl: './navbar.component.css'
})
export class NavbarComponent implements OnInit {
  hideNavbar:boolean = false

  scrollService = inject(ScrollService)

  ngOnInit(): void {
      this.scrollService.scrollY$.subscribe(scrollY =>{
        this.hideNavbar = scrollY > 140
      })
  }
}
