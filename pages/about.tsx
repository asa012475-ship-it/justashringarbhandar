export default function About() {
  return (
    <div className="page">
      <header className="header"><h1 className="brand">JustAShringar</h1></header>
      <main className="container">
        <h2>About Us</h2>
        <p>At JustAShringar, we celebrate subtle beauty. Our products are crafted with care to enhance your natural glow.</p>
      </main>
      <footer className="footer">© {new Date().getFullYear()} JustAShringar</footer>
    </div>
  )
}
