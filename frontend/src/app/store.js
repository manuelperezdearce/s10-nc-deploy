import { configureStore } from '@reduxjs/toolkit'
import authReducer from '../features/auth/authSlice'
import productReducer from '../features/product/productSlice'
import navReducer from '../features/nav/navSlice'
import foodsReducer from '../features/foods/foodsSlice'
import counterReducer from '../features/counter/counterSlice'
import restaurantsReducer from '../features/restaurantes/restaurantsSlice'
import categoriesReducer from '../features/category/categorySlice'
import mapReducer from '../features/map/mapSlice'

export const store = configureStore({
  reducer: {
    auth: authReducer,
    product: productReducer,
    nav: navReducer,
    foods: foodsReducer,
    counter: counterReducer,
    restaurants: restaurantsReducer,
    map: mapReducer,
    categories: categoriesReducer
  }
})
