class Request {
  constructor(total, created_At, productId, userId, address) {
    this.total = total;
    this.created_At = created_At;
    this.productId = productId;
    this.userId = userId;
    this.address = address;
  }
}
module.exports = {
  Request: Request,
};
