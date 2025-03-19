export function HamburgerMenu({hide}){
  return (
    <svg
      width="24"
      height="13"
      viewBox="0 0 24 13"
      fill="none"
      xmlns="http://www.w3.org/2000/svg">
    <g
      id="Group"
      className="transition-all ease-in-out">
    <rect id="top"
      width="24"
      height="1"
      fill="#33323D"
      className={`origin-center duration-300 ${
            hide ? "translate-y-[6px] rotate-45" : ""
          }`}
      />
    <rect id="middle"
      y="6"
      width="24"
      height="1"
      fill="#33323D"
      className={`duration-300 origin-center ${
            hide ? "opacity-0" : ""
          }`}
      />
    <rect id="bottom" y="12" width="24" height="1" fill="#33323D"
      className={`duration-300 origin-center ${
            hide ? "-translate-y-[6px] -rotate-45" : ""
          }`}
      />
    </g>
    </svg>
  )
}
