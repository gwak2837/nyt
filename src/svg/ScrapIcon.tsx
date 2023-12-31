type Props = {
  width: string
  className?: string
  selected?: boolean
}

export default function ScrapIcon({ width, className, selected }: Props) {
  return (
    <svg
      width={width}
      height={width}
      viewBox="0 0 24 24"
      className={className}
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <rect x="3" y="2" width="18" height="20" rx="2" stroke={selected ? 'white' : '#6D6D6D'} strokeWidth="2" />
      <path
        d="M8 7H16M8 11.5H16M8 16H13.2"
        stroke={selected ? 'white' : '#6D6D6D'}
        strokeWidth="2"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  )
}
