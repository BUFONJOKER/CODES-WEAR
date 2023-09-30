import React from 'react'

export default function Payment() {
  return (
    <div>
        <div class="container">
  <div class="card">
    <div class="card-header">
      <h4>Payment Details</h4>
    </div>
    <div class="card-body">
      <form action="/payment" method="post">
        <div class="form-group">
          <label for="cardNumber">Card Number</label>
          <input type="text" class="form-control" id="cardNumber" name="cardNumber" placeholder="1234 1234 1234 1234"/>
        </div>
        <div class="form-group">
          <label for="expirationDate">Expiration Date</label>
          <input type="text" class="form-control" id="expirationDate" name="expirationDate" placeholder="MM/YY"/>
        </div>
        <div class="form-group">
          <label for="cvc">CVC</label>
          <input type="text" class="form-control" id="cvc" name="cvc" placeholder="123"/>
        </div>
        <div class="form-group">
          <label for="country">Country</label>
          <input type="text" class="form-control" id="country" name="country" placeholder="Pakistan"/>
        </div>
        <button type="submit" class="btn btn-primary">Pay Now</button>
      </form>
    </div>
  </div>
</div>

    </div>
  )
}
