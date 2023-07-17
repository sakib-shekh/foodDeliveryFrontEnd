import { createSlice ,createAsyncThunk} from "@reduxjs/toolkit";
export const loginUser=createAsyncThunk("loginUser",async(data)=>{
   
    const response=await fetch("https://foodiebackend-wwb1.onrender.com/api/loginuser",{

        method:"POST",
        headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify(data)

    });
    const temp=response.json();
    return temp;
    
})


const loginUserSlice =createSlice({
    name:'login',
    initialState:{
        isLoading:false,
        message:"No internet",
        isError:false,
    },
    
    extraReducers :(builder)=>{
        builder.addCase(loginUser.fulfilled,(state,action)=>{
            state.isLoading=false;  
            state.message=action.payload.message;
            console.log(action);
            window.localStorage.setItem('token',action.payload.token);
            window.localStorage.setItem('name',action.payload.name);
            window.localStorage.setItem('email',action.payload.email);

        })
        builder.addCase(loginUser.pending,(state)=>{
            state.isLoading=true;  
        })
        builder.addCase(loginUser.rejected,(state,action)=>{
            state.isLoading=false;  
            state.isError=true;
            state.message=action.payload.message;
        })
    }

})

export default  loginUserSlice.reducer;