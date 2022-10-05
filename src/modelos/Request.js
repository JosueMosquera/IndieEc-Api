class Request {
  constructor(
    total,
    created_At,
    productId,
    userId,
    address,
    reference,
    request_status,
    ship_method,
    guideNumber,
    paymentMethod
  ) {
    this.total = total;
    this.created_At = created_At;
    this.productId = productId;
    this.userId = userId;
    this.address = address;
    this.reference = reference;
    this.request_status = request_status;
    this.ship_method = ship_method;
    this.guideNumber = guideNumber;
    this.paymentMethod = paymentMethod;
  }
}
module.exports = {
  Request: Request,
};
