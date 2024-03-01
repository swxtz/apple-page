
interface IconProps {
  className?: string;
}

export function SearchIcon({ className }: IconProps) {
  return (
    // biome-ignore lint/a11y/noSvgWithoutTitle: <explanation>
    <svg
      className={className}
      width={14}
      height={15}
      viewBox="0 0 14 15"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path
        d="M13.199 13.343l-3.5-3.5a5.436 5.436 0 10-.778.777l3.5 3.5a.552.552 0 00.939-.39.551.551 0 00-.161-.388zM1.178 6.418a4.319 4.319 0 118.638.002 4.319 4.319 0 01-8.638-.002z"
        fill="#ffffffcc"
      />
    </svg>
  );
}

export function BagIcon({ className }: IconProps) {
  return (
    // biome-ignore lint/a11y/noSvgWithoutTitle: <explanation>
    <svg
      className={className}
      width={14}
      height={15}
      viewBox="0 0 14 15"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path
        fillRule="evenodd"
        clipRule="evenodd"
        d="M12.969 12.9c0 .6-.5 1.1-1.1 1.1h-8.8c-.6 0-1.1-.5-1.1-1.1V5c0-.5.5-1 1.1-1h8.9c.6 0 1.1.5 1.1 1.1v7.8h-.1zM7.469 1c1.2 0 2.1.9 2.3 2h-4.6c.2-1.1 1.1-2 2.3-2zm4.4 2h-1.1c-.2-1.7-1.6-3-3.3-3-1.7 0-3.1 1.3-3.3 3h-1.1c-1.2 0-2.1.9-2.1 2.1V13c0 1.1.9 2 2.1 2h8.9c1.1 0 2.1-.9 2.1-2.1V5c-.1-1.1-1-2-2.2-2z"
        fill="#ffffffcc"
      />
    </svg>
  );
}
