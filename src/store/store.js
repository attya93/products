import {configureStore} from "@reduxjs/toolkit";
import ProductsReduser from '../features/Products/Products.js'

export  const store = configureStore({
    reducer: { 
        products: ProductsReduser
    },

})