/* eslint-disable no-undef */
import { pick } from 'lodash';

// Helpers
import { sendRequestToServer, filterObject } from '../../../helpers';

export const ProductServices = {
  getProducts,
  createProduct
};

function getProducts(data) {
  data = filterObject(data, ['page', 'limit']);

  return sendRequestToServer({
    method: 'GET',
    url: `${process.env.REACT_APP_SERVER}/v1/product`,
    params: data
  });
}

function createProduct(data) {
  data = pick(data, ['name', 'type', 'price', 'sizeRanges', 'productInfos']);

  let productInfos = [];
  data.productInfos.forEach(item => {
    productInfos.push(pick(item, ['size', 'color', 'quantity']));
  });

  data.productInfos = productInfos;

  return sendRequestToServer({
    method: 'POST',
    url: `${process.env.REACT_APP_SERVER}/v1/product`,
    data: data
  });
}
