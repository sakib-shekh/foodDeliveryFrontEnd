import {configureStore} from '@reduxjs/toolkit'
import registerUserSlice from './Reducer/Register';
import loginUserSlice from './Reducer/Login';
import fetchFoodSlice from './Reducer/fetchFood';
import searchFoodSlice from './Reducer/searchFood'
import CartItemSlice from './Reducer/CartItems'

const store=configureStore({

    reducer:{
        custom1:registerUserSlice,
        login:loginUserSlice,
        food:fetchFoodSlice,
        search:searchFoodSlice,
        cart:CartItemSlice
    }
})

export default store;