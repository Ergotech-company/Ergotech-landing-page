export function BrandIcon({ icon, className = 'h-4 w-4' }) {
  if (!icon) return null;
  return (
    <svg
      viewBox="0 0 24 24"
      fill="currentColor"
      className={className}
      aria-hidden="true"
    >
      <path d={icon.path} />
    </svg>
  );
}

