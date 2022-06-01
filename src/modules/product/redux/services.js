/* eslint-disable no-undef */
import { sendRequestToServer, filterObject } from '../../../helpers';

export const ProductServices = {
  getProducts
};

function getProducts(data) {
  data = filterObject(data, ['page', 'limit']);

  return sendRequestToServer({
    method: 'GET',
    url: `${process.env.REACT_APP_SERVER}/v1/product`,
    params: data
  });
}
