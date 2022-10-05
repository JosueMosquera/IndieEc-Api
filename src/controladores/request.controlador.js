const { dataSource } = require("../ConfiguracionBaseDatos/appDataSource");
const Request = require("../modelos/Request").Request;
const requestCtl = {};
const globalRequests = {
  myRequests: [],
  adminRequests: [],
};
requestCtl.findMyRequests = async (req, res) => {
  const userId = req.params.userId;
  const parsedId = parseInt(userId);

  try {
    const requests = await dataSource
      .getRepository(Request)
      .find({ where: { userId: parsedId }, relations: ["product"] });
    const requestsToView = requests.map((request) => ({
      id: request.id,
      total: request.total,
      created_At: request.created_At,
      productName: request.product.name,
      productPrice: request.product.price,
      productCode: request.product.code,
      productImage: request.product.product_image,
      userId: request.userId,
      address: request.address,
      reference: request.reference,
      request_status: request.request_status,
      ship_method: request.ship_method,
      guideNumber: request.guideNumber,
    }));
    globalRequests.myRequests = requestsToView;
    res.render("e-commerce/requests/requestsUser", globalRequests);
  } catch (error) {
    console.log(error);
  }
};
requestCtl.findAll = async (req, res) => {
  try {
    const requests = await dataSource
      .getRepository(Request)
      .find({ relations: ["product", "user"] });

    const requestsToView = requests.map((request) => ({
      id: request.id,
      total: request.total,
      created_At: request.created_At,
      productName: request.product.name,
      productPrice: request.product.price,
      productCode: request.product.code,
      productImage: request.product.product_image,
      userName: request.user.username,
      userEmail: request.user.email,
      address: request.address,
      reference: request.reference,
      request_status: request.request_status,
      ship_method: request.ship_method,
      guideNumber: request.guideNumber,
    }));
    globalRequests.adminRequests = requestsToView;
    res.render("e-commerce/requests/requestsAdmin", globalRequests);
  } catch (error) {
    console.log(error);
  }
};
requestCtl.findOneProduct = async (req, res) => {
  try {
    const product = await dataSource
      .getRepository(Request)
      .findOne({ where: { id: req.params.id } });
    if (product) {
      res.render("e-commerce/productDetail", product);
    } else {
      res.json({
        message: "no existe el producto que estas buscando",
      });
    }
  } catch (error) {
    console.log(error);
  }
};

requestCtl.createRequest = async (req, res) => {
  try {
    const {
      total,
      created_At,
      productId,
      userId,
      address,
      reference,
      request_status,
      ship_method,
      guideNumber,
    } = req.body;
    const newRequest = dataSource.getRepository(Request).create(req.body);
    await dataSource.getRepository(Request).save({
      total,
      created_At,
      productId,
      userId,
      address,
      reference,
      request_status,
      ship_method,
      guideNumber,
    });
    return res.json(newRequest);
  } catch (error) {
    console.log(error);
  }
};

requestCtl.updateRequest = async (req, res) => {
  const requestId = req.params.id;
  const parsedId = parseInt(requestId);
  try {
    const {
      total,
      created_At,
      productId,
      userId,
      address,
      reference,
      request_status,
      ship_method,
      guideNumber,
    } = req.body;

    const findRequest = await dataSource
      .getRepository(Request)
      .findOneBy({ id: requestId });
    if (findRequest) {
      await dataSource.getRepository(Request).update(
        { id: parsedId },
        {
          total: total !== undefined ? total : findRequest.total,
          created_At:
            created_At !== undefined ? created_At : findRequest.created_At,
          productId:
            productId !== undefined ? productId : findRequest.productId,
          userId: userId !== undefined ? userId : findRequest.userId,
          address: address !== undefined ? address : findRequest.address,
          reference:
            reference !== undefined ? reference : findRequest.reference,
          request_status:
            request_status !== undefined
              ? request_status
              : findRequest.request_status,
          ship_method:
            ship_method !== undefined ? ship_method : findRequest.ship_method,
          guideNumber:
            guideNumber !== undefined ? guideNumber : findRequest.guideNumber,
        }
      );
      res.render("home");
    } else {
      console.log("no se encontro la solicitud por el id que ingreso");
    }
  } catch (error) {
    console.log(error);
  }
};

requestCtl.deleteRequest = async (req, res) => {
  try {
    const requestId = req.params.id;
    const findRequest = dataSource
      .getRepository(Request)
      .findOneBy({ id: requestId });
    if (findRequest) {
      await dataSource.getRepository(Request).delete({ id: requestId });
      res.render("home");
    } else {
      console.log("no se encontro la solicitud por el id que ingreso");
    }
  } catch (error) {
    console.log(error);
  }
};
module.exports = requestCtl;
