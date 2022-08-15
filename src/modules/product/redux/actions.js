import { ProductServices } from './services'
import { ProductConstants } from './constants'

export const ProductActions = {
  getProducts,
  createProduct
}

function getProducts(data) {
  return (dispatch) => {
    dispatch({
      type: ProductConstants.GET_PRODUCTS_REQUEST
    })
    ProductServices.getProducts(data)
      .then((res) => {
        dispatch({
          type: ProductConstants.GET_PRODUCTS_SUCCESS,
          payload: res.data
        })
      })
      .catch((error) => {
        dispatch({
          type: ProductConstants.GET_PRODUCTS_FAILURE,
          error: error
        })
      })
  }
}

function createProduct(data) {
  return (dispatch) => {
    dispatch({
      type: ProductConstants.CREATE_PRODUCT_REQUEST
    })
    ProductServices.createProduct(data)
      .then((res) => {
        dispatch({
          type: ProductConstants.CREATE_PRODUCT_SUCCESS,
          payload: res.data
        })
      })
      .catch((error) => {
        dispatch({
          type: ProductConstants.CREATE_PRODUCT_FAILURE,
          error: error
        })
      })
  }
}
