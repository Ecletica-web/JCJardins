import { useId, useRef, useState } from 'react';
import SectionTitle from './SectionTitle.jsx';
import Photo from '../../components/Photo.jsx';
import { useContent } from '../../i18n.jsx';

/* Enquiry form — LOCAL DEMONSTRATION ONLY.
   Nothing is sent, stored or connected to any messaging or booking service.
   On submit it validates, then shows a confirmation that says so. */

const empty = {
  nome: '',
  contacto: '',
  zona: '',
  formato: null,
  objetivos: [],
  objetivosTexto: '',
  disponibilidade: [],
  disponibilidadeTexto: '',
};

function validate(v, msg) {
  const e = {};
  if (!v.nome.trim()) e.nome = msg.name;
  if (!v.contacto.trim()) e.contacto = msg.contact;
  else if (!/@/.test(v.contacto) && v.contacto.replace(/\D/g, '').length < 9) e.contacto = msg.contactInvalid;
  if (!v.zona.trim()) e.zona = msg.area;
  if (!v.objetivos.length && !v.objetivosTexto.trim()) e.objetivos = msg.goals;
  if (!v.disponibilidade.length && !v.disponibilidadeTexto.trim()) e.disponibilidade = msg.availability;
  return e;
}

function Field({ id, label, hint, error, required, optional, children }) {
  return (
    <div className={`field ${error ? 'has-error' : ''}`}>
      <label htmlFor={id} className="field__label">
        {label}
        {required ? <span className="field__req"> *</span> : <span className="field__opt"> {optional}</span>}
      </label>
      {hint && (
        <p className="field__hint" id={`${id}-hint`}>
          {hint}
        </p>
      )}
      {children}
      {error && (
        <p className="field__error" id={`${id}-error`}>
          {error}
        </p>
      )}
    </div>
  );
}

function ChipGroup({ name, legend, options, values, onToggle, error, type = 'checkbox', required, optional, children }) {
  const errId = `${name}-error`;
  return (
    <fieldset
      className={`field chips ${error ? 'has-error' : ''}`}
      aria-describedby={error ? errId : undefined}
      id={`grupo-${name}`}
      tabIndex={-1}
    >
      <legend className="field__label">
        {legend}
        {required ? <span className="field__req"> *</span> : <span className="field__opt"> {optional}</span>}
      </legend>
      <div className="chips__list">
        {options.map((opt, idx) => {
          const checked = type === 'radio' ? values === idx : values.includes(idx);
          return (
            <label key={idx} className={`chip ${checked ? 'is-checked' : ''}`}>
              <input type={type} name={name} value={idx} checked={checked} onChange={() => onToggle(idx)} />
              <span>{opt}</span>
            </label>
          );
        })}
      </div>
      {children}
      {error && (
        <p className="field__error" id={errId}>
          {error}
        </p>
      )}
    </fieldset>
  );
}

export default function Contact() {
  const { contact, ui } = useContent();
  const f = ui.form;
  const pick = (list, idxs) => idxs.map((i) => list[i]);
  const [values, setValues] = useState(empty);
  const [errors, setErrors] = useState({});
  const [submitted, setSubmitted] = useState(null);
  const formId = useId();
  const confirmRef = useRef(null);
  const formRef = useRef(null);

  const set = (key) => (e) => setValues((v) => ({ ...v, [key]: e.target.value }));
  const toggle = (key) => (opt) =>
    setValues((v) => ({
      ...v,
      [key]: v[key].includes(opt) ? v[key].filter((x) => x !== opt) : [...v[key], opt],
    }));

  const onSubmit = (e) => {
    e.preventDefault();
    const found = validate(values, f.errors);
    setErrors(found);
    const firstKey = Object.keys(found)[0];
    if (firstKey) {
      const target =
        firstKey === 'objetivos' || firstKey === 'disponibilidade'
          ? document.getElementById(`grupo-${firstKey}`)
          : document.getElementById(`${formId}-${firstKey}`);
      target?.focus();
      return;
    }
    setSubmitted({ ...values });
    requestAnimationFrame(() => confirmRef.current?.focus());
  };

  const reset = (keep) => {
    if (!keep) setValues(empty);
    setSubmitted(null);
    setErrors({});
    requestAnimationFrame(() => formRef.current?.querySelector('input')?.focus());
  };

  const describedBy = (key, hint) =>
    [hint ? `${formId}-${key}-hint` : null, errors[key] ? `${formId}-${key}-error` : null].filter(Boolean).join(' ') ||
    undefined;

  return (
    <section className="section contact on-dark" id="contacto" aria-labelledby="contacto-title">
      <div className="wrap contact__grid">
        <div className="contact__intro">
          <SectionTitle id="contacto-title" kicker={contact.kicker} lines={contact.title} />
          <p className="lead soft">{contact.intro}</p>
          <Photo image="afterSession" ratio="4 / 5" className="contact__photo" compact />
        </div>

        <div className="contact__panel">
          {submitted ? (
            <div className="confirm" ref={confirmRef} tabIndex={-1} role="status" aria-live="polite">
              <p className="kicker">{f.confirm.kicker}</p>
              <h3 className="h2 confirm__title">
                <span className="br">{f.confirm.title[0]}</span>
                <span className="br slant">{f.confirm.title[1]}</span>
              </h3>
              <p className="soft">
                {f.confirm.text}
              </p>
              <dl className="confirm__summary">
                <div>
                  <dt>{f.name}</dt>
                  <dd>{submitted.nome}</dd>
                </div>
                <div>
                  <dt>{f.area}</dt>
                  <dd>{submitted.zona}</dd>
                </div>
                {submitted.formato !== null && (
                  <div>
                    <dt>{f.format}</dt>
                    <dd>{contact.formats[submitted.formato]}</dd>
                  </div>
                )}
                <div>
                  <dt>{f.goals}</dt>
                  <dd>{[...pick(contact.goals, submitted.objetivos), submitted.objetivosTexto].filter(Boolean).join(' · ')}</dd>
                </div>
                <div>
                  <dt>{f.availability}</dt>
                  <dd>
                    {[...pick(contact.availability, submitted.disponibilidade), submitted.disponibilidadeTexto]
                      .filter(Boolean)
                      .join(' · ')}
                  </dd>
                </div>
              </dl>
              <div className="confirm__actions">
                <button type="button" className="btn btn--ghost" onClick={() => reset(true)}>
                  {f.confirm.edit}
                </button>
                <button type="button" className="btn btn--ghost" onClick={() => reset(false)}>
                  {f.confirm.restart}
                </button>
              </div>
            </div>
          ) : (
            <form className="form" ref={formRef} onSubmit={onSubmit} noValidate aria-describedby={`${formId}-demo`}>
              <p className="form__demo" id={`${formId}-demo`}>
                <span className="form__demo-dot" aria-hidden="true" />
                {f.demo}
              </p>

              <div className="form__row">
                <Field id={`${formId}-nome`} label={f.name} required optional={f.optional} error={errors.nome}>
                  <input
                    id={`${formId}-nome`}
                    type="text"
                    autoComplete="name"
                    value={values.nome}
                    onChange={set('nome')}
                    aria-invalid={!!errors.nome}
                    aria-describedby={describedBy('nome')}
                  />
                </Field>
                <Field id={`${formId}-contacto`} label={f.contact} required optional={f.optional} error={errors.contacto}>
                  <input
                    id={`${formId}-contacto`}
                    type="text"
                    autoComplete="email"
                    inputMode="email"
                    value={values.contacto}
                    onChange={set('contacto')}
                    aria-invalid={!!errors.contacto}
                    aria-describedby={describedBy('contacto')}
                  />
                </Field>
              </div>

              <Field
                id={`${formId}-zona`}
                label={f.area}
                hint={f.areaHint}
                optional={f.optional}
                required
                error={errors.zona}
              >
                <input
                  id={`${formId}-zona`}
                  type="text"
                  placeholder={f.areaPlaceholder}
                  value={values.zona}
                  onChange={set('zona')}
                  aria-invalid={!!errors.zona}
                  aria-describedby={describedBy('zona', true)}
                />
              </Field>

              <ChipGroup
                name="objetivos"
                legend={f.goals}
                optional={f.optional}
                options={contact.goals}
                values={values.objetivos}
                onToggle={toggle('objetivos')}
                error={errors.objetivos}
                required
              >
                <label className="visually-hidden" htmlFor={`${formId}-objetivosTexto`}>
                  {f.goalsMore}
                </label>
                <textarea
                  id={`${formId}-objetivosTexto`}
                  rows={3}
                  placeholder={f.goalsPlaceholder}
                  value={values.objetivosTexto}
                  onChange={set('objetivosTexto')}
                />
              </ChipGroup>

              <ChipGroup
                name="disponibilidade"
                legend={f.availability}
                optional={f.optional}
                options={contact.availability}
                values={values.disponibilidade}
                onToggle={toggle('disponibilidade')}
                error={errors.disponibilidade}
                required
              >
                <label className="visually-hidden" htmlFor={`${formId}-disponibilidadeTexto`}>
                  {f.availabilityMore}
                </label>
                <input
                  id={`${formId}-disponibilidadeTexto`}
                  type="text"
                  placeholder={f.availabilityPlaceholder}
                  value={values.disponibilidadeTexto}
                  onChange={set('disponibilidadeTexto')}
                />
              </ChipGroup>

              <ChipGroup
                name="formato"
                legend={f.format}
                optional={f.optional}
                type="radio"
                options={contact.formats}
                values={values.formato}
                onToggle={(opt) => setValues((v) => ({ ...v, formato: opt }))}
              />

              <div className="form__submit">
                <button type="submit" className="btn">
                  {f.submit} <span className="btn__arrow" aria-hidden="true">→</span>
                </button>
                <p className="field__hint">{f.required}</p>
              </div>
            </form>
          )}
        </div>
      </div>
    </section>
  );
}
