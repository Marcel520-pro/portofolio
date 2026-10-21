import { Component } from '@angular/core';
import { NAV_LINKS, PROFILE } from '../data/portfolio.data';

@Component({
  selector: 'app-footer',
  standalone: true,
  template: `
    <footer>
      <div class="container bar">
        <span class="mono"><b class="accent">{{ p.initials }}_</b> <small class="muted">© 2025 {{ p.name }} {{ p.lastName }}. Tous droits réservés.</small></span>
        <nav>
          @for (l of links; track l.href) { <a [href]="l.href">{{ l.label }}</a> }
        </nav>
        <a href="#home" class="top" aria-label="Retour en haut">↑</a>
      </div>
    </footer>
  `,
  styles: `
    footer { border-top: 1px solid var(--border); }
    .bar { display: flex; align-items: center; justify-content: space-between; gap: 16px; min-height: 64px; flex-wrap: wrap; }
    nav { display: flex; gap: 16px; font-size: 11px; color: var(--muted); flex-wrap: wrap; }
    nav a:hover { color: var(--accent); }
    small { font-size: 11px; }
    .top { width: 32px; height: 32px; display: grid; place-items: center; border: 1px solid var(--border); border-radius: 6px; color: var(--accent); }
    @media (max-width: 760px) { nav { display: none; } }
  `,
})
export class FooterComponent {
  p = PROFILE;
  links = NAV_LINKS;
}
