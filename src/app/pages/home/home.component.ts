import { Component, HostListener, inject } from '@angular/core';
import { RouterModule } from '@angular/router';
import { MatTabsModule } from '@angular/material/tabs';
import { MatIconModule } from '@angular/material/icon'
import { CommonModule } from '@angular/common';
import { IWork } from '../../interface/works.interface';
import { IExperience } from '../../interface/experience.interface';

@Component({
  selector: 'app-home',
  imports: [RouterModule, MatTabsModule, CommonModule, MatIconModule],
  templateUrl: './home.component.html',
  styleUrl: './home.component.css',
})
export class HomeComponent {

  //experience section
  experiences: IExperience[] = [
    {
      role: "Software Developer",
      companyName: "Seeroo",
      desc: "Worked with the Web team, contributing to both client and server-side development. Built, developed, and maintained large-scale applications while working on production-level code. Currently continuing my journey at Seeroo IT Solutions, gaining hands-on experience in full-stack development.",
      joinDate: "January 2025", // format - (Month<space>Year)
      quitDate: "Present",
      tools: ["Angular", "Nest.js", "PostegreSQL", "Node.js", "React"]
    },
    {
      role: "MEAN Stack Intern",
      companyName: "Edure",
      desc: "Developed and maintained large-scale applications, building a strong foundation in full-stack development and gaining deep expertise in web development. Additionally, worked on freelance projects for various clients during this period.",
      joinDate: "July 2024", // format - (Month<space>Year)
      quitDate: "December 2024",
      tools: ["Angular", "Express.js", "MongoDB", "Node.js", "Firebase", "Figma"]
    },
  ]

  // work section
  works: IWork[] = [
    {
      name: "ArtOgram",
      desc: "Lorem ipsum dolor sit, amet consectetur adipisicing elit. Culpa voluptas beatae qui inventoreexplicabo exdolor deleniti molestias, corrupti pariatur eius omnis nemo architecto laudantium quis reiciendis voluptatibus rem. Vitae? lorem",
      imgUrl: "artOgram.png",
      link: "https://artogram.netlify.app/home",
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
}
