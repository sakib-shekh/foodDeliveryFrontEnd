import { createSlice ,createAsyncThunk} from "@reduxjs/toolkit";
export const loginUser=createAsyncThunk("loginUser",async(data)=>{
   
    console.log(2,data);
    const response=await fetch("http://localhost:5001/api/loginuser",{

        method:"POST",
        headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify(data)

    });
    const temp=response.json();
    console.log(temp);
    return temp;
    
})


const loginUserSlice =createSlice({
    name:'login',
    initialState:{
        isLoading:false,
        message:"No internet",
        isError:false,
    },
    
    extraReducers :async(builder)=>{
        builder.addCase(loginUser.fulfilled,(state,action)=>{
             state.isLoading=false;  
             window.localStorage.setItem('message',action.payload.message);
         state.message=action.payload.message;
            if(action.payload.message !== 'success')
            return;
         window.localStorage.setItem('token',action.payload.token);
         window.localStorage.setItem('name',action.payload.name);
         window.localStorage.setItem('email',action.payload.email);
       
         window.location.replace('/');

        })
        builder.addCase(loginUser.pending,(state)=>{
            state.isLoading=true;
        })
        builder.addCase(loginUser.rejected,(state,action)=>{
            state.isLoading=false;  
            state.isError=true;
            state.message= action.payload &&  action.payload.message;
        })
    }

})

export default  loginUserSlice.reducer;