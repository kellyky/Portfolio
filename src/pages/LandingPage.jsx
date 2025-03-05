export function LandingPage(){
  return(
    <main className="h-screen grow-1 self-center">
      <picture>
        <source media="(min-width:768px)" srcSet="/assets/images/hero-tablet.jpg" />
        <source media="(min-width:1024px)" srcSet="/assets/images/hero-desktop.jpg" />

        <img src="/assets/images/hero-mobile.jpg" alt="Hero" />
      </picture>
    </main>
  )
}
