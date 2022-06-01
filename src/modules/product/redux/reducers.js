import { ProductConstants } from './constants';

export function product(state = {}, action) {
  switch (action.type) {
    case ProductConstants.GET_PRODUCTS_REQUEST:
      return {
        ...state
      };
    case ProductConstants.GET_PRODUCTS_SUCCESS:
      return {
        ...state,
        products: action.payload
      };
    case ProductConstants.GET_PRODUCTS_FAILURE:
      return {
        ...state
      };

    default:
      return state;
  }
}
