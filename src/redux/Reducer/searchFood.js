import { createSlice ,createAsyncThunk} from "@reduxjs/toolkit";


export const searchFood=createAsyncThunk("searchFood",async(params)=>{

    const response=await fetch( "https://foodiebackend-wwb1.onrender.com/api/getfood?"+params,{

        method:"GET",
        headers: {
            "Content-Type": "application/json",
            token:window.localStorage.getItem('token')
          },
    });

    const temp=response.json();
    console.log(temp);
    return temp;
    
})

const searchFoodSlice =createSlice({
    name:'search',
    initialState:{
        fooditem:[],
        isLoading:false,
        message:"No internet",
        isError:false,
    },
    extraReducers :(builder)=>{
        builder.addCase(searchFood.fulfilled,(state,action)=>{
            state.isLoading=false;  
            state.message=action.payload.message;
         
            state.fooditem=action.payload.data;
      
           
        })
        builder.addCase(searchFood.pending,(state)=>{
            state.isLoading=true;  
        })
        builder.addCase(searchFood.rejected,(state,action)=>{
            state.isLoading=false;  
            state.isError=true;
            state.message=action.payload.message;
        })
    }

})

export default  searchFoodSlice.reducer;