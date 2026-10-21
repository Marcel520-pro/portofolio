import { Component, inject, signal } from '@angular/core';
import { FormBuilder, ReactiveFormsModule, Validators } from '@angular/forms';
import { PROFILE } from '../data/portfolio.data';

@Component({
  selector: 'app-contact',
  standalone: true,
  imports: [ReactiveFormsModule],
  template: `
    <section id="contact" class="section">
      <div class="container wrap">
        <div>
          <p class="label">CONTACT</p>
          <h2>Construisons quelque chose de génial ensemble.</h2>
          <p class="muted">Un projet en tête ou juste envie de dire bonjour ? J'adorerais avoir de vos nouvelles.</p>
        </div>

        <ul class="infos">
          <li h><span class="accent">✉</span> {{ p.email }}</li>
          <li><span class="accent">⌖</span> {{ p.location }}</li>
          <li><span class="accent">●</span> Disponible en freelance &amp; CDI</li>
        </ul>

        <form class="card" [formGroup]="form" (ngSubmit)="submit()">
          <div class="row">
            <input formControlName="name" placeholder="Votre nom" aria-label="Votre nom">
            <input formControlName="email" type="email" placeholder="Votre email" aria-label="Votre email">
          </div>
          <select formControlName="type" aria-label="Type de projet">
            <option value="">Type de projet</option>
            <option>Site web</option>
            <option>Application</option>
            <option>Autre</option>
          </select>
          <textarea formControlName="message" rows="4" placeholder="Parlez-moi de votre projet..." aria-label="Message"></textarea>

          @if (sent()) {
            <p class="ok mono">Votre message est prêt à être envoyé.</p>
          } @else if (form.invalid && form.touched) {
            <p class="err mono">Remplis ton nom, un email valide et un message.</p>
          }
          <button class="btn btn-primary" type="submit">Envoyer le message</button>
        </form>
      </div>
    </section>
  `,
  styles: `
    .wrap { display: grid; grid-template-columns: 1fr 1fr 1.2fr; gap: 32px; align-items: start; }
    h2 { font-size: 18px; font-weight: 500; margin-bottom: 12px; }
    p.muted { font-size: 13px; }
    .infos { display: grid; gap: 16px; font-size: 13px; padding-top: 40px; }
    form { display: grid; gap: 10px; }
    .row { display: grid; grid-template-columns: 1fr 1fr; gap: 10px; }
    input, select, textarea { width: 100%; background: #0c0f0c; border: 1px solid var(--border); border-radius: 6px; padding: 10px; color: var(--text); font: inherit; font-size: 12px; }
    textarea { resize: vertical; }
    .ok { color: var(--accent); font-size: 12px; }
    .err { color: #ff6b6b; font-size: 12px; }
    @media (max-width: 900px) { .wrap { grid-template-columns: 1fr; } .infos { padding-top: 0; } }
  `,
})
export class ContactComponent {
  p = PROFILE;
  sent = signal(false);

  private fb = inject(FormBuilder);
  form = this.fb.nonNullable.group({
    name: ['', Validators.required],
    email: ['', [Validators.required, Validators.email]],
    type: [''],
    message: ['', Validators.required],
  });

  submit() {
    this.form.markAllAsTouched();
    if (this.form.invalid) return;

    const { name, email, type, message } = this.form.getRawValue();
    const subject = `Message de contact — ${name}`;
    const body = `Nom : ${name}\nEmail : ${email}\nType de projet : ${type || 'Non précisé'}\n\n${message}`;
    const whatsappUrl = `https://wa.me/237674508339?text=${encodeURIComponent(body)}`;
    const emailUrl = `mailto:${this.p.email}?subject=${encodeURIComponent(subject)}&body=${encodeURIComponent(body)}`;

    window.open(whatsappUrl, '_blank', 'noopener,noreferrer');
    window.location.href = emailUrl;
    this.sent.set(true);
  }
}
