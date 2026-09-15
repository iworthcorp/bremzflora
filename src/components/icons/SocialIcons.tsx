type IconProps = { size?: number; className?: string };

export function LinkedinIcon({ size = 18, className }: IconProps) {
  return (
    <svg
      width={size}
      height={size}
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth={1.6}
      strokeLinecap="round"
      strokeLinejoin="round"
      className={className}
      aria-hidden="true"
    >
      <rect x="3" y="3" width="18" height="18" rx="3" />
      <path d="M7.5 10.5v6" />
      <circle cx="7.5" cy="7.3" r="0.3" fill="currentColor" />
      <path d="M12 16.5v-3.6a2.4 2.4 0 0 1 4.8 0v3.6" />
      <path d="M12 16.5v-6" />
    </svg>
  );
}

export function InstagramIcon({ size = 18, className }: IconProps) {
  return (
    <svg
      width={size}
      height={size}
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth={1.6}
      strokeLinecap="round"
      strokeLinejoin="round"
      className={className}
      aria-hidden="true"
    >
      <rect x="3" y="3" width="18" height="18" rx="5" />
      <circle cx="12" cy="12" r="4" />
      <circle cx="17.2" cy="6.8" r="0.4" fill="currentColor" stroke="none" />
    </svg>
  );
}

export function FacebookIcon({ size = 18, className }: IconProps) {
  return (
    <svg
      width={size}
      height={size}
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth={1.6}
      strokeLinecap="round"
      strokeLinejoin="round"
      className={className}
      aria-hidden="true"
    >
      <path d="M15 4h-2.2A3.8 3.8 0 0 0 9 7.8V10H7v3h2v7h3v-7h2.4l.6-3H12V8a1 1 0 0 1 1-1h2Z" />
    </svg>
  );
}

export function TikTokIcon({ size = 18, className }: IconProps) {
  return (
    <svg
      width={size}
      height={size}
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth={1.6}
      strokeLinecap="round"
      strokeLinejoin="round"
      className={className}
      aria-hidden="true"
    >
      <path d="M14 4v9.5a3.5 3.5 0 1 1-3-3.46" />
      <path d="M14 4a4.5 4.5 0 0 0 4.5 4.5V11A6.9 6.9 0 0 1 14 9.3" />
    </svg>
  );
}
