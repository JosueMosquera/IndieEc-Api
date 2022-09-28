class Request {
  constructor(total, created_At, productId, userId) {
    this.total = total;
    this.created_At = created_At;
    this.productId = productId;
    this.userId = userId;
  }
}
module.exports = {
  Request: Request,
};
