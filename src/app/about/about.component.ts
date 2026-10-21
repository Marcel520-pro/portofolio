import { Component } from '@angular/core';
import { STATS } from '../data/portfolio.data';

@Component({
  selector: 'app-about',
  standalone: true,
  template: `
    <section id="about" class="section">
      <div class="container">
        <p class="label">À PROPOS</p>
        <div class="grid">
          <div class="photo card">
            <img src="assests/122.png" alt="Photo de Jerry Floyd Marcel" />
          </div>
          <div>
            <h2>Je suis Jerry Floyd Marcel, un développeur qui aime les <span class="accent">pixels</span> et la <span class="accent">performance</span>.</h2>
            <p class="muted">
              Avec peu d'expérience dans les applications web et les produits numériques, je mélange la précision du
              frontend et la logique du backend. J'accorde beaucoup d'importance à l'expérience utilisateur, à l'accessibilité
              et à un code qui passe à l'échelle.
            </p>
            <div class="stats">
              @for (s of stats; track s.label) {
                <div class="stat">
                  <span class="icon mono accent">{{ s.icon }}</span>
                  <div><strong>{{ s.value }}</strong><small class="muted">{{ s.label }}</small></div>
                </div>
              }
            </div>
          </div>
        </div>
      </div>
    </section>
  `,
  styles: `
    .grid { display: grid; grid-template-columns: 260px 1fr; gap: 40px; align-items: center; }
    .photo { height: 280px; display: flex; align-items: center; justify-content: center; overflow: hidden; border-left: 3px solid var(--accent); }
    .photo img { width: 100%; height: 100%; object-fit: cover; }
    h2 { font-size: 24px; font-weight: 500; line-height: 1.3; margin-bottom: 16px; }
    p { font-size: 14px; max-width: 520px; }
    .stats { display: flex; gap: 32px; margin-top: 28px; flex-wrap: wrap; }
    .stat { display: flex; align-items: center; gap: 12px; }
    .icon { width: 40px; height: 40px; display: grid; place-items: center; border: 1px solid var(--border); border-radius: 8px; font-size: 13px; }
    strong { display: block; font-size: 20px; line-height: 1.2; }
    small { font-size: 11px; }
    @media (max-width: 760px) { .grid { grid-template-columns: 1fr; } }
  `,
})
export class AboutComponent {
  stats = STATS;
}
