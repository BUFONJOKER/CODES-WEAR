import React from 'react'

export default function Payment() {
  return (
    <div>
      <div className="container">
        <div className="card">
          <div className="card-header">
            <h4>Payment Details</h4>
          </div>
          <div className="card-body">
            <form action="/payment" method="post">
              <div className="form-group">
                <label htmlFor="cardNumber">Card Number</label>
                <input type="text" className="form-control" id="cardNumber" name="cardNumber" placeholder="1234 1234 1234 1234" />
              </div>
              <div className="form-group">
                <label htmlFor="expirationDate">Expiration Date</label>
                <input type="text" className="form-control" id="expirationDate" name="expirationDate" placeholder="MM/YY" />
              </div>
              <div className="form-group">
                <label htmlFor="cvc">CVC</label>
                <input type="text" className="form-control" id="cvc" name="cvc" placeholder="123" />
              </div>
              <div className="form-group">
                <label htmlFor="country">Country</label>
                <input type="text" className="form-control" id="country" name="country" placeholder="Pakistan" />
              </div>
              <button type="submit" className="btn btn-primary" onClick={(e)=>{e.preventDefault()}}>Pay Now</button>
            </form>
          </div>
        </div>
      </div>

    </div>
  )
}
