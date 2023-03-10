import { ActionTypes } from '../Constants/ActionTypes';

export const setProducts = (products) => {
  return {
    type: ActionTypes.SET_PRODUCTS,
    payload: products,
  };
};

export const filterProducts = (searchTerm) => {
  return {
    type: ActionTypes.FILTER_PRODUCT,
    payload: searchTerm,
  };
};

export const selectedProduct = (product) => {
  return {
    type: ActionTypes.SELECTED_PRODUCT,
    payload: product,
  };
};

export const RemoveselectedProduct = () => {
  return {
    type: ActionTypes.REMOVE_SELECTED_PRODUCT,
  };
};
