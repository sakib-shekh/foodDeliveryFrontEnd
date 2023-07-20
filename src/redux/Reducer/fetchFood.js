import { createSlice ,createAsyncThunk} from "@reduxjs/toolkit";


export const fetchFood=createAsyncThunk("fetchFood",async(params)=>{

    const response=await fetch( "https://foodiebackend-wwb1.onrender.com/api/getfood?"+params,{

        method:"GET",
        headers: {
            "Content-Type": "application/json",
            token:window.localStorage.getItem('token')
          },
    });

    const temp=response.json();

    return temp;
    
})

const fetchFoodSlice =createSlice({
    name:'food',
    initialState:{
        fooditem:[],
        isLoading:false,
        message:"No internet",
        isError:false,
    },
    extraReducers :(builder)=>{
        builder.addCase(fetchFood.fulfilled,(state,action)=>{
            state.isLoading=false;  
            state.message=action.payload.message;

            state.fooditem=action.payload.data;
           
        })
        builder.addCase(fetchFood.pending,(state)=>{
            state.isLoading=true;  
        })
        builder.addCase(fetchFood.rejected,(state,action)=>{
            state.isLoading=false;  
            state.isError=true;
            state.message=action.payload.message;
        })
    }

})

export default  fetchFoodSlice.reducer;