import React from 'react'
import { Link } from 'react-router-dom';
import CheckoutProduct from './CheckoutProduct';
import "./Payment.css"
import { useStateValue } from './StateProvider';

function Payment() {
const [{ basket, user }, dispatch] = useStateValue(); 

    return (
        <div className="payment">
            <div className="payment__container">

                <h1>
            Checkout (<Link to="/checkout">{basket?.length} items</Link>)
                </h1>

                {/* Payment section */}
                <div className="payment__section">
                    <div className="payment__title">
                        <h3>Delivery Address</h3>
                    </div>
                    <div className="payment__address">
                    <p>{user?.email}</p>
                    <p>123 React Lane</p>
                    <p>Boston, Massachusetts</p>
                    </div>
                </div>
                {/* Payment section */}
                <div className="payment__section">
                <div className="payment__title">
                    <h3>Review items and delivery</h3>
                </div>
                <div className="payment__items">
                    {basket.map(item => (
                       <CheckoutProduct
                        id={item.id}
                        title={item.title}
                        image={item.image}
                        price={item.price}
                        rating={item.rating}
                        />
                    ))}
                </div>
                </div>

                {/* Payment section */}
                <div className="payment__section">
                <div className="payment__title">  
                <h3>Payment Method</h3> 
                </div>
                <div className="payment__details">
                    {/* Stripe will goes here */}
                </div>
                </div>
            </div>
        </div>
    )
}

export default Payment
