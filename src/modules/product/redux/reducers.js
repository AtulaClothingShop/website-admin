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

    case ProductConstants.CREATE_PRODUCT_REQUEST:
      return {
        ...state
      };
    case ProductConstants.CREATE_PRODUCT_SUCCESS:
      return {
        ...state,
        products: {
          ...state.products,
          items: [action.payload, ...state.products.items]
        }
      };
    case ProductConstants.CREATE_PRODUCT_FAILURE:
      return {
        ...state
      };

    default:
      return state;
  }
}
