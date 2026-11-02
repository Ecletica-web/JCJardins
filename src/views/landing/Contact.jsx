import { useId, useRef, useState } from 'react';
import SectionTitle from './SectionTitle.jsx';
import Photo from '../../components/Photo.jsx';
import { contact } from '../../content/landing.js';

/* Enquiry form — LOCAL DEMONSTRATION ONLY.
   Nothing is sent, stored or connected to any messaging or booking service.
   On submit it validates, then shows a confirmation that says so. */

const empty = {
  nome: '',
  contacto: '',
  zona: '',
  formato: '',
  objetivos: [],
  objetivosTexto: '',
  disponibilidade: [],
  disponibilidadeTexto: '',
};

function validate(v) {
  const e = {};
  if (!v.nome.trim()) e.nome = 'Indica o teu nome.';
  if (!v.contacto.trim()) e.contacto = 'Indica um email ou telemóvel para resposta.';
  else if (!/@/.test(v.contacto) && v.contacto.replace(/\D/g, '').length < 9)
    e.contacto = 'Escreve um email válido ou um telemóvel com 9 dígitos.';
  if (!v.zona.trim()) e.zona = 'Indica a zona de Lisboa onde preferes treinar.';
  if (!v.objetivos.length && !v.objetivosTexto.trim()) e.objetivos = 'Escolhe pelo menos um objetivo ou descreve-o.';
  if (!v.disponibilidade.length && !v.disponibilidadeTexto.trim())
    e.disponibilidade = 'Diz-nos quando costumas ter disponibilidade.';
  return e;
}

function Field({ id, label, hint, error, required, children }) {
  return (
    <div className={`field ${error ? 'has-error' : ''}`}>
      <label htmlFor={id} className="field__label">
        {label}
        {required ? <span className="field__req"> *</span> : <span className="field__opt"> (opcional)</span>}
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

function ChipGroup({ name, legend, options, values, onToggle, error, type = 'checkbox', required, children }) {
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
        {required ? <span className="field__req"> *</span> : <span className="field__opt"> (opcional)</span>}
      </legend>
      <div className="chips__list">
        {options.map((opt) => {
          const checked = type === 'radio' ? values === opt : values.includes(opt);
          return (
            <label key={opt} className={`chip ${checked ? 'is-checked' : ''}`}>
              <input type={type} name={name} value={opt} checked={checked} onChange={() => onToggle(opt)} />
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
    const found = validate(values);
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
    <section className="section contact on-charcoal" id="contacto" aria-labelledby="contacto-title">
      <div className="wrap contact__grid">
        <div className="contact__intro">
          <SectionTitle id="contacto-title" kicker={contact.kicker} lines={contact.title} />
          <p className="lead soft">{contact.intro}</p>
          <Photo image="afterSession" ratio="4 / 5" className="contact__photo" compact />
        </div>

        <div className="contact__panel">
          {submitted ? (
            <div className="confirm" ref={confirmRef} tabIndex={-1} role="status" aria-live="polite">
              <p className="kicker">Demonstração</p>
              <h3 className="h2 confirm__title">
                <span className="br">Pedido pronto.</span>
                <span className="br slant">Nada foi enviado.</span>
              </h3>
              <p className="soft">
                Este formulário é uma demonstração local do protótipo. Os dados não saíram deste navegador e não
                foram guardados. No site final, este pedido chegaria ao Tomás.
              </p>
              <dl className="confirm__summary">
                <div>
                  <dt>Nome</dt>
                  <dd>{submitted.nome}</dd>
                </div>
                <div>
                  <dt>Zona</dt>
                  <dd>{submitted.zona}</dd>
                </div>
                {submitted.formato && (
                  <div>
                    <dt>Formato</dt>
                    <dd>{submitted.formato}</dd>
                  </div>
                )}
                <div>
                  <dt>Objetivos</dt>
                  <dd>{[...submitted.objetivos, submitted.objetivosTexto].filter(Boolean).join(' · ')}</dd>
                </div>
                <div>
                  <dt>Disponibilidade</dt>
                  <dd>{[...submitted.disponibilidade, submitted.disponibilidadeTexto].filter(Boolean).join(' · ')}</dd>
                </div>
              </dl>
              <div className="confirm__actions">
                <button type="button" className="btn btn--ghost" onClick={() => reset(true)}>
                  Editar pedido
                </button>
                <button type="button" className="btn btn--ghost" onClick={() => reset(false)}>
                  Começar de novo
                </button>
              </div>
            </div>
          ) : (
            <form className="form" ref={formRef} onSubmit={onSubmit} noValidate aria-describedby={`${formId}-demo`}>
              <p className="form__demo" id={`${formId}-demo`}>
                <span className="form__demo-dot" aria-hidden="true" />
                Protótipo: este formulário não envia dados.
              </p>

              <div className="form__row">
                <Field id={`${formId}-nome`} label="Nome" required error={errors.nome}>
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
                <Field id={`${formId}-contacto`} label="Email ou telemóvel" required error={errors.contacto}>
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
                label="Zona"
                hint="Bairro ou freguesia de Lisboa onde preferes treinar."
                required
                error={errors.zona}
              >
                <input
                  id={`${formId}-zona`}
                  type="text"
                  placeholder="Ex.: Campo de Ourique"
                  value={values.zona}
                  onChange={set('zona')}
                  aria-invalid={!!errors.zona}
                  aria-describedby={describedBy('zona', true)}
                />
              </Field>

              <ChipGroup
                name="objetivos"
                legend="Objetivos"
                options={contact.goals}
                values={values.objetivos}
                onToggle={toggle('objetivos')}
                error={errors.objetivos}
                required
              >
                <label className="visually-hidden" htmlFor={`${formId}-objetivosTexto`}>
                  Conta mais sobre os teus objetivos
                </label>
                <textarea
                  id={`${formId}-objetivosTexto`}
                  rows={3}
                  placeholder="Conta mais, se quiseres: experiência anterior, lesões, o que te motiva."
                  value={values.objetivosTexto}
                  onChange={set('objetivosTexto')}
                />
              </ChipGroup>

              <ChipGroup
                name="disponibilidade"
                legend="Disponibilidade"
                options={contact.availability}
                values={values.disponibilidade}
                onToggle={toggle('disponibilidade')}
                error={errors.disponibilidade}
                required
              >
                <label className="visually-hidden" htmlFor={`${formId}-disponibilidadeTexto`}>
                  Dias ou horas preferidos
                </label>
                <input
                  id={`${formId}-disponibilidadeTexto`}
                  type="text"
                  placeholder="Dias ou horas preferidos (opcional)"
                  value={values.disponibilidadeTexto}
                  onChange={set('disponibilidadeTexto')}
                />
              </ChipGroup>

              <ChipGroup
                name="formato"
                legend="Formato"
                type="radio"
                options={contact.formats}
                values={values.formato}
                onToggle={(opt) => setValues((v) => ({ ...v, formato: opt }))}
              />

              <div className="form__submit">
                <button type="submit" className="btn">
                  Pedir uma sessão <span className="btn__arrow" aria-hidden="true">→</span>
                </button>
                <p className="field__hint">Campos com * são necessários.</p>
              </div>
            </form>
          )}
        </div>
      </div>
    </section>
  );
}
