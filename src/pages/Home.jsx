import { Link } from 'react-router-dom'
import { motion } from 'framer-motion'
import Hero from '../components/Hero'
import CountdownDrop from '../components/CountdownDrop'
import '../styles/Home.css'

const CATEGORIES = [
  { label: 'Tops', sub: 'Blouses, Tanks & Knits', image: 'https://images.pexels.com/photos/19203835/pexels-photo-19203835.jpeg', tag: 'tops' },
  { label: 'Bottoms', sub: 'Trousers, Jeans & Skirts', image: 'https://images.pexels.com/photos/18786724/pexels-photo-18786724.jpeg', tag: 'bottoms' },
  { label: 'Dresses', sub: 'Midi, Maxi & Mini', image: 'https://images.pexels.com/photos/12466602/pexels-photo-12466602.jpeg', tag: 'dresses' },
  { label: 'Outerwear', sub: 'Coats, Blazers & Jackets', image: 'https://images.pexels.com/photos/19169191/pexels-photo-19169191.jpeg', tag: 'outerwear' },
]

export default function Home() {
  return (
    <main>
      <Hero />

      <CountdownDrop />

      {/* Categories */}
      <section className="categories container">
        <motion.h2
          className="section-title"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
        >
          Shop by Category
        </motion.h2>
        <div className="categories__bento">
          {CATEGORIES.map((cat, i) => (
            <motion.div
              key={cat.tag}
              initial={{ opacity: 0, scale: 0.95 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.7, delay: i * 0.1, ease: [0.16, 1, 0.3, 1] }}
              className={`bento-item bento-item--${cat.tag}`}
            >
              <Link
                to={`/shop?category=${cat.tag}`}
                className="bento-tile"
              >
                <motion.div 
                  className="bento-tile__img" 
                  style={{ backgroundImage: `url(${cat.image})` }}
                  whileHover={{ scale: 1.08 }}
                  transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
                />
                <div className="bento-tile__overlay">
                  <div className="bento-tile__content">
                    <span className="bento-tile__label">{cat.label}</span>
                    <span className="bento-tile__sub">{cat.sub}</span>
                  </div>
                  <div className="bento-tile__cta">
                    <span>Shop Collection</span>
                    <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                      <line x1="5" y1="12" x2="19" y2="12" /><polyline points="12 5 19 12 12 19" />
                    </svg>
                  </div>
                </div>
              </Link>
            </motion.div>
          ))}
        </div>
      </section>

      {/* Banner */}
      <section className="banner">
        <motion.div
          className="banner__inner container"
          initial={{ opacity: 0, scale: 0.97 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          <div className="banner__text">
            <p className="banner__eyebrow">Limited Time</p>
            <h2 className="banner__heading">Summer Sale<br />Up to 40% Off</h2>
            <p className="banner__callout">Dresses from $29 · Outerwear from $59</p>
            <Link to="/sale" className="banner__cta">Shop the Sale →</Link>
          </div>
          <div className="banner__imgs">
            <img src="https://images.unsplash.com/photo-1523350165414-082d792c90a1?w=800&q=80" alt="Summer collection" />
            <img src="https://images.unsplash.com/photo-1515886657613-9f3515b0c78f?w=800&q=80" alt="Editorial look" />
          </div>
        </motion.div>
      </section>

      {/* Footer */}
      <footer className="footer container">
        <div className="footer__inner">
          <div className="footer__top">
            <div className="footer__signup">
              <h3>Join the Drip List</h3>
              <p>Early access to drops and exclusive news.</p>
              <form className="footer__form">
                <input type="email" placeholder="Email address" required />
                <button type="submit">→</button>
              </form>
            </div>

            <div className="footer__nav">
              <div className="footer__brand">
                <div className="footer__logo">DRIP<span>.</span></div>
                <p className="footer__tagline">Bold pieces for bold people.</p>
              </div>
              <div className="footer__links">
                <div className="footer__nav-col">
                  <h4>Shop</h4>
                  <a href="#">New Arrivals</a>
                  <a href="#">Best Sellers</a>
                  <a href="#">Sale</a>
                  <a href="#">Gift Cards</a>
                </div>
                <div className="footer__nav-col">
                  <h4>Support</h4>
                  <a href="#">Size Guide</a>
                  <a href="#">Shipping Info</a>
                  <a href="#">Returns & Exchanges</a>
                  <a href="#">Contact Us</a>
                </div>
                <div className="footer__nav-col">
                  <h4>Company</h4>
                  <a href="#">About Us</a>
                  <a href="#">Sustainability</a>
                  <a href="#">Careers</a>
                  <a href="#">Press</a>
                </div>
                <div className="footer__nav-col">
                  <h4>Legal</h4>
                  <a href="#">Privacy Policy</a>
                  <a href="#">Terms of Service</a>
                  <a href="#">Accessibility</a>
                  <a href="#">Cookie Policy</a>
                </div>
              </div>
            </div>
          </div>

          <div className="footer__bottom">
            <div className="footer__socials">
              <a href="#" aria-label="Instagram" target="_blank" rel="noopener noreferrer">
                <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                  <rect x="2" y="2" width="20" height="20" rx="5" ry="5"/>
                  <path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z"/>
                  <line x1="17.5" y1="6.5" x2="17.51" y2="6.5"/>
                </svg>
              </a>
              <a href="#" aria-label="Twitter" target="_blank" rel="noopener noreferrer">
                <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                  <path d="M23 3a10.9 10.9 0 01-3.14 1.53 4.48 4.48 0 00-7.86 3v1A10.66 10.66 0 013 4s-4 9 5 13a11.64 11.64 0 01-7 2c9 5 20 0 20-11.5a4.5 4.5 0 00-.08-.83A7.72 7.72 0 0023 3z"/>
                </svg>
              </a>
              <a href="#" aria-label="Facebook" target="_blank" rel="noopener noreferrer">
                <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                  <path d="M18 2h-3a5 5 0 00-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 011-1h3z"/>
                </svg>
              </a>
              <a href="#" aria-label="Pinterest" target="_blank" rel="noopener noreferrer">
                <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                  <circle cx="12" cy="12" r="10"/>
                  <path d="M8 12c.5 2.5 1.5 3.5 3 3.5s2.5-1 2.5-3-1.5-3.5-3-3.5-2.5 1-2.5 3z"/>
                </svg>
              </a>
            </div>
            <div className="footer__trust">
              <div className="footer__badge">Sustainability Certified</div>
              <div className="footer__payments">
                <span className="payment-icon">VISA</span>
                <span className="payment-icon">MC</span>
                <span className="payment-icon">AMEX</span>
                <span className="payment-icon">PayPal</span>
              </div>
            </div>
            <p className="footer__copy">© 2025 DRIP. Crafted with care for conscious fashion.</p>
          </div>
        </div>
      </footer>
    </main>
  )
}
