import { Component } from '@angular/core';
import { EXPERIENCES } from '../data/portfolio.data';

@Component({
  selector: 'app-experience',
  standalone: true,
  template: `
    <section id="experience" class="section">
      <div class="container">
        <p class="label">EXPÉRIENCE</p>
        <ol class="timeline">
          @for (e of experiences; track e.title) {
            <li>
              <span class="period mono accent">{{ e.period }}</span>
              <div class="who"><strong>{{ e.title }}</strong><small class="muted">{{ e.company }}</small></div>
              <p class="muted">{{ e.text }}</p>
            </li>
          }
        </ol>
      </div>
    </section>
  `,
  styles: `
    .timeline { list-style: none; border-left: 1px solid var(--accent); padding-left: 24px; display: grid; gap: 28px; }
    li { display: grid; grid-template-columns: 140px 220px 1fr; gap: 20px; align-items: center; position: relative; }
    li::before { content: ''; position: absolute; left: -29px; width: 9px; height: 9px; border-radius: 50%; background: var(--accent); }
    .period { font-size: 11px; }
    .who strong { display: block; font-size: 14px; }
    small, p { font-size: 12px; }
    @media (max-width: 760px) { li { grid-template-columns: 1fr; gap: 4px; } }
  `,
})
export class ExperienceComponent {
  experiences = EXPERIENCES;
}
