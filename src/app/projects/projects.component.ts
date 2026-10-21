import { Component } from '@angular/core';
import { PROJECTS } from '../data/portfolio.data';

@Component({
  selector: 'app-projects',
  standalone: true,
  template: `
    <section id="projects" class="section">
      <div class="container">
        <div class="head">
          <p class="label">PROJETS EN VEDETTE</p>
          <a href="#" class="mono accent all">Voir tout →</a>
        </div>
        <div class="grid">
          @for (p of projects; track p.name) {
            <article class="card project">
              <div class="preview"><span class="badge mono">FEATURED</span></div>
              <h3>{{ p.name }}</h3>
              <p class="muted">{{ p.text }}</p>
              <div class="tags">
                @for (t of p.tags; track t) { <span class="tag">{{ t }}</span> }
              </div>
            </article>
          }
        </div>
      </div>
    </section>
  `,
  styles: `
    .head { display: flex; justify-content: space-between; }
    .all { font-size: 11px; }
    .grid { display: grid; grid-template-columns: repeat(auto-fit, minmax(260px, 1fr)); gap: 20px; }
    .project { padding: 0 0 16px; overflow: hidden; transition: border-color .2s; }
    .project:hover { border-color: var(--accent); }
    .preview { position: relative; height: 150px; background: linear-gradient(135deg, #1a2a0a, #0d110d); margin-bottom: 16px; }
    .badge { position: absolute; top: 10px; right: 10px; font-size: 9px; padding: 2px 8px; background: rgba(182,255,26,.15); color: var(--accent); }
    h3 { padding: 0 16px; font-size: 15px; }
    p { padding: 4px 16px 12px; font-size: 12px; }
    .tags { display: flex; gap: 6px; flex-wrap: wrap; padding: 0 16px; }
  `,
})
export class ProjectsComponent {
  projects = PROJECTS;
}
