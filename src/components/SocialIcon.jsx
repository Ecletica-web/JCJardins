/* Simple line icons for the footer social buttons (24px grid, currentColor). */
const paths = {
  instagram: (
    <>
      <rect x="3.5" y="3.5" width="17" height="17" rx="5" />
      <circle cx="12" cy="12" r="4" />
      <circle cx="17.2" cy="6.8" r="0.6" fill="currentColor" stroke="none" />
    </>
  ),
  tiktok: <path d="M13.5 3.5v11.25a3.25 3.25 0 1 1-3.25-3.25M13.5 3.5c.4 2.6 2.1 4.3 5 4.6" />,
  whatsapp: (
    <>
      <path d="M4.2 19.8l1.1-3.9A8.2 8.2 0 1 1 8.4 18.9z" />
      <path d="M9.3 8.6c.2-.5.6-.5.9-.5l.6.1 1 2.1-.6.9a6 6 0 0 0 2.6 2.5l.9-.6 2 1v.6c0 .4-.2.9-.8 1.2-1.6.8-6.3-1.8-6.8-5.4-.1-.9 0-1.5.2-1.9z" />
    </>
  ),
  email: (
    <>
      <rect x="3.5" y="5.5" width="17" height="13" rx="1.5" />
      <path d="M4 7l8 6 8-6" />
    </>
  ),
};

export default function SocialIcon({ id }) {
  return (
    <svg viewBox="0 0 24 24" width="20" height="20" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true" focusable="false">
      {paths[id]}
    </svg>
  );
}
