import { useEffect, useId, useRef, useState } from 'react';
import SectionTitle from './SectionTitle.jsx';
import { useContent } from '../../i18n.jsx';

/* Enquiry flow — LOCAL DEMONSTRATION ONLY.
   One question at a time, a segment per step, Enter to continue.
   Nothing is sent, stored or connected to any service; the last screen
   says so. Chip selections are stored by position so they survive a
   language switch. */

/* Set VITE_FORM_ENDPOINT (e.g. /api/enquiry) to send requests for real;
   without it the form stays a local prototype and nothing leaves the page. */
const ENDPOINT = import.meta.env.VITE_FORM_ENDPOINT || '';

const STEPS = ['nome', 'contacto', 'zona', 'objetivos', 'disponibilidade', 'formato', 'review'];

const empty = {
  nome: '',
  contacto: '',
  zona: '',
  objetivos: [],
  objetivosTexto: '',
  disponibilidade: [],
  disponibilidadeTexto: '',
  formato: null,
};

function validateStep(step, v, msg) {
  switch (step) {
    case 'nome':
      return v.nome.trim() ? '' : msg.name;
    case 'contacto':
      if (!v.contacto.trim()) return msg.contact;
      if (!/@/.test(v.contacto) && v.contacto.replace(/\D/g, '').length < 9) return msg.contactInvalid;
      return '';
    case 'zona':
      return v.zona.trim() ? '' : msg.area;
    case 'objetivos':
      return v.objetivos.length || v.objetivosTexto.trim() ? '' : msg.goals;
    case 'disponibilidade':
      return v.disponibilidade.length || v.disponibilidadeTexto.trim() ? '' : msg.availability;
    default:
      return '';
  }
}

function Chips({ name, options, values, onToggle, type = 'checkbox', autoFocus }) {
  return (
    <div className="chips__list flow__chips">
      {options.map((opt, idx) => {
        const checked = type === 'radio' ? values === idx : values.includes(idx);
        return (
          <label key={idx} className={`chip ${checked ? 'is-checked' : ''}`}>
            <input
              type={type}
              name={name}
              value={idx}
              checked={checked}
              onChange={() => onToggle(idx)}
              autoFocus={autoFocus && idx === 0}
            />
            <span>{opt}</span>
          </label>
        );
      })}
    </div>
  );
}

export default function Contact() {
  const { contact, ui } = useContent();
  const f = ui.form;
  const q = f.flow;
  const [values, setValues] = useState(empty);
  const [stepIndex, setStepIndex] = useState(0);
  const [dir, setDir] = useState(1);
  const [error, setError] = useState('');
  const [submitted, setSubmitted] = useState(null);
  const [sending, setSending] = useState(false);
  const [delivered, setDelivered] = useState(null);
  const [furthest, setFurthest] = useState(0);
  const [started, setStarted] = useState(false);
  const id = useId();
  const stepRef = useRef(null);
  const confirmRef = useRef(null);

  const step = STEPS[stepIndex];
  const total = STEPS.length;
  const pick = (list, idxs) => idxs.map((i) => list[i]);

  // focus the first control of each step as it arrives
  useEffect(() => {
    if (!started) return undefined;
    const t = window.setTimeout(() => {
      const el = stepRef.current?.querySelector('input:not([type=checkbox]):not([type=radio]), textarea, .flow__heading');
      el?.focus({ preventScroll: true });
    }, 60);
    return () => window.clearTimeout(t);
  }, [stepIndex, started]);

  // any "book a session" link on the page starts the flow
  useEffect(() => {
    const onClick = (e) => {
      const a = e.target instanceof Element ? e.target.closest('a[href="#contacto"]') : null;
      if (a) setStarted(true);
    };
    const onHash = () => window.location.hash === '#contacto' && setStarted(true);
    document.addEventListener('click', onClick);
    window.addEventListener('hashchange', onHash);
    return () => {
      document.removeEventListener('click', onClick);
      window.removeEventListener('hashchange', onHash);
    };
  }, []);

  const goTo = (i) => {
    setDir(i > stepIndex ? 1 : -1);
    setError('');
    setStepIndex(i);
  };

  const next = () => {
    const msg = validateStep(step, values, f.errors);
    if (msg) {
      setError(msg);
      return;
    }
    if (stepIndex < total - 1) {
      setFurthest((x) => Math.max(x, stepIndex + 1));
      goTo(stepIndex + 1);
    }
  };

  const back = () => stepIndex > 0 && goTo(stepIndex - 1);

  const set = (key) => (e) => {
    setError('');
    setValues((v) => ({ ...v, [key]: e.target.value }));
  };
  const toggle = (key) => (idx) => {
    setError('');
    setValues((v) => ({ ...v, [key]: v[key].includes(idx) ? v[key].filter((x) => x !== idx) : [...v[key], idx] }));
  };
  const chooseFormat = (idx) => {
    setValues((v) => ({ ...v, formato: idx }));
    window.setTimeout(() => {
      setFurthest((x) => Math.max(x, stepIndex + 1));
      goTo(stepIndex + 1);
    }, 320);
  };

  const onKeyDown = (e) => {
    if (e.key !== 'Enter') return;
    const t = e.target;
    if (t.tagName === 'TEXTAREA' || t.tagName === 'BUTTON' || t.tagName === 'A') return;
    e.preventDefault();
    if (step === 'review') submit();
    else next();
  };

  const submit = async () => {
    if (sending) return;
    const snapshot = { ...values };
    let ok = null;
    if (ENDPOINT) {
      setSending(true);
      try {
        const r = await fetch(ENDPOINT, {
          method: 'POST',
          headers: { 'Content-Type': 'application/json' },
          body: JSON.stringify({
            name: snapshot.nome,
            contact: snapshot.contacto,
            area: snapshot.zona,
            goals: pick(contact.goals, snapshot.objetivos),
            goalsNote: snapshot.objetivosTexto,
            availability: pick(contact.availability, snapshot.disponibilidade),
            availabilityNote: snapshot.disponibilidadeTexto,
            format: snapshot.formato === null ? '' : contact.formats[snapshot.formato],
            lang: document.documentElement.lang,
          }),
        });
        const data = await r.json().catch(() => ({}));
        ok = data.reason === 'unconfigured' ? null : r.ok && data.ok === true;
      } catch {
        ok = false;
      }
      setSending(false);
    }
    setDelivered(ok);
    setSubmitted(snapshot);
    window.requestAnimationFrame(() => confirmRef.current?.focus());
  };

  const reset = (keep) => {
    if (!keep) {
      setValues(empty);
      setFurthest(0);
    }
    setSubmitted(null);
    setDelivered(null);
    setError('');
    setDir(-1);
    setStepIndex(0);
  };

  const answers = [
    [f.name, values.nome, 0],
    [f.contact, values.contacto, 1],
    [f.area, values.zona, 2],
    [f.goals, [...pick(contact.goals, values.objetivos), values.objetivosTexto].filter(Boolean).join(' · '), 3],
    [f.availability, [...pick(contact.availability, values.disponibilidade), values.disponibilidadeTexto].filter(Boolean).join(' · '), 4],
    [f.format, values.formato === null ? '' : contact.formats[values.formato], 5],
  ];

  const renderStep = () => {
    switch (step) {
      case 'nome':
        return (
          <>
            <label htmlFor={`${id}-nome`} className="flow__q">
              {q.name}
            </label>
            <input id={`${id}-nome`} type="text" autoComplete="name" value={values.nome} onChange={set('nome')} aria-invalid={!!error} />
          </>
        );
      case 'contacto':
        return (
          <>
            <label htmlFor={`${id}-contacto`} className="flow__q">
              {q.contact}
            </label>
            <p className="flow__hint">{q.contactHint}</p>
            <input id={`${id}-contacto`} type="text" autoComplete="email" inputMode="email" value={values.contacto} onChange={set('contacto')} aria-invalid={!!error} />
          </>
        );
      case 'zona':
        return (
          <>
            <label htmlFor={`${id}-zona`} className="flow__q">
              {q.area}
            </label>
            <p className="flow__hint">{q.areaHint}</p>
            <input id={`${id}-zona`} type="text" placeholder={f.areaPlaceholder} value={values.zona} onChange={set('zona')} aria-invalid={!!error} />
          </>
        );
      case 'objetivos':
        return (
          <fieldset className="flow__fieldset">
            <legend className="flow__q">{q.goals}</legend>
            <p className="flow__hint">{q.goalsHint}</p>
            <Chips name="objetivos" options={contact.goals} values={values.objetivos} onToggle={toggle('objetivos')} />
            <label className="visually-hidden" htmlFor={`${id}-objetivosTexto`}>
              {f.goalsMore}
            </label>
            <textarea id={`${id}-objetivosTexto`} rows={2} placeholder={f.goalsPlaceholder} value={values.objetivosTexto} onChange={set('objetivosTexto')} />
          </fieldset>
        );
      case 'disponibilidade':
        return (
          <fieldset className="flow__fieldset">
            <legend className="flow__q">{q.availability}</legend>
            <p className="flow__hint">{q.availabilityHint}</p>
            <Chips name="disponibilidade" options={contact.availability} values={values.disponibilidade} onToggle={toggle('disponibilidade')} />
            <label className="visually-hidden" htmlFor={`${id}-dispTexto`}>
              {f.availabilityMore}
            </label>
            <input id={`${id}-dispTexto`} type="text" placeholder={f.availabilityPlaceholder} value={values.disponibilidadeTexto} onChange={set('disponibilidadeTexto')} />
          </fieldset>
        );
      case 'formato':
        return (
          <fieldset className="flow__fieldset">
            <legend className="flow__q">{q.format}</legend>
            <p className="flow__hint">{q.formatHint}</p>
            <Chips name="formato" type="radio" options={contact.formats} values={values.formato} onToggle={chooseFormat} />
          </fieldset>
        );
      default:
        return (
          <>
            <h3 className="flow__q flow__heading" tabIndex={-1}>
              {q.review}
            </h3>
            <dl className="flow__review">
              {answers.map(([label, value, i]) => (
                <div key={label}>
                  <dt>{label}</dt>
                  <dd>{value || <span className="flow__empty">—</span>}</dd>
                  <button type="button" className="flow__edit" onClick={() => goTo(i)}>
                    {q.edit}
                  </button>
                </div>
              ))}
            </dl>
          </>
        );
    }
  };

  return (
    <section className="section contact on-dark" id="contacto" aria-labelledby="contacto-title">
      <div className="wrap contact__grid">
        <div className="contact__intro">
          <SectionTitle id="contacto-title" kicker={contact.kicker} lines={contact.title} />
        </div>

        <div className="contact__panel">
          {!started && !submitted ? (
            <div className="flow-start">
              <button type="button" className="btn btn--big" onClick={() => setStarted(true)}>
                {ui.cta} <span className="btn__arrow" aria-hidden="true">→</span>
              </button>
            </div>
          ) : submitted ? (
            <div className="confirm" ref={confirmRef} tabIndex={-1} role="status" aria-live="polite">
              <p className="kicker">{f.confirm.kicker}</p>
              <h3 className="h2 confirm__title">
                <span className="br">{f.confirm.title[0]}</span>
                <span className="br slant">{f.confirm.title[1]}</span>
              </h3>
              <p className="soft">{f.confirm.text}</p>
              <dl className="confirm__summary">
                {answers
                  .filter(([, v]) => v)
                  .map(([label, value]) => (
                    <div key={label}>
                      <dt>{label}</dt>
                      <dd>{value}</dd>
                    </div>
                  ))}
              </dl>
              {delivered !== true && (
                <p className="form__demo">
                  <span className="form__demo-dot" aria-hidden="true" />
                  {delivered === false ? f.confirm.failed : f.confirm.demo}
                </p>
              )}
              <div className="confirm__actions">
                <button type="button" className="btn btn--ghost" onClick={() => reset(false)}>
                  {f.confirm.restart}
                </button>
              </div>
            </div>
          ) : (
            <form
              className="flow"
              onSubmit={(e) => {
                e.preventDefault();
                if (step === 'review') submit();
                else next();
              }}
              onKeyDown={onKeyDown}
              noValidate
              aria-describedby={ENDPOINT ? undefined : `${id}-demo`}
              aria-busy={sending}
            >
              {!ENDPOINT && (
                <p className="form__demo" id={`${id}-demo`}>
                  <span className="form__demo-dot" aria-hidden="true" />
                  {f.demo}
                </p>
              )}

              <div className="flow__progress" role="progressbar" aria-valuemin={1} aria-valuemax={total} aria-valuenow={stepIndex + 1} aria-label={q.progress}>
                <div className="flow__segs" aria-hidden="true">
                  {STEPS.map((s, i) => (
                    <button
                      key={s}
                      type="button"
                      tabIndex={-1}
                      className={`flow__seg ${i < stepIndex ? 'is-done' : ''} ${i === stepIndex ? 'is-active' : ''}`}
                      disabled={i > furthest}
                      onClick={() => i <= furthest && goTo(i)}
                    />
                  ))}
                </div>
                <span className="flow__count" aria-hidden="true">
                  {String(stepIndex + 1).padStart(2, '0')} <span>/ {String(total).padStart(2, '0')}</span>
                </span>
              </div>

              <div className="flow__viewport">
                <div key={step} ref={stepRef} className="flow__step" data-dir={dir}>
                  {renderStep()}
                  {error && (
                    <p className="field__error flow__error" role="alert">
                      {error}
                    </p>
                  )}
                </div>
              </div>

              <div className="flow__actions">
                {stepIndex > 0 ? (
                  <button type="button" className="btn btn--ghost" onClick={back}>
                    ← {q.back}
                  </button>
                ) : (
                  <span />
                )}
                {step === 'review' ? (
                  <button type="submit" className="btn" disabled={sending}>
                    {sending ? f.sending : f.submit} <span className="btn__arrow" aria-hidden="true">→</span>
                  </button>
                ) : step !== 'formato' ? (
                  <span className="flow__next">
                    <button type="submit" className="btn">
                      {q.continue} <span className="btn__arrow" aria-hidden="true">→</span>
                    </button>
                    <span className="flow__enter" aria-hidden="true">
                      {q.enter}
                    </span>
                  </span>
                ) : (
                  <span />
                )}
              </div>
            </form>
          )}
        </div>
      </div>
    </section>
  );
}
