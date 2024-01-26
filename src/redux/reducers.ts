import { createSlice, PayloadAction } from '@reduxjs/toolkit'

const initialState = {
    product: [],
    isLoading: false,
    singleProduct: [],
    showMore: {},
    getAccess: false
  };

  // Define the form slice using createSlice
const productSlice = createSlice({
    name: 'product',
    initialState,
    reducers: {
      setProduct: (state, action: PayloadAction<any>) => {
           return {
            ...state,
            product: action.payload,
          };
      },

      setIsLoading: (state, action: PayloadAction<any>) => {
            return {
              ...state,
              isLoading: action.payload
            }
      },

      setSingleProduct: (state, action: PayloadAction<any>) => {
        return {
          ...state,
          singleProduct: action.payload
        }
      },
      setGetAccess: (state, action: PayloadAction<any>) => {
        return {
          ...state, 
          getAccess: action.payload
        }
      }
    },

  });

export const { setGetAccess ,setProduct, setIsLoading, setSingleProduct } = productSlice.actions

export const productReducer = productSlice.reducer;