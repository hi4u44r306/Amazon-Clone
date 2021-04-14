import React, { useState } from 'react';
import './Payment.css';
import { useStateValue } from "./StateProvider";
import CheckoutProduct from './CheckoutProduct';
import { Link } from 'react-router-dom';
import { CardElement, useElements, useStripe } from '@stripe/react-stripe-js';
import CurrencyFormat from "react-currency-format";
import { getBasketTotal } from "./reducer";



function Payment() {

     const [{ basket, user }, dispatch] = useStateValue();
     
     const stripe = useStripe();
     const elements = useElements();

     const [succeeded, setSucceeded] = useState(false);
     const [processing, setProcessing] = useState("");
     const [error, setError] = useState(null);
     const [disabled, setDisabled] = useState(true);
     const [clientSecret, setClientSecret] = useState(true);

     useEffect(() => {
          // generate the special stripe secrect which allows us to charge customer
          const getClientSecret = async () => {
               const response = await axios({
                    method: 'post',
                    url: `/payments/create?total=${getBasketTotal(basket) * 100}`
               });
               setClientSecret(response.data.clientSecret)
          }
          getClientSecret();
     }, [basket])

     const handleSubmit = async (event) => {
          // do stripe stuff
          event.preventDefault();
          setProcessing(true);
          const payload = await stripe.confirmCardPayment(clientSecret, {
               payment_method: {
                    card: elements.getElement(CardElement)
               }
          }).then(({ paymentIntent }) => {
               // paymentIntent = payment confirmation
               setSucceeded(true);
               setError(null);
               setProcessing(false);
               history.replace('/orders')
          })
     }
     const handleChange = event => {
          setDisabled(event.empty);
          setError(event.error ? event.error.message : "");
     }

     return (
          <div className='payment'>
               <div className='payment__container'>
                    <h1>
                         Checkout {<Link to="/checkout">{basket.length}</Link>}
                    </h1>

                    {/* Payment section - delivery address */}
                    <div className='payment__section'>
                         <div className='payment__title'>
                              <h3>Delivery Address</h3>
                         </div>
                         <div className='payment__address'>
                              <p>{user?.email}</p>
                              <p>Taiwan,Taoyuan</p>
                              <p>MCU</p>
                         </div>
                    </div>

                    
                    {/* Payment section - Review Items*/}
                    <div className='payment__section'>
                         <div className='payment__title'>
                              <h3>Review items and delivery</h3>
                         </div>
                         <div className='payment__items'>
                              {/* All products will show */}
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

                    
                    {/* Payment section - Payment method*/}
                    <div className='payment__section'>
                         <div className='payment__title'>
                              <h3>Payment Method</h3>
                         </div>
                         <div className='payment__title'>
                              {/* Stripe magic will go */}
                              <form onSubmit={handleSubmit}>
                                   <CardElement onChange={handleChange} />

                                   <div className='payment__priceContainer'>
                                         <CurrencyFormat
                                             renderText={(value) => (
                                                  <h3>Order Total:{value}</h3>
                                             )}
                                             decimalScale={2}
                                             value={getBasketTotal(basket)}
                                             displayType={"text"}
                                             thousandSeparator={true}
                                             prefix={"$"}
                                        />
                                        <button disabled={processing || disabled || succeeded}>
                                             <span>{processing ? <p>Processing</p> : "Buy now"}</span>
                                        </button>
                                   </div>

                                   {error && <div>{error}</div>}
                              </form>
                         </div>
                    </div>
               </div>
          </div>
     )
}

export default Payment
