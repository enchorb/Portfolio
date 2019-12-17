import {Component, ViewEncapsulation} from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
  encapsulation: ViewEncapsulation.None // Styles Apply To Entire Document (Allow Passing Class Through JSON)
})
export class AppComponent {
  brandCards = [
    {
      img: './../assets/brands/thumbnails/singularityprosperity.jpg',
      logo: './../assets/brands/logos/singularityprosperity.png',
      logo_width: '15%',
      name: 'Singularity Prosperity',
      // tslint:disable-next-line:max-line-length
      desc: 'A STEM brand founded by me in 2017 with a community of 50,000 individuals and growing. The goal of this brand is to educate, inspire and start discussion about the future of our world and humanity.',
      tags: ['After Effects', 'Photoshop', 'Management', 'Design', 'Futurism', 'Sustainability'],
      buttons: [
        {
          name: 'View Site',
          link: 'https://www.singularityprosperity.com/',
          // tslint:disable-next-line:max-line-length
          path: 'M6 17c2.269-9.881 11-11.667 11-11.667v-3.333l7 6.637-7 6.696v-3.333s-6.17-.171-11 5zm12 .145v2.855h-16v-12h6.598c.768-.787 1.561-1.449 2.339-2h-10.937v16h20v-6.769l-2 1.914z',
          color: '#ffffff',
          background: '#ff7e68'
        }
      ],
    }
  ];

  projectCards = [
    {
      img: './../assets/projects/thumbnails/mirror.jpg',
      logo: './../assets/projects/logos/mirror.png',
      logo_width: '10%',
      name: 'Magic Mirror',
      // tslint:disable-next-line:max-line-length
      desc: 'This application was part of my final-year engineering project. It incorporates user state management through the use of RxJS observables and a NoSQL database in <a class="info-link"  rel="noopener" href="https://firebase.google.com/" target="_blank" title="Firebase">Firebase</a>. Real-time location-based data is fetched from a <a class="info-link"  rel="noopener" href="https://newsapi.org/" target="_blank" title="News API">news</a> and <a class="info-link"  rel="noopener" href="https://openweathermap.org/" target="_blank" title="Weather API">weather</a> API and auto-updated every 15-minutes.',
      tags: ['HTML5', 'CSS3', 'TypeScript', 'Angular', 'Material Design', 'AWS', 'RxJS', 'Firebase', 'API'],
      buttons: [
        {
          name: 'Live Demo',
          link: 'https://mirror.ankurbargotra.com/',
          // tslint:disable-next-line:max-line-length
          path: 'M6 17c2.269-9.881 11-11.667 11-11.667v-3.333l7 6.637-7 6.696v-3.333s-6.17-.171-11 5zm12 .145v2.855h-16v-12h6.598c.768-.787 1.561-1.449 2.339-2h-10.937v16h20v-6.769l-2 1.914z',
          color: '#ffffff',
          background: '#ff7e68'
        },
        {
          name: 'View Source',
          link: 'https://github.com/enchorb/MagicMirror',
          // tslint:disable-next-line:max-line-length
          path: 'M12 0c-6.626 0-12 5.373-12 12 0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23.957-.266 1.983-.399 3.003-.404 1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576 4.765-1.589 8.199-6.086 8.199-11.386 0-6.627-5.373-12-12-12z',
          color: '#ff7e68',
          background: '#ffffff'
        }
      ],
    },
    {
      img: './../assets/projects/thumbnails/portfolio.jpg',
      logo: './../assets/projects/logos/portfolio.png',
      logo_width: '10%',
      name: 'Portfolio',
      // tslint:disable-next-line:max-line-length
      desc: 'This page! A responsive single-page application built with Angular. The site content is parsed in as JSON data, auto-generating modular components for easy maintenance.',
      tags: ['HTML5', 'CSS3', 'TypeScript', 'Angular', 'Material Design', 'AWS'],
      buttons: [
        {
          name: 'Live Demo',
          link: 'https://ankurbargotra.com/',
          // tslint:disable-next-line:max-line-length
          path: 'M6 17c2.269-9.881 11-11.667 11-11.667v-3.333l7 6.637-7 6.696v-3.333s-6.17-.171-11 5zm12 .145v2.855h-16v-12h6.598c.768-.787 1.561-1.449 2.339-2h-10.937v16h20v-6.769l-2 1.914z',
          color: '#ffffff',
          background: '#ff7e68'
        },
        {
          name: 'View Source',
          link: 'https://github.com/enchorb/Portfolio',
          // tslint:disable-next-line:max-line-length
          path: 'M12 0c-6.626 0-12 5.373-12 12 0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23.957-.266 1.983-.399 3.003-.404 1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576 4.765-1.589 8.199-6.086 8.199-11.386 0-6.627-5.373-12-12-12z',
          color: '#ff7e68',
          background: '#ffffff'
        }
      ],
    },
    {
      img: './../assets/projects/thumbnails/sorting.jpg',
      logo: './../assets/projects/logos/sorting.png',
      logo_width: '10%',
      name: 'Sort Visualizer',
      // tslint:disable-next-line:max-line-length
      desc: 'This project was my first personal application built with Angular. It incorporates Material Design to make a functional, yet elegant app that allows one to see how sorting algorithms compute.',
      tags: ['HTML5', 'CSS3', 'TypeScript', 'Angular', 'Material Design', 'AWS'],
      buttons: [
        {
          name: 'Live Demo',
          link: 'https://sorting.ankurbargotra.com/',
          // tslint:disable-next-line:max-line-length
          path: 'M6 17c2.269-9.881 11-11.667 11-11.667v-3.333l7 6.637-7 6.696v-3.333s-6.17-.171-11 5zm12 .145v2.855h-16v-12h6.598c.768-.787 1.561-1.449 2.339-2h-10.937v16h20v-6.769l-2 1.914z',
          color: '#ffffff',
          background: '#ff7e68'
        },
        {
          name: 'View Source',
          link: 'https://github.com/enchorb/SortingApp',
          // tslint:disable-next-line:max-line-length
          path: 'M12 0c-6.626 0-12 5.373-12 12 0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23.957-.266 1.983-.399 3.003-.404 1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576 4.765-1.589 8.199-6.086 8.199-11.386 0-6.627-5.373-12-12-12z',
          color: '#ff7e68',
          background: '#ffffff'
        }
      ],
    }
  ];

  scroll(el: HTMLElement) {
    el.scrollIntoView({behavior: 'smooth', block: 'start'});
  }
}
