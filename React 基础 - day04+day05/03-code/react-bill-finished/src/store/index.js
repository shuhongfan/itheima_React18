import { configureStore } from '@reduxjs/toolkit'

import ka from './slices/ka'

const store = configureStore({
  reducer: {
    ka,
  },
})

export default store
