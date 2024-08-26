import { configureStore } from '@reduxjs/toolkit'
import invoiceCounter from './features/invoiceSlice'
import {thunk} from 'redux-thunk';

export default configureStore({
  reducer: {
    invoice: invoiceCounter,
  },
  middleware: (getDefaultMiddleware) => getDefaultMiddleware().concat(thunk),
})