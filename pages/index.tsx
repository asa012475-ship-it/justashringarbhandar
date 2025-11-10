import Link from 'next/link'

export default function Home() {
  return (
    <div className="page">
      <header className="header">
        <h1 className="brand">JustAShringar</h1>
        <nav>
          <Link href="/">Home</Link> · <Link href="/about">About</Link> · <Link href="/products">Products</Link> · <Link href="/shop">Shop</Link> · <Link href="/contact">Contact</Link>
        </nav>
      </header>

      <main className="container">
        <section className="hero">
          <h2>Discover Your Natural Beauty</h2>
          <p>Soft, elegant, handcrafted beauty & wellness products.</p>
          <a className="btn" href="/shop">Shop Now</a>
        </section>

        <section className="cards">
          <div className="card">
            <h3>Curated Products</h3>
            <p>Pastel-inspired skincare and cosmetics.</p>
          </div>
          <div className="card">
            <h3>Sustainable</h3>
            <p>Gentle ingredients and eco-friendly packaging.</p>
          </div>
          <div className="card">
            <h3>Local Delivery</h3>
            <p>Fast delivery across India.</p>
          </div>
        </section>
      </main>

      <footer className="footer">© {new Date().getFullYear()} JustAShringar</footer>
    </div>
  )
}
