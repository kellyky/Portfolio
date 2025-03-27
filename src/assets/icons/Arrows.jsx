export default function Arrows() {
  return (
    <svg
      className="stroke-current transition-all duration-300"
      width="48"
      height="48"
      viewBox="0 0 48 48"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <rect
        opacity="0.1"
        width="48"
        height="48"
        fill="black"
        stroke="none"
      />
      <path d="M16 26L24 30L32 26"
        className="group-hover:stroke-white"
      />
      <path opacity="0.5" d="M16 22L24 26L32 22"
        className="group-hover:stroke-white"
      />
      <path opacity="0.25" d="M16 18L24 22L32 18"
        className="group-hover:stroke-white"
      />
    </svg>
  )
}
