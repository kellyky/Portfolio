export default function Footer() {
  return (
      <footer style={{
        color: 'var(--very-light-grey)',
        backgroundColor: 'var(--greyish-dark-blue)',
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
            <li>GitHub</li>
            <li>LinkedIn</li>
          </ul>
        </nav>
      </footer>
  )
}
