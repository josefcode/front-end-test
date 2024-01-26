import { ThunkAction, configureStore, Action } from '@reduxjs/toolkit'
import { productReducer } from './reducers'

const store = configureStore({
  reducer: {
    productReducer,
  },
})

export type RootState = ReturnType<typeof store.getState>
export type AppDispatch = typeof store.dispatch
export type AppThunk<ReturnType = void> = ThunkAction<
  ReturnType,
  RootState,
  unknown,
  Action<string>
>

export default store