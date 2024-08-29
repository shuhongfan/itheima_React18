import foodsReducer from './modules/takeaway'
import { configureStore } from '@reduxjs/toolkit'

const store = configureStore({
  reducer: {
    foods: foodsReducer
  }
})

export default store