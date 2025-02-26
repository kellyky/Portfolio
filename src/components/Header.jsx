export default function Header() {
  return (
    <header style={{
      color: 'var(--greyish-dark-blue)',
      backgroundColor: 'var(--very-light-grey)',
      textTransform: 'uppercase'
    }}>
      <div>
        logo
      </div>
      <nav>
        <ul className="font-public-sans">
          <li>Hamburger menu</li>
          <li>Home</li>
          <li>Portfolio</li>
          <li>Contact Me</li>
        </ul>
      </nav>
    </header>
  )
}
