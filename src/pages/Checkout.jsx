import { useState, useEffect } from 'react'
import { Link, useNavigate } from 'react-router-dom'
import { motion } from 'framer-motion'
import { useCart } from '../context/CartContext'
import { useAuth } from '../context/AuthContext'
import '../styles/Checkout.css'

export default function Checkout() {
  const { items, total, clearCart } = useCart()
  const { user } = useAuth()
  const navigate = useNavigate()

  const [formData, setFormData] = useState({
    email: user?.email || '',
    firstName: '',
    lastName: '',
    address: '',
    city: '',
    state: '',
    zipCode: '',
    country: 'United States',
    cardNumber: '',
    expiryDate: '',
    cvv: '',
    nameOnCard: '',
    promo: '',
  })

  const [errors, setErrors] = useState({})
  const [isProcessing, setIsProcessing] = useState(false)

  useEffect(() => {
    if (items.length === 0) {
      navigate('/shop')
    }
  }, [items, navigate])

  const handleInputChange = (e) => {
    const { name, value } = e.target
    setFormData(prev => ({ ...prev, [name]: value }))
    if (errors[name]) setErrors(prev => ({ ...prev, [name]: '' }))
  }

  const validateForm = () => {
    const e = {}
    if (!formData.email) e.email = 'Required'
    else if (!/\S+@\S+\.\S+/.test(formData.email)) e.email = 'Invalid email'
    if (!formData.firstName.trim()) e.firstName = 'Required'
    if (!formData.lastName.trim()) e.lastName = 'Required'
    if (!formData.address.trim()) e.address = 'Required'
    if (!formData.city.trim()) e.city = 'Required'
    if (!formData.state.trim()) e.state = 'Required'
    if (!formData.zipCode.trim()) e.zipCode = 'Required'
    if (!formData.cardNumber.replace(/\s/g, '')) e.cardNumber = 'Required'
    if (!formData.expiryDate) e.expiryDate = 'Required'
    if (!formData.cvv) e.cvv = 'Required'
    if (!formData.nameOnCard.trim()) e.nameOnCard = 'Required'
    setErrors(e)
    return Object.keys(e).length === 0
  }

  const formatCard = (v) => {
    const n = v.replace(/\D/g, '')
    return n.match(/.{1,4}/g)?.join(' ') || n
  }

  const formatExpiry = (v) => {
    const n = v.replace(/\D/g, '')
    return n.length >= 2 ? n.slice(0, 2) + '/' + n.slice(2, 4) : n
  }

  const handleSubmit = async (e) => {
    e.preventDefault()
    if (!validateForm()) return
    setIsProcessing(true)
    try {
      await new Promise(r => setTimeout(r, 2000))
      clearCart()
      navigate('/checkout/success')
    } catch {
      setIsProcessing(false)
    }
  }

  const tax = total * 0.08
  const finalTotal = total + tax

  if (items.length === 0) return null

  return (
    <div className="checkout">
      {/* ── Top bar ── */}
      <div className="checkout__topbar">
        <Link to="/" className="checkout__brand">Drip</Link>
        <div className="checkout__steps">
          <span className="checkout__step checkout__step--active">Cart</span>
          <span className="checkout__step-sep">›</span>
          <span className="checkout__step checkout__step--active">Information</span>
          <span className="checkout__step-sep">›</span>
          <span className="checkout__step">Confirmation</span>
        </div>
        <Link to="/shop" className="checkout__back">
          ← Continue Shopping
        </Link>
      </div>

      {/* ── Split layout ── */}
      <div className="checkout__split">

        {/* LEFT — Form */}
        <div className="checkout__form-panel">
          <motion.form
            className="checkout__form"
            onSubmit={handleSubmit}
            initial={{ opacity: 0, y: 18 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.55, ease: 'easeOut' }}
          >
            {/* ── Contact ── */}
            <div className="checkout__group">
              <p className="checkout__section-label">Step 1</p>
              <h2 className="checkout__section-heading">Contact</h2>
              <div className="checkout__field">
                <input
                  type="email"
                  id="email"
                  name="email"
                  value={formData.email}
                  onChange={handleInputChange}
                  placeholder=" "
                  className={`checkout__input${errors.email ? ' checkout__input--error' : ''}`}
                />
                <label htmlFor="email" className="checkout__label">Email address</label>
                {errors.email && <span className="checkout__error">{errors.email}</span>}
              </div>
            </div>

            {/* ── Shipping ── */}
            <div className="checkout__group">
              <p className="checkout__section-label">Step 2</p>
              <h2 className="checkout__section-heading">Shipping</h2>

              <div className="checkout__row">
                <div className="checkout__field">
                  <input type="text" id="firstName" name="firstName" value={formData.firstName}
                    onChange={handleInputChange} placeholder=" "
                    className={`checkout__input${errors.firstName ? ' checkout__input--error' : ''}`} />
                  <label htmlFor="firstName" className="checkout__label">First name</label>
                  {errors.firstName && <span className="checkout__error">{errors.firstName}</span>}
                </div>
                <div className="checkout__field">
                  <input type="text" id="lastName" name="lastName" value={formData.lastName}
                    onChange={handleInputChange} placeholder=" "
                    className={`checkout__input${errors.lastName ? ' checkout__input--error' : ''}`} />
                  <label htmlFor="lastName" className="checkout__label">Last name</label>
                  {errors.lastName && <span className="checkout__error">{errors.lastName}</span>}
                </div>
              </div>

              <div className="checkout__field">
                <input type="text" id="address" name="address" value={formData.address}
                  onChange={handleInputChange} placeholder=" "
                  className={`checkout__input${errors.address ? ' checkout__input--error' : ''}`} />
                <label htmlFor="address" className="checkout__label">Street address</label>
                {errors.address && <span className="checkout__error">{errors.address}</span>}
              </div>

              <div className="checkout__row checkout__row--thirds">
                <div className="checkout__field">
                  <input type="text" id="city" name="city" value={formData.city}
                    onChange={handleInputChange} placeholder=" "
                    className={`checkout__input${errors.city ? ' checkout__input--error' : ''}`} />
                  <label htmlFor="city" className="checkout__label">City</label>
                  {errors.city && <span className="checkout__error">{errors.city}</span>}
                </div>
                <div className="checkout__field">
                  <input type="text" id="state" name="state" value={formData.state}
                    onChange={handleInputChange} placeholder=" "
                    className={`checkout__input${errors.state ? ' checkout__input--error' : ''}`} />
                  <label htmlFor="state" className="checkout__label">State</label>
                  {errors.state && <span className="checkout__error">{errors.state}</span>}
                </div>
                <div className="checkout__field">
                  <input type="text" id="zipCode" name="zipCode" value={formData.zipCode}
                    onChange={handleInputChange} placeholder=" "
                    className={`checkout__input${errors.zipCode ? ' checkout__input--error' : ''}`} />
                  <label htmlFor="zipCode" className="checkout__label">ZIP</label>
                  {errors.zipCode && <span className="checkout__error">{errors.zipCode}</span>}
                </div>
              </div>
            </div>

            {/* ── Payment ── */}
            <div className="checkout__group">
              <p className="checkout__section-label">Step 3</p>
              <h2 className="checkout__section-heading">Payment</h2>

              <div className="checkout__card-icons">
                <span className="checkout__card-badge">
                  <svg width="10" height="10" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><rect x="1" y="4" width="22" height="16" rx="2"/><line x1="1" y1="10" x2="23" y2="10"/></svg>
                  Visa
                </span>
                <span className="checkout__card-badge">MC</span>
                <span className="checkout__card-badge">Amex</span>
                <span className="checkout__card-badge">
                  <svg width="9" height="9" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><rect x="3" y="11" width="18" height="11" rx="2"/><path d="M7 11V7a5 5 0 0 1 10 0v4"/></svg>
                  SSL
                </span>
              </div>

              <div className="checkout__field">
                <input type="text" id="nameOnCard" name="nameOnCard" value={formData.nameOnCard}
                  onChange={handleInputChange} placeholder=" " maxLength="50"
                  className={`checkout__input${errors.nameOnCard ? ' checkout__input--error' : ''}`} />
                <label htmlFor="nameOnCard" className="checkout__label">Name on card</label>
                {errors.nameOnCard && <span className="checkout__error">{errors.nameOnCard}</span>}
              </div>

              <div className="checkout__field">
                <input type="text" id="cardNumber" name="cardNumber"
                  value={formData.cardNumber}
                  onChange={(e) => {
                    const formatted = formatCard(e.target.value)
                    setFormData(p => ({ ...p, cardNumber: formatted }))
                    if (errors.cardNumber) setErrors(p => ({ ...p, cardNumber: '' }))
                  }}
                  placeholder=" " maxLength="19"
                  className={`checkout__input${errors.cardNumber ? ' checkout__input--error' : ''}`} />
                <label htmlFor="cardNumber" className="checkout__label">Card number</label>
                {errors.cardNumber && <span className="checkout__error">{errors.cardNumber}</span>}
              </div>

              <div className="checkout__row">
                <div className="checkout__field">
                  <input type="text" id="expiryDate" name="expiryDate"
                    value={formData.expiryDate}
                    onChange={(e) => {
                      const formatted = formatExpiry(e.target.value)
                      setFormData(p => ({ ...p, expiryDate: formatted }))
                      if (errors.expiryDate) setErrors(p => ({ ...p, expiryDate: '' }))
                    }}
                    placeholder=" " maxLength="5"
                    className={`checkout__input${errors.expiryDate ? ' checkout__input--error' : ''}`} />
                  <label htmlFor="expiryDate" className="checkout__label">MM / YY</label>
                  {errors.expiryDate && <span className="checkout__error">{errors.expiryDate}</span>}
                </div>
                <div className="checkout__field">
                  <input type="text" id="cvv" name="cvv" value={formData.cvv}
                    onChange={handleInputChange} placeholder=" " maxLength="4"
                    className={`checkout__input${errors.cvv ? ' checkout__input--error' : ''}`} />
                  <label htmlFor="cvv" className="checkout__label">CVV</label>
                  {errors.cvv && <span className="checkout__error">{errors.cvv}</span>}
                </div>
              </div>
            </div>

            {/* ── Submit ── */}
            <motion.button
              type="submit"
              className="checkout__submit"
              disabled={isProcessing}
              whileTap={{ scale: 0.985 }}
            >
              {isProcessing ? (
                <div className="checkout__loading">
                  <div className="checkout__spinner" />
                  Processing…
                </div>
              ) : (
                <>
                  Place Order
                  <span style={{ opacity: 0.5, fontSize: 11 }}>•</span>
                  ${finalTotal.toFixed(2)}
                </>
              )}
            </motion.button>
            <div className="checkout__security-note">
              <svg width="11" height="11" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><rect x="3" y="11" width="18" height="11" rx="2"/><path d="M7 11V7a5 5 0 0 1 10 0v4"/></svg>
              Secure 256-bit SSL encryption. We never store your card details.
            </div>
          </motion.form>
        </div>

        {/* RIGHT — Order summary */}
        <motion.div
          className="checkout__summary-panel"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.55, delay: 0.1 }}
        >
          <p className="checkout__summary-heading">Your Order — {items.length} {items.length === 1 ? 'item' : 'items'}</p>

          <div className="checkout__items">
            {items.map((item) => (
              <div key={item.variantId || item.id} className="checkout__item">
                <div className="checkout__item-image">
                  <img src={item.image} alt={item.title} />
                  {item.quantity > 1 && (
                    <div className="checkout__item-badge">{item.quantity}</div>
                  )}
                </div>
                <div className="checkout__item-details">
                  <h3 className="checkout__item-title">{item.title}</h3>
                  {item.variantTitle && (
                    <p className="checkout__item-variant">{item.variantTitle}</p>
                  )}
                  <p className="checkout__item-price">${(parseFloat(item.price) * item.quantity).toFixed(2)}</p>
                </div>
              </div>
            ))}
          </div>

          {/* Promo */}
          <div className="checkout__promo">
            <input
              type="text"
              name="promo"
              value={formData.promo}
              onChange={handleInputChange}
              placeholder="Promo code"
              className="checkout__promo-input"
            />
            <button type="button" className="checkout__promo-btn">Apply</button>
          </div>

          <div className="checkout__totals">
            <div className="checkout__total-row">
              <span>Subtotal</span>
              <span>${total.toFixed(2)}</span>
            </div>
            <div className="checkout__total-row">
              <span>Shipping</span>
              <span>Free</span>
            </div>
            <div className="checkout__total-row">
              <span>Tax (8%)</span>
              <span>${tax.toFixed(2)}</span>
            </div>
            <div className="checkout__total-row checkout__total-row--final">
              <span>Total</span>
              <span>${finalTotal.toFixed(2)}</span>
            </div>
          </div>
        </motion.div>
      </div>
    </div>
  )
}