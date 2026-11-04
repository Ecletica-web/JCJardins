import { useCallback, useState } from 'react';
import { getImage } from '../content/images.js';
import { usePrototype } from '../prototype.jsx';
import { useAlt } from '../i18n.jsx';
import useReveal from './useReveal.jsx';
import PlaceholderSketch from './PlaceholderSketch.jsx';

/* One component for every photograph in the prototype.
   It reads the central manifest, applies the brand photo treatment (restrained
   saturation + fine grain), and adds prototype labels when they are switched on. */

export default function Photo({
  image,
  ratio = '4 / 5',
  className = '',
  focus,
  priority = false,
  sizes = '(min-width: 64rem) 50vw, 100vw',
  label = true,
  decorative = false,
  compact = false,
  briefAt = 'bottom',
  eager = false,
}) {
  const data = getImage(image);
  const { showLabels } = usePrototype();
  const altFor = useAlt();
  const [loaded, setLoaded] = useState(false);
  const [revealRef, visible] = useReveal({ threshold: 0.05 });

  const imgRef = useCallback((node) => {
    if (node && node.complete && node.naturalWidth > 0) setLoaded(true);
  }, []);

  if (!data) return null;

  const isPlaceholder = data.kind === 'placeholder';
  const style = { aspectRatio: ratio };

  return (
    <figure
      ref={revealRef}
      className={[
        'photo',
        isPlaceholder ? 'photo--placeholder' : 'photo--image',
        loaded || isPlaceholder ? 'is-loaded' : '',
        visible ? 'is-visible' : '',
        compact ? 'photo--compact' : '',
        briefAt === 'top' ? 'photo--brief-top' : '',
        className,
      ].join(' ')}
      style={style}
      data-image-key={data.key}
      data-light={data.lightFrom}
      data-kind={data.kind}
    >
      {isPlaceholder ? (
        <div className="photo__placeholder" role={decorative ? undefined : 'img'} aria-label={decorative ? undefined : altFor(data.key, data.alt)}>
          <PlaceholderSketch variant={data.sketch} />
          {showLabels && label && (
            <div className="photo__brief" aria-hidden="true">
              <span className="proto-chip proto-chip--shoot">Photo to shoot</span>
              <strong className="photo__brief-title">{data.title}</strong>
              {!compact && <span className="photo__brief-text">{data.brief}</span>}
              <span className="photo__brief-meta">
                {data.shot} · {data.light} · {ratio.replace(/\s/g, '')}
              </span>
            </div>
          )}
        </div>
      ) : (
        <>
          <img
            ref={imgRef}
            src={data.src}
            alt={decorative ? '' : altFor(data.key, data.alt)}
            loading={priority || eager ? 'eager' : 'lazy'}
            decoding="async"
            fetchPriority={priority ? 'high' : undefined}
            sizes={sizes}
            onLoad={() => setLoaded(true)}
            style={{ objectPosition: focus || data.focus || '50% 50%' }}
          />
          {showLabels && label && data.kind === 'reference' && (
            <span className="proto-chip proto-chip--ref photo__ref" aria-hidden="true">
              Reference image{data.people ? ' · not Tomás or a client' : ''}
            </span>
          )}
          {showLabels && label && data.kind === 'concept' && (
            <span className="proto-chip proto-chip--concept photo__ref" aria-hidden="true">
              Concept image · AI-generated{data.people ? ' · not Tomás or a client' : ''}
            </span>
          )}
        </>
      )}
      <span className="photo__grain" aria-hidden="true" />
    </figure>
  );
}
