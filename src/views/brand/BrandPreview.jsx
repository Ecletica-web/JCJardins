import Wordmark, { Monogram } from '../../components/Wordmark.jsx';
import Photo from '../../components/Photo.jsx';
import { Post, PostIdea, PostInfo, PostPhoto } from '../../components/social/Posts.jsx';
import RealReel from '../../components/social/RealReel.jsx';
import { usePrototype, VIEWS } from '../../prototype.jsx';
import { images, shootPriorities, extraShots } from '../../content/images.js';
import { categories, posts, profile, stories } from '../../content/social.js';

/* Brand & Instagram preview — an internal view for the team.
   Annotations are in English; anything a client would read is in Portuguese. */

const palette = [
  { name: 'Pine', hex: '#121714', role: 'Primary surface. Near-black with a green bias: dusk under the pines', share: 50, ink: 'light' },
  { name: 'Linen', hex: '#E8E4DA', role: 'Primary light surface and type on pine', share: 36, ink: 'dark' },
  { name: 'Sage', hex: '#8F9E86', role: 'Signature accent: the accent stroke, rules, markers', share: 7, ink: 'dark' },
  { name: 'Pale sage', hex: '#B3BFA8', role: 'Primary action and accent type on pine', share: 4, ink: 'dark' },
  { name: 'Deep sage', hex: '#4A5845', role: 'Primary action and accent type on linen', share: 3, ink: 'light' },
];

const contrast = [
  ['Linen on pine', '14.3 : 1', 'Body text, all sizes'],
  ['Pine on linen', '14.3 : 1', 'Body text, all sizes'],
  ['Pale sage on pine', '9.4 : 1', 'Accent text, buttons'],
  ['Sage on pine', '6.4 : 1', 'Small accent text, rules'],
  ['Deep sage on linen', '6.0 : 1', 'Accent text, links, buttons'],
  ['Sage on linen', '2.2 : 1', 'Hairlines and marks only, never text'],
];

const photoPrinciples = [
  ['Light', 'Low sun filtered through pines, soft window light, blue hour. Highlights stay gentle; shadows are deep and keep their detail.'],
  ['Place', 'Stone pines, dunes, timber decks, limewashed walls, linen, pale stone. Private and unhurried. No signage, logos or recognisable venues.'],
  ['Skin & colour', 'Believable skin and muted, cool-leaning colour. Dark leather, sea greens and sand are welcome. Never orange, never glossy.'],
  ['Texture', 'Fine grain (18 % overlay), a soft sage tint and a low vignette are added in the build. Sweat, breath, mist and worn tape are good detail.'],
  ['Sharp / moving', 'Mostly sharp coaching moments. Add intentional motion blur on hands, pads or feet for one frame in five.'],
  ['Balance', 'At least half the set explains the coaching or shows client practice. Patience and conversation, not only effort.'],
];

function Section({ id, n, title, intro, children, tone = 'light' }) {
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
  const conceptFiles = [
    ...new Set(
      Object.values(images)
        .filter((v) => v.kind === 'concept')
        .map((v) => v.src.split('/').pop()),
    ),
  ];
  const conceptUses = (file) =>
    Object.entries(images)
      .filter(([, v]) => v.kind === 'concept' && v.src.endsWith(file))
      .map(([k]) => k);

  return (
    <div className="bp">
      <a className="skip-link" href="#conteudo">
        Skip to content
      </a>
      <header className="bp-top on-dark">
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
        <section className="bp-intro on-dark" aria-labelledby="bp-title">
          <div className="wrap bp-intro__grid">
            <div>
              <p className="kicker">Visual identity · v0.1</p>
              <h1 id="bp-title" className="h1 bp-intro__title">
                <span className="br">Quiet, private,</span>
                <span className="br slant">a little mysterious.</span>
              </h1>
            </div>
            <div className="bp-intro__text">
              <p className="lead soft">
                A private coaching brand with the calm of the coast west of Lisbon: stone pines, dunes, linen and
                low light. Fight-culture detail (tape, leather, sweat) sits inside a quiet frame of pine and sage,
                with wide, spacious type. The premium feeling comes from space, discretion and care, not from ornament.
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
          tone="light"
          intro="Wide, quiet capitals. TOMÁS is set in medium weight; QUEIROZ is lighter and steps half an em forward, the movement of a single step in. The accent on the Á is one fine sage stroke, the only colour in the mark. The name always reads first; the monogram is secondary."
        >
          <div className="bp-marks">
            <div className="bp-mark bp-mark--dark">
              <Wordmark layout="stacked" descriptor="Kickboxing" size="clamp(1.9rem, 6.4vw, 5.6rem)" />
              <span className="bp-mark__cap">Primary · stacked with descriptor · linen on pine</span>
            </div>
            <div className="bp-mark bp-mark--light">
              <Wordmark layout="stacked" tone="dark" size="clamp(1.5rem, 2.6vw, 2.4rem)" />
              <span className="bp-mark__cap">Stacked · pine on linen</span>
            </div>
            <div className="bp-mark bp-mark--light">
              <Wordmark layout="inline" tone="dark" descriptor="Kickboxing" size="clamp(0.85rem, 1.25vw, 1.15rem)" />
              <span className="bp-mark__cap">Inline lockup · header, towels, kit</span>
            </div>
            <div className="bp-mark bp-mark--dark bp-mark--mono">
              <div className="bp-monos">
                <Monogram size="5.5rem" />
                <Monogram tone="light-bg" size="3.5rem" />
                <Monogram size="2rem" />
              </div>
              <span className="bp-mark__cap">Monogram (secondary) · avatar, favicon</span>
            </div>
          </div>
          <ul role="list" className="bp-rules">
            <li>
              <b>Typeface</b> Archivo at width 125 %. TOMÁS 500, QUEIROZ 300, tracked 0.14 em.
            </li>
            <li>
              <b>Step</b> The surname is indented 0.5 em, so the name moves forward.
            </li>
            <li>
              <b>Accent</b> One fine sage stroke at −30°. Never replaced by a glove, crown or crest.
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
          tone="dark"
          intro="Two families. Archivo, at the wide end of its width axis, carries the name and short capitals; at normal width and light weight it sets the headlines. Inter carries explanations, captions and practical information. Capitals only for short labels; sentence case for anything you read."
        >
          <div className="bp-type">
            <div className="bp-type__row">
              <span className="bp-type__spec">Display caps · Archivo 300 · width 125 % · tracked</span>
              <p className="display bp-type__display">
                Técnica <span className="slant">em movimento</span>
              </p>
            </div>
            <div className="bp-type__row">
              <span className="bp-type__spec">Headline · Archivo 300 · width 100 % · italic accent line</span>
              <p className="h1">
                <span className="br">Treino privado</span>
                <span className="br">de kickboxing</span>
                <span className="br slant">e força.</span>
              </p>
            </div>
            <div className="bp-type__row">
              <span className="bp-type__spec">Subhead · Archivo 400 · width 108 %</span>
              <p className="h3">O que acontece na primeira sessão</p>
            </div>
            <div className="bp-type__row">
              <span className="bp-type__spec">Body · Inter 400 · 17 px / 1.65</span>
              <p className="bp-type__body" lang="pt-PT">
                Guarda, postura, deslocação e golpes básicos. O Tomás demonstra, observa e corrige um detalhe de cada
                vez, até o movimento fazer sentido no teu corpo.
              </p>
            </div>
            <div className="bp-type__row">
              <span className="bp-type__spec">Label · Archivo 500 · width 125 % · tracked 0.26 em</span>
              <p className="kicker">Primeira sessão</p>
            </div>
          </div>
        </Section>

        {/* ---- 03 Colour ---- */}
        <Section
          id="colour"
          n="03"
          title="Colour"
          tone="light"
          intro="Pine and linen do almost all the work. Sage is the single accent, in three strengths so it stays legible on both surfaces. No orange, no gold."
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
                <span className={c.ink === 'light' ? 'ink-light' : ''}>{c.share}%</span>
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
          tone="dark"
          intro="Sweat, breath, concentration and repetition, alongside patience, conversation and the satisfaction of finishing, set in quiet, private places. The grade holds everything in the same dusk."
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
                <figcaption>Brand treatment: −30 % saturation, −10 % brightness, soft sage tint, low vignette, fine grain</figcaption>
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
            <Photo image="dunes" ratio="3 / 2" />
          </div>
        </Section>

        {/* ---- Shot list ---- */}
        <Section
          id="shot-list"
          n="05"
          title="First shoot: priority shots"
          tone="light"
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
                    {img.kind === 'concept' && (
                      <p className="bp-shot__status">Concept image in place. Still needs the real shoot.</p>
                    )}
                    <code className="bp-code">{s.key}</code>
                  </div>
                </li>
              );
            })}
          </ol>

          <div className="bp-refs">
            <h3 className="h3">From Tomás's own photos and video</h3>
            <p className="soft">
              Supplied photos and three training clips, all authorised for use. On the landing page they appear in black
              and white: the clips in the Técnica and Pads pillars and in About, and cropped portraits plus the group
              photo in About. Crops keep trophies, belts, backdrops and most badges out of frame. The flags photo is
              not used.
            </p>
            <ul role="list" className="bp-notes">
              <li>
                <b>Likeness.</b> Tomás is young and lean, with short dark hair and no beard. The concept images show
                a different-looking coach; future concepts should stay faceless or match him.
              </li>
              <li>
                <b>How he holds pads.</b> Close to his body, short returns, eyes on the athlete. Brief the
                photographer to catch this, not big swings.
              </li>
              <li>
                <b>What he wears.</b> Plain black t-shirt, dark shorts, barefoot on the mat. Keep it for the shoot, with
                no club or sponsor logos.
              </li>
              <li>
                <b>Kit.</b> Dark pads and black wraps for him; clients in white or black wraps.
              </li>
            </ul>
            <div className="bp-proposal">
              <span className="bp-proposal__tag">Confirmed by Tomás · now on the landing page</span>
              <p lang="pt-PT">Boxe e kickboxing. Formação em exercício físico e cursos de treinador de boxe e de kickboxing. Competiu em kickboxing e prepara atletas em competição.</p>
              <p className="soft">
                Check the exact official course titles before launch. Two quiet statement bands (“Um treinador. Um
                aluno. Mais ninguém.” and “Hora marcada. Local combinado. O resto fica entre nós.”) carry the discreet,
                exclusive voice Tomás asked for, inspired by the dark, cinematic close-ups of BOXRAW and Santos 1990.
              </p>
            </div>
          </div>

          <div className="bp-refs">
            <h3 className="h3">Concept images in use</h3>
            <p className="soft">
              AI-generated images supplied for the prototype, labelled on every page. The people are not Tomás or his
              clients. They set the mood and composition for the real shoot and should be replaced by real photographs.
            </p>
            <table className="bp-table">
              <thead>
                <tr>
                  <th scope="col">File</th>
                  <th scope="col">Image keys</th>
                </tr>
              </thead>
              <tbody>
                {conceptFiles.map((file) => (
                  <tr key={file}>
                    <th scope="row">
                      <code className="bp-code">{file}</code>
                    </th>
                    <td>{conceptUses(file).join(', ')}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>

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
          tone="dark"
          intro="Every post, Story and Reel cover is built from one of these. Each must work on its own, without the grid around it."
        >
          <div className="bp-layouts">
            <figure className="bp-layout">
              <PostPhoto image="coachGloves" headline={['Primeiro,', '*a guarda.*']} />
              <figcaption>
                <b>1 · Photograph + one short headline</b>
                Maximum five words in light sentence case, one italic accent. Bottom or top third. The image does the
                explaining; the signature always sits bottom-right.
              </figcaption>
            </figure>
            <figure className="bp-layout">
              <PostIdea
                tone="light"
                kicker="Técnica · Guarda"
                idea={['Queixo', 'para *baixo.*']}
                detail="Os ombros sobem, o queixo desce. A guarda fica mais compacta e menos exposta."
              />
              <figcaption>
                <b>2 · Pine or linen + one useful idea</b>
                One idea a beginner can try today. A light headline, then a single sentence explaining why.
              </figcaption>
            </figure>
            <figure className="bp-layout">
              <PostInfo
                tone="dark"
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
                Facts in a ruled list, then one sage action. No prices, dates or scarcity.
              </figcaption>
            </figure>
          </div>
        </Section>

        {/* ---- Feed ---- */}
        <Section
          id="feed"
          n="07"
          title="Instagram feed: first nine posts"
          tone="light"
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
          tone="dark"
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

          <div className="bp-real">
            <div className="bp-story bp-real__frame" lang="pt-PT">
              <div className="bp-story__frame">
                <RealReel />
                <span className="bp-story__safe bp-story__safe--top" aria-hidden="true" />
                <span className="bp-story__safe bp-story__safe--bottom" aria-hidden="true" />
              </div>
              <span className="bp-story__label">Reel · real footage of Tomás</span>
            </div>
            <div className="bp-real__text">
              <h3 className="h3">Real footage as a Reel</h3>
              <p className="soft">
                Eight seconds of Tomás holding pads, from a phone video he supplied. Close pads, short returns, eyes on
                the athlete: patience and rhythm, not spectacle. Real footage suits Reels better than the website.
              </p>
              <ul role="list" className="bp-real__list">
                <li>Cropped to 9:16 so the gym's signage stays out of frame; sound removed.</li>
                <li>Black and white, slightly darker, vignette and grain: the same treatment as all of Tomás's real footage.</li>
                <li>Consent for everyone shown is confirmed by the client.</li>
                <li>Low resolution (464 px wide): fine for Reels and small frames on the site, not for a hero.</li>
              </ul>
            </div>
          </div>
        </Section>

        <footer className="bp-foot on-dark">
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
