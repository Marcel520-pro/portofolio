import { Component } from '@angular/core';
import { TESTIMONIALS } from '../data/portfolio.data';

@Component({
  selector: 'app-testimonials',
  standalone: true,
  template: `
    <section id="testimonials" class="section">
      <div class="container">
        <p class="label">TÉMOIGNAGES</p>
        <div class="grid">
          @for (t of items; track t.name) {
            <figure class="card">
              <span class="quote accent">“</span>
              <blockquote class="muted">{{ t.text }}</blockquote>
              <figcaption>
                <span class="avatar">{{ t.name[0] }}</span>
                <div><strong>{{ t.name }}</strong><small class="accent mono">{{ t.role }}</small></div>
              </figcaption>
            </figure>
          }
        </div>
      </div>
    </section>
  `,
  styles: `
    .grid { display: grid; grid-template-columns: repeat(auto-fit, minmax(260px, 1fr)); gap: 20px; }
    .quote { font-size: 36px; line-height: 1; display: block; }
    blockquote { font-size: 13px; margin: 8px 0 20px; }
    figcaption { display: flex; align-items: center; gap: 12px; }
    .avatar { width: 36px; height: 36px; border-radius: 50%; background: #222; display: grid; place-items: center; font-weight: 600; }
    strong { display: block; font-size: 13px; }
    small { font-size: 10px; }
  `,
})
export class TestimonialsComponent {
  items = TESTIMONIALS;
}
