import {Link} from 'react-router-dom'
import './index.css'
/* eslint-disable jsx-a11y/img-redundant-alt */

const OrderPlaced = () => (
  <div className="Order-place-container">
    <img
      src="https://clipart-library.com/images/Lcd5doyqi.png"
      className="img"
      alt="orderplaced-image"
    />
    <h1 className="head">Your order placed Successfully!!</h1>
    <Link to="/products">
      <button type="button" className="btn">
        continue Shopping
      </button>
    </Link>
  </div>
)
export default OrderPlaced
