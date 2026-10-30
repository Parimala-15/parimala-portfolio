import { useState } from 'react';
import { site } from '../data/site';

// Shows /profile.jpg. If the file is missing or fails to load, show initials instead of a broken image.
// The photo is displayed as supplied: scaled and cropped to a frame, never edited.
export default function ProfilePhoto() {
  const [failed, setFailed] = useState(!site.photo);
  const initials = site.name.split(' ').map((w) => w[0]).join('').slice(0, 2);

  return (
    <div className="portrait">
      {failed ? (
        <div className="portrait-fallback" role="img" aria-label={`${site.name} (photo not available)`}>
          <span aria-hidden="true">{initials}</span>
        </div>
      ) : (
        <img
          src={site.photo}
          alt={site.photoAlt}
          width="800"
          height="800"
          decoding="async"
          fetchpriority="high"
          onError={() => setFailed(true)}
        />
      )}
    </div>
  );
}
