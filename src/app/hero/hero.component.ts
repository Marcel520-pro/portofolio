import { Component } from '@angular/core';
import { PROFILE } from '../data/portfolio.data';

@Component({
  selector: 'app-hero',
  standalone: true,
  template: `
    <section id="home" class="hero container">
      <div class="text">
        <p class="mono accent hello">&lt; Hello, I'm /&gt;</p>
        <h1>{{ p.name.toUpperCase() }} <span class="accent">{{ p.lastName.toUpperCase() }}</span></h1>
        <p class="mono role">{{ p.role }}</p>
        <p class="muted intro">{{ p.intro }}</p>
        <div class="actions">
          <a href="#projects" class="btn btn-primary">Voir mes projets</a>
          <a href="#" class="btn">Télécharger mon CV</a>
        </div>
        <p class="mono accent avail">// Disponible pour freelance &amp; CDI</p>
      </div>

      <div class="code card" aria-hidden="true">
        <div class="dots"><i></i><i></i><i></i></div>
<pre class="mono"><span class="muted">01</span> const <span class="accent">AdrianCole</span> = &#123;
<span class="muted">02</span>   role: <span class="accent">'Software Engineer'</span>,
<span class="muted">03</span>   focus: [<span class="accent">'Frontend'</span>, <span class="accent">'Backend'</span>, <span class="accent">'UX'</span>],
<span class="muted">04</span>   code: <span class="accent">'Clean'</span>,
<span class="muted">05</span>   design: <span class="accent">'Intentional'</span>,
<span class="muted">06</span>   mission: <span class="accent">'Build fast, accessible
<span class="muted">07</span>     and delightful products.'</span>,
<span class="muted">08</span>   tech: [<span class="accent">'TypeScript'</span>, <span class="accent">'React'</span>,
<span class="muted">09</span>     <span class="accent">'Node.js'</span>, <span class="accent">'PostgreSQL'</span>]
<span class="muted">10</span> &#125;;
<span class="muted">11</span>
<span class="muted">12</span> <span class="muted">// Building the future, one commit at a time.</span></pre>
      </div>
    </section>
  `,
  styles: `
    .hero { display: grid; grid-template-columns: 1fr 1fr; gap: 48px; align-items: center; padding-top: 80px; padding-bottom: 80px; }
    .hello { font-size: 14px; margin-bottom: 12px; }
    h1 { font-family: var(--mono); font-size: clamp(36px, 6vw, 60px); line-height: 1.1; }
    .role { margin: 12px 0 20px; font-size: 14px; letter-spacing: 1px; }
    .intro { max-width: 440px; font-size: 14px; }
    .actions { display: flex; gap: 12px; margin: 28px 0 20px; flex-wrap: wrap; }
    .avail { font-size: 11px; opacity: .8; }
    .code { padding: 0; overflow: hidden; }
    .dots { display: flex; gap: 6px; padding: 12px 16px; border-bottom: 1px solid var(--border); }
    .dots i { width: 10px; height: 10px; border-radius: 50%; background: #2a2f2a; }
    pre { padding: 16px; font-size: 12px; line-height: 1.8; overflow-x: auto; }
    @media (max-width: 860px) { .hero { grid-template-columns: 1fr; padding-top: 48px; } }
  `,
})
export class HeroComponent {
  p = PROFILE;
}
