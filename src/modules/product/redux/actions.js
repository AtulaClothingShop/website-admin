import { ProductServices } from './services';
import { ProductConstants } from './constants';

export const ProductActions = {
  getProducts
};

function getProducts(data) {
  return dispatch => {
    dispatch({
      type: ProductConstants.GET_PRODUCTS_REQUEST
    });
    ProductServices.getProducts(data)
      .then(res => {
        dispatch({
          type: ProductConstants.GET_PRODUCTS_SUCCESS,
          payload: res.data
        });
      })
      .catch(error => {
        dispatch({
          type: ProductConstants.GET_PRODUCTS_FAILURE,
          error: error
        });
      });
  };
}
