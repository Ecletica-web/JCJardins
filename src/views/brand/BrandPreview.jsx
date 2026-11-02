import Wordmark, { Monogram } from '../../components/Wordmark.jsx';
import Photo from '../../components/Photo.jsx';
import { Post, PostIdea, PostInfo, PostPhoto } from '../../components/social/Posts.jsx';
import { usePrototype, VIEWS } from '../../prototype.jsx';
import { images, shootPriorities, extraShots } from '../../content/images.js';
import { categories, posts, profile, stories } from '../../content/social.js';

/* Brand & Instagram preview — an internal view for the team.
   Annotations are in English; anything a client would read is in Portuguese. */

const palette = [
  { name: 'Charcoal', hex: '#191D1E', role: 'Primary surface, type on chalk', share: 44, ink: 'chalk' },
  { name: 'Warm chalk', hex: '#F1EBDD', role: 'Primary surface, type on charcoal', share: 40, ink: 'charcoal' },
  { name: 'Tobacco brown', hex: '#79583E', role: 'Warmth in placeholders, fine rules, leather tones', share: 10, ink: 'chalk' },
  { name: 'Burnt rust', hex: '#A34F32', role: 'One accent per view: the accent stroke, primary action', share: 6, ink: 'chalk' },
];

const contrast = [
  ['Chalk on charcoal', '14.3 : 1', 'Body text, all sizes'],
  ['Charcoal on chalk', '14.3 : 1', 'Body text, all sizes'],
  ['Rust on chalk', '4.8 : 1', 'Text and links (AA)'],
  ['Chalk on rust', '4.8 : 1', 'Buttons (AA)'],
  ['Brown on chalk', '5.4 : 1', 'Small labels'],
  ['Rust on charcoal', '3.0 : 1', 'Graphic marks and large display only. Use the rust tint #D58B6C (6.3 : 1) for small text'],
];

const photoPrinciples = [
  ['Light', 'Side light, window light and late-afternoon sun. Warm highlights, deep shadows that keep detail.'],
  ['Skin & colour', 'Believable skin, restrained saturation. Oxblood leather, muted greens, faded blues, concrete and wood are welcome. Do not grade everything into the brand palette.'],
  ['Texture', 'Fine grain (added in the build at 16 % overlay). Sweat, breath, chalk dust and worn tape are good detail.'],
  ['Sharp / moving', 'Mostly sharp coaching moments. Add intentional motion blur on hands, pads or feet for one frame in five.'],
  ['Scale', 'Mix wide scenes (place), medium interactions (coaching) and close details (hands, kit).'],
  ['Balance', 'At least half the set explains the coaching or shows client practice. Patience and conversation, not only effort.'],
];

function Section({ id, n, title, intro, children, tone = 'chalk' }) {
  return (
    <section id={id} className={`bp-section on-${tone}`} aria-labelledby={`${id}-t`}>
      <div className="wrap">
        <header className="bp-section__head">
          <span className="bp-section__n">{n}</span>
          <h2 id={`${id}-t`} className="h2">
            {title}
          </h2>
          {intro && <p className="soft bp-section__intro">{intro}</p>}
        </header>
        {children}
      </div>
    </section>
  );
}

export default function BrandPreview() {
  const { setView } = usePrototype();
  const counts = posts.reduce((acc, p) => ({ ...acc, [p.category]: (acc[p.category] || 0) + 1 }), {});
  const refList = Object.entries(images).filter(([, v]) => v.kind === 'reference');

  return (
    <div className="bp">
      <a className="skip-link" href="#conteudo">
        Skip to content
      </a>
      <header className="bp-top on-charcoal">
        <div className="wrap bp-top__bar">
          <Wordmark layout="inline" />
          <span className="bp-top__label">Brand &amp; Instagram preview · prototype</span>
          <button type="button" className="btn btn--ghost btn--small" onClick={() => setView(VIEWS.landing)}>
            ← Landing page
          </button>
        </div>
      </header>

      <main id="conteudo" tabIndex={-1} lang="en">
        {/* ---- Intro ---- */}
        <section className="bp-intro on-charcoal" aria-labelledby="bp-title">
          <div className="wrap bp-intro__grid">
            <div>
              <p className="kicker">Visual identity · v0.1</p>
              <h1 id="bp-title" className="h1 bp-intro__title">
                <span className="br">Physical, focused,</span>
                <span className="br slant">warm and assured.</span>
              </h1>
            </div>
            <div className="bp-intro__text">
              <p className="lead soft">
                A coaching brand built from three materials: cinematic sports photography, the textures of fight
                culture (tape, leather, chalk, concrete) and compressed, confident type. The premium feeling comes
                from restraint and care, not from ornament.
              </p>
              <nav className="bp-toc" aria-label="Brand sections">
                <ol role="list">
                  {[
                    ['wordmark', 'Wordmark'],
                    ['type', 'Typography'],
                    ['colour', 'Colour'],
                    ['photo', 'Photography'],
                    ['shot-list', 'Shot list'],
                    ['layouts', 'Graphic layouts'],
                    ['feed', 'Instagram feed'],
                    ['stories', 'Stories & Reels'],
                  ].map(([id, label], i) => (
                    <li key={id}>
                      <a href={`#${id}`}>
                        <span>{String(i + 1).padStart(2, '0')}</span>
                        {label}
                      </a>
                    </li>
                  ))}
                </ol>
              </nav>
            </div>
          </div>
        </section>

        {/* ---- 01 Wordmark ---- */}
        <Section
          id="wordmark"
          n="01"
          title="Wordmark"
          tone="chalk"
          intro="TOMÁS stands upright and compressed, like a planted guard. QUEIROZ is slanted and steps forward, like the strike. The accent on the Á is one rust stroke cut at the same angle. It is the only colour in the mark. The name always reads first; the monogram is secondary."
        >
          <div className="bp-marks">
            <div className="bp-mark bp-mark--dark">
              <Wordmark layout="stacked" size="clamp(4rem, 11vw, 9.5rem)" />
              <span className="bp-mark__cap">Primary · stacked · chalk on charcoal</span>
            </div>
            <div className="bp-mark bp-mark--light">
              <Wordmark layout="stacked" tone="charcoal" size="clamp(3rem, 6vw, 5rem)" />
              <span className="bp-mark__cap">Stacked · charcoal on chalk</span>
            </div>
            <div className="bp-mark bp-mark--light">
              <Wordmark layout="inline" tone="charcoal" size="clamp(1.8rem, 3.6vw, 2.8rem)" />
              <span className="bp-mark__cap">Inline · headers, signatures, posts</span>
            </div>
            <div className="bp-mark bp-mark--dark bp-mark--mono">
              <div className="bp-monos">
                <Monogram size="5.5rem" />
                <Monogram tone="chalk-bg" size="3.5rem" />
                <Monogram size="2rem" />
              </div>
              <span className="bp-mark__cap">Monogram (secondary) · avatar, favicon</span>
            </div>
          </div>
          <ul role="list" className="bp-rules">
            <li>
              <b>Typeface</b> Archivo, weight 860, width 62 %. Surname italic.
            </li>
            <li>
              <b>Step</b> The surname is indented 0.36 em, so the name moves forward.
            </li>
            <li>
              <b>Accent</b> Rust stroke at −27°. Never replaced by a glove, crown or crest.
            </li>
            <li>
              <b>Clear space</b> The height of the Q on every side.
            </li>
          </ul>
        </Section>

        {/* ---- 02 Typography ---- */}
        <Section
          id="type"
          n="02"
          title="Typography"
          tone="charcoal"
          intro="Two families. Archivo (variable width) carries the name, the headlines and short capitals. Inter carries explanations, captions and practical information. Capitals for short display text; sentence case for anything you read."
        >
          <div className="bp-type">
            <div className="bp-type__row">
              <span className="bp-type__spec">Display caps · Archivo 820 · width 62 %</span>
              <p className="display bp-type__display">
                Técnica <span className="slant">em movimento</span>
              </p>
            </div>
            <div className="bp-type__row">
              <span className="bp-type__spec">Headline · Archivo 760 · width 74 % · deliberate breaks</span>
              <p className="h1">
                <span className="br">Treino privado</span>
                <span className="br">de kickboxing</span>
                <span className="br slant" style={{ color: 'var(--accent-on-charcoal)' }}>
                  e força.
                </span>
              </p>
            </div>
            <div className="bp-type__row">
              <span className="bp-type__spec">Subhead · Archivo 750 · width 88 %</span>
              <p className="h3">O que acontece na primeira sessão</p>
            </div>
            <div className="bp-type__row">
              <span className="bp-type__spec">Body · Inter 400 · 17 px / 1.6</span>
              <p className="bp-type__body" lang="pt-PT">
                Guarda, postura, deslocação e golpes básicos. O Tomás demonstra, observa e corrige um detalhe de cada
                vez, até o movimento fazer sentido no teu corpo.
              </p>
            </div>
            <div className="bp-type__row">
              <span className="bp-type__spec">Label · Archivo 650 · width 118 % · tracked caps</span>
              <p className="kicker">Primeira sessão</p>
            </div>
          </div>
        </Section>

        {/* ---- 03 Colour ---- */}
        <Section
          id="colour"
          n="03"
          title="Colour"
          tone="chalk"
          intro="Charcoal and chalk do almost all the work. Brown adds warmth; rust is used once per view, never as a background for long text."
        >
          <div className="bp-palette">
            {palette.map((c) => (
              <div key={c.hex} className={`bp-swatch bp-swatch--${c.ink}`} style={{ background: c.hex }}>
                <span className="bp-swatch__name">{c.name}</span>
                <span className="bp-swatch__hex">{c.hex}</span>
                <span className="bp-swatch__role">{c.role}</span>
              </div>
            ))}
          </div>
          <div className="bp-share" aria-label="Approximate share of colour across a page">
            {palette.map((c) => (
              <span key={c.hex} style={{ flexGrow: c.share, background: c.hex }} title={`${c.name} ${c.share}%`}>
                <span className={c.ink === 'chalk' ? 'ink-chalk' : ''}>{c.share}%</span>
              </span>
            ))}
          </div>
          <table className="bp-table">
            <caption className="visually-hidden">Contrast pairs</caption>
            <thead>
              <tr>
                <th scope="col">Pair</th>
                <th scope="col">Contrast</th>
                <th scope="col">Use</th>
              </tr>
            </thead>
            <tbody>
              {contrast.map(([pair, ratio, use]) => (
                <tr key={pair}>
                  <th scope="row">{pair}</th>
                  <td>{ratio}</td>
                  <td>{use}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </Section>

        {/* ---- 04 Photography ---- */}
        <Section
          id="photo"
          n="04"
          title="Photography"
          tone="charcoal"
          intro="Sweat, breath, concentration and repetition, alongside patience, conversation and the satisfaction of finishing. Colour may live outside the palette; the grade only holds it together."
        >
          <div className="bp-photo">
            <div className="bp-photo__compare">
              <figure className="bp-compare">
                <div className="bp-compare__raw">
                  <img src={images.adultPractice.src} alt="" loading="lazy" />
                </div>
                <figcaption>Source</figcaption>
              </figure>
              <figure className="bp-compare">
                <Photo image="adultPractice" ratio="2 / 3" label={false} decorative />
                <figcaption>Brand treatment: −16 % saturation, +5 % contrast, warm 6 % tone, fine grain</figcaption>
              </figure>
            </div>
            <dl className="bp-principles">
              {photoPrinciples.map(([k, v]) => (
                <div key={k}>
                  <dt>{k}</dt>
                  <dd className="soft">{v}</dd>
                </div>
              ))}
            </dl>
          </div>

          <div className="bp-mosaic" aria-label="Reference mood">
            <Photo image="kettlebellLight" ratio="3 / 4" />
            <Photo image="wrapsWindow" ratio="3 / 2" />
            <Photo image="towelRest" ratio="3 / 4" />
            <Photo image="wrappedFist" ratio="3 / 2" />
          </div>
        </Section>

        {/* ---- Shot list ---- */}
        <Section
          id="shot-list"
          n="05"
          title="First shoot: priority shots"
          tone="chalk"
          intro="Anything showing Tomás must be photographed. Each frame below appears as a labelled placeholder in the prototype, with the right composition and ratio. Replace it in src/content/images.js."
        >
          <ol role="list" className="bp-shots">
            {shootPriorities.map((s, i) => {
              const img = images[s.key];
              return (
                <li key={s.key} className="bp-shot">
                  <Photo image={s.key} ratio="4 / 5" label={false} decorative />
                  <div className="bp-shot__text">
                    <span className="bp-shot__n">{String(i + 1).padStart(2, '0')}</span>
                    <h3 className="bp-shot__title">{img.title}</h3>
                    <p className="bp-shot__meta">
                      {img.shot} · {img.light}
                    </p>
                    <p className="soft">{img.brief}</p>
                    <p className="bp-shot__why">
                      <b>Used for:</b> {s.why}
                    </p>
                    <code className="bp-code">{s.key}</code>
                  </div>
                </li>
              );
            })}
          </ol>

          <div className="bp-refs">
            <h3 className="h3">Reference images to replace</h3>
            <p className="soft">
              Licensed under the Pexels License for this prototype only. The people shown are not Tomás or his clients.
              Each one should be replaced by a real photograph.
            </p>
            <table className="bp-table">
              <thead>
                <tr>
                  <th scope="col">Key</th>
                  <th scope="col">Why it is here</th>
                  <th scope="col">Replace with</th>
                  <th scope="col">Source</th>
                </tr>
              </thead>
              <tbody>
                {refList.map(([key, v]) => (
                  <tr key={key}>
                    <th scope="row">
                      <code className="bp-code">{key}</code>
                    </th>
                    <td>{v.note}</td>
                    <td>{images[v.replaceWith]?.title ?? extraShots[v.replaceWith]}</td>
                    <td>
                      <a className="text-link" href={v.source} target="_blank" rel="noreferrer">
                        Pexels<span className="visually-hidden"> (opens in a new tab)</span>
                      </a>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </Section>

        {/* ---- Layouts ---- */}
        <Section
          id="layouts"
          n="06"
          title="Three repeatable layouts"
          tone="charcoal"
          intro="Every post, Story and Reel cover is built from one of these. Each must work on its own, without the grid around it."
        >
          <div className="bp-layouts">
            <figure className="bp-layout">
              <PostPhoto image="coachGloves" headline={['Primeiro,', '*a guarda.*']} />
              <figcaption>
                <b>1 · Photograph + one short headline</b>
                Maximum five words, compressed caps, bottom or top third. The image does the explaining. The signature
                always sits bottom-right.
              </figcaption>
            </figure>
            <figure className="bp-layout">
              <PostIdea
                tone="chalk"
                kicker="Técnica · Guarda"
                idea={['Queixo', 'para *baixo.*']}
                detail="Os ombros sobem, o queixo desce. A guarda fica mais compacta e menos exposta."
              />
              <figcaption>
                <b>2 · Charcoal or chalk + one useful idea</b>
                One idea a beginner can try today. Headline in caps, then a single sentence explaining why.
              </figcaption>
            </figure>
            <figure className="bp-layout">
              <PostInfo
                tone="charcoal"
                kicker="Primeira sessão"
                title={['Como', '*começar.*']}
                items={[
                  { k: '1', v: 'Conversa sobre objetivos' },
                  { k: '2', v: 'Ponto de partida' },
                  { k: '3', v: 'Prática guiada' },
                ]}
                cta="Pedir uma sessão"
              />
              <figcaption>
                <b>3 · Practical information + next step</b>
                Facts in a ruled list, then one rust action. No prices, dates or scarcity.
              </figcaption>
            </figure>
          </div>
        </Section>

        {/* ---- Feed ---- */}
        <Section
          id="feed"
          n="07"
          title="Instagram feed: first nine posts"
          tone="chalk"
          intro="An editorial mix, not a checkerboard. Six photographs, three typographic posts, and every frame stands on its own."
        >
          <div className="bp-feed">
            <div className="ig" aria-label="Instagram profile preview">
              <div className="ig__head">
                <Monogram size="4.25rem" />
                <div className="ig__who">
                  <p className="ig__handle">
                    {profile.handle} <span className="ig__note">(placeholder handle)</span>
                  </p>
                  <p className="ig__name">{profile.name}</p>
                  <p className="ig__bio" lang="pt-PT">
                    {profile.bio.map((b) => (
                      <span key={b} className="br">
                        {b}
                      </span>
                    ))}
                  </p>
                  <span className="ig__link" lang="pt-PT">
                    ↗ {profile.link}
                  </span>
                </div>
              </div>
              <ol role="list" className="ig__grid" lang="pt-PT">
                {posts.map((p) => (
                  <li key={p.id}>
                    <Post post={p} />
                  </li>
                ))}
              </ol>
            </div>

            <div className="bp-balance">
              <h3 className="h3">Subject balance</h3>
              <ul role="list" className="bp-balance__list">
                {Object.entries(categories).map(([key, label]) => (
                  <li key={key}>
                    <span className="bp-balance__count">{counts[key] || 0}</span>
                    <span>{label}</span>
                    <span className="bp-balance__ids">
                      {posts
                        .map((p, i) => (p.category === key ? i + 1 : null))
                        .filter(Boolean)
                        .map((n) => `#${n}`)
                        .join(' ')}
                    </span>
                  </li>
                ))}
              </ul>
              <p className="soft bp-balance__note">
                Five of nine posts show client practice or explain how the coaching works (#1, #2, #5, #6, #9).
                The experience leads; Tomás’s own training supports it.
              </p>
            </div>
          </div>

          <h3 className="h3 bp-captions__title">Posts at full size, with captions</h3>
          <ol role="list" className="bp-captions">
            {posts.map((p, i) => (
              <li key={p.id} className="bp-caption">
                <Post post={p} />
                <div className="bp-caption__text">
                  <span className="bp-caption__n">
                    #{i + 1} · {categories[p.category]} · layout {p.layout === 'photo' ? 1 : p.layout === 'idea' ? 2 : 3}
                  </span>
                  <p lang="pt-PT">{p.caption_pt}</p>
                </div>
              </li>
            ))}
          </ol>
        </Section>

        {/* ---- Stories ---- */}
        <Section
          id="stories"
          n="08"
          title="Stories & Reel covers"
          tone="charcoal"
          intro="The same three layouts at 9:16. Keep the top 14 % and bottom 20 % clear of key text for the app interface."
        >
          <ul role="list" className="bp-stories" lang="pt-PT">
            {stories.map((s) => (
              <li key={s.id} className="bp-story">
                <div className="bp-story__frame">
                  <Post post={s} format="story" />
                  <span className="bp-story__safe bp-story__safe--top" aria-hidden="true" />
                  <span className="bp-story__safe bp-story__safe--bottom" aria-hidden="true" />
                </div>
                <span className="bp-story__label" lang="en">
                  {s.label}
                </span>
              </li>
            ))}
          </ul>
        </Section>

        <footer className="bp-foot on-charcoal">
          <div className="wrap bp-foot__bar">
            <Wordmark layout="inline" />
            <button type="button" className="btn btn--small" onClick={() => setView(VIEWS.landing)}>
              View the landing page <span className="btn__arrow" aria-hidden="true">→</span>
            </button>
          </div>
        </footer>
      </main>
    </div>
  );
}
