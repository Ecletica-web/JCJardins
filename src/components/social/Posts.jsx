import Photo from '../Photo.jsx';
import Wordmark from '../Wordmark.jsx';

/* Three reusable graphic layouts for Instagram posts, Stories and Reel covers.
   All type is sized in container units, so a post renders correctly at any
   width — from a grid thumbnail to a full-size export. */

function Lines({ lines, className = '' }) {
  return (
    <span className={className}>
      {lines.map((line, i) => {
        const slanted = line.startsWith('*') && line.endsWith('*');
        return (
          <span key={i} className={`br ${slanted ? 'slant post__accent' : ''}`}>
            {slanted ? line.slice(1, -1) : line}{' '}
          </span>
        );
      })}
    </span>
  );
}

function Signature({ tone = 'chalk' }) {
  return (
    <span className="post__sig">
      <Wordmark layout="inline" tone={tone} />
    </span>
  );
}

/* Layout 1 — Photograph with one short headline */
export function PostPhoto({ image, headline, kicker, place = 'bottom', format = 'post', label = true, caption }) {
  const ratio = format === 'story' ? '9 / 16' : '4 / 5';
  return (
    <div className={`post post--photo post--${format} post--${place}`} style={{ aspectRatio: ratio }}>
      <Photo image={image} ratio={ratio} className="post__photo" label={label} compact sizes="(min-width: 64rem) 30vw, 50vw" />
      <div className="post__shade" aria-hidden="true" />
      <div className="post__content">
        {kicker && <span className="post__kicker">{kicker}</span>}
        {headline && <Lines lines={headline} className="post__headline" />}
        {caption && <span className="post__caption">{caption}</span>}
      </div>
      <Signature />
    </div>
  );
}

/* Layout 2 — Charcoal or chalk background with one useful idea */
export function PostIdea({ tone = 'charcoal', kicker, idea, detail, format = 'post' }) {
  const ratio = format === 'story' ? '9 / 16' : '4 / 5';
  return (
    <div className={`post post--idea post--${tone} post--${format}`} style={{ aspectRatio: ratio }}>
      <span className="post__kicker">{kicker}</span>
      <Lines lines={idea} className="post__idea" />
      {detail && <span className="post__detail">{detail}</span>}
      <span className="post__rule" aria-hidden="true" />
      <Signature tone={tone === 'chalk' ? 'charcoal' : 'chalk'} />
    </div>
  );
}

/* Layout 3 — Practical information with a clear next step */
export function PostInfo({ tone = 'chalk', kicker, title, items, cta, format = 'post' }) {
  const ratio = format === 'story' ? '9 / 16' : '4 / 5';
  return (
    <div className={`post post--info post--${tone} post--${format}`} style={{ aspectRatio: ratio }}>
      <span className="post__kicker">{kicker}</span>
      <Lines lines={title} className="post__title" />
      <span className="post__items">
        {items.map((it) => (
          <span key={it.k} className="post__item">
            <span className="post__item-k">{it.k}</span>
            <span className="post__item-v">{it.v}</span>
          </span>
        ))}
      </span>
      <span className="post__cta">
        {cta} <span aria-hidden="true">→</span>
      </span>
      <Signature tone={tone === 'chalk' ? 'charcoal' : 'chalk'} />
    </div>
  );
}

export function Post({ post, format = 'post', label = true }) {
  const { layout, ...props } = post;
  if (layout === 'idea') return <PostIdea {...props} format={format} />;
  if (layout === 'info') return <PostInfo {...props} format={format} />;
  return <PostPhoto {...props} format={format} label={label} />;
}
