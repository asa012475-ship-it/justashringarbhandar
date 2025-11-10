import Link from 'next/link'
export default function Products() {
  return (
    <div className="page">
      <header className="header"><h1 className="brand">JustAShringar</h1></header>
      <main className="container">
        <h2>Products</h2>
        <div className="grid">
          {[1,2,3,4,5,6].map(i => (
            <div className="product" key={i}>
              <div className="image" />
              <h4>Product {i}</h4>
              <p>Soft pastel product description.</p>
              <Link href="/shop"><a className="smallbtn">Buy</a></Link>
            </div>
          ))}
        </div>
      </main>
      <footer className="footer">© {new Date().getFullYear()} JustAShringar</footer>
    </div>
  )
}
