import { Component } from '@angular/core';
import { NAV_LINKS, PROFILE } from '../data/portfolio.data';

@Component({
  selector: 'app-navbar',
  standalone: true,
  template: `
    <header class="nav">
      <div class="container bar">
        <a href="#home" class="logo mono">{{ profile.initials }}<span class="accent">_</span></a>
        <nav class="links">
          @for (link of links; track link.href) {
            <a [href]="link.href">{{ link.label }}</a>
          }
        </nav>
        <a href="#contact" class="btn talk">Let's talk</a>
      </div>
    </header>
  `,
  styles: `
    .nav { position: sticky; top: 0; z-index: 10; background: rgba(10,10,10,.9); backdrop-filter: blur(8px); border-bottom: 1px solid var(--border); }
    .bar { display: flex; align-items: center; justify-content: space-between; height: 64px; }
    .logo { font-size: 20px; font-weight: 700; color: var(--accent); }
    .links { display: flex; gap: 28px; font-size: 13px; }
    .links a { color: var(--muted); transition: color .15s; }
    .links a:hover { color: var(--accent); }
    .talk { padding: 8px 16px; color: var(--accent); border-color: var(--accent); }
    @media (max-width: 860px) { .links { display: none; } }
  `,
})
export class NavbarComponent {
  links = NAV_LINKS;
  profile = PROFILE;
}
