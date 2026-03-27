import { useEffect } from 'react'
import { Link } from 'react-router-dom'
import { motion } from 'framer-motion'
import '../styles/CheckoutSuccess.css'

export default function CheckoutSuccess() {
  useEffect(() => {
    // Scroll to top when component mounts
    window.scrollTo(0, 0)
  }, [])

  return (
    <div className="checkout-success">
      <motion.div
        className="checkout-success__container"
        initial={{ opacity: 0, scale: 0.9 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ duration: 0.5 }}
      >
        <motion.div
          className="checkout-success__icon"
          initial={{ scale: 0 }}
          animate={{ scale: 1 }}
          transition={{ delay: 0.2, type: 'spring', stiffness: 200 }}
        >
          ✓
        </motion.div>

        <motion.h1
          className="checkout-success__title"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.3 }}
        >
          Order Confirmed!
        </motion.h1>

        <motion.p
          className="checkout-success__message"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.4 }}
        >
          Thank you for your purchase. Your order has been successfully placed and you'll receive a confirmation email shortly.
        </motion.p>

        <motion.div
          className="checkout-success__details"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.5 }}
        >
          <div className="checkout-success__detail">
            <span className="checkout-success__label">Order Number:</span>
            <span className="checkout-success__value">#DRIP-{Date.now().toString().slice(-6)}</span>
          </div>
          <div className="checkout-success__detail">
            <span className="checkout-success__label">Estimated Delivery:</span>
            <span className="checkout-success__value">3-5 business days</span>
          </div>
        </motion.div>

        <motion.div
          className="checkout-success__actions"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.6 }}
        >
          <Link to="/" className="checkout-success__button checkout-success__button--primary">
            Continue Shopping
          </Link>
          <Link to="/profile" className="checkout-success__button checkout-success__button--secondary">
            View Order History
          </Link>
        </motion.div>

        <motion.div
          className="checkout-success__help"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.7 }}
        >
          <p>Need help? <a href="mailto:support@drip.com">Contact our support team</a></p>
        </motion.div>
      </motion.div>
    </div>
  )
}