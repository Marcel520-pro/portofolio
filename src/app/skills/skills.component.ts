import { Component } from '@angular/core';
import { SKILLS } from '../data/portfolio.data';

@Component({
  selector: 'app-skills',
  standalone: true,
  template: `
    <section id="skills" class="section">
      <div class="container">
        <p class="label">COMPÉTENCES &amp; SERVICES</p>
        <div class="grid">
          @for (s of skills; track s.title) {
            <article class="card">
              <span class="icon mono accent">{{ s.icon }}</span>
              <h3>{{ s.title }}</h3>
              <p class="muted">{{ s.text }}</p>
            </article>
          }
        </div>
      </div>
    </section>
  `,
  styles: `
    .grid { display: grid; grid-template-columns: repeat(auto-fit, minmax(150px, 1fr)); gap: 16px; }
    .icon { font-size: 20px; display: block; margin-bottom: 20px; }
    h3 { font-size: 13px; font-weight: 600; margin-bottom: 8px; }
    p { font-size: 11px; }
  `,
})
export class SkillsComponent {
  skills = SKILLS;
}
