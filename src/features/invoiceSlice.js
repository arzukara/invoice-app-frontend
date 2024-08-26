import { createSlice } from '@reduxjs/toolkit'

export const invoiceSlice = createSlice({
  name: 'invoice',
  initialState: {
    activePage: 1,
    pageSize: 3,
    invoices: [],
    invoicesCount: 0,
    selectedStatuses: [],
  },
  reducers: {
    setInvoices: (state, action) => {
      state.invoices = action.payload
    },
    setActivePage: (state, action) => {
        state.activePage = action.payload
    },
    setPageSize: (state, action) => {
        state.pageSize = action.payload
    },
    setInvoicesCount: (state, action) => {
        state.invoicesCount = action.payload
    },
    setSelectedStatuses: (state, action) => {
        state.selectedStatuses = action.payload
    }
  },
})

export const { setInvoices, setActivePage, setInvoicesCount, setPageSize, setSelectedStatuses } = invoiceSlice.actions

export default invoiceSlice.reducer