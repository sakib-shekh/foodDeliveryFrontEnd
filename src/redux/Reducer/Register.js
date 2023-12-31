import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";

export const createUser = createAsyncThunk("createUser", async (data) => {
  const response = await fetch(
    "https://foodiebackend-wwb1.onrender.com/api/createuser",
    {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(data),
    }
  );
  const temp = response.json();
  return temp;
});

const registerUserSlice = createSlice({
  name: "register",
  initialState: {
    isLoading: false,
    message: "No internet",
    isError: false,
  },
  extraReducers: (builder) => {
    builder.addCase(createUser.fulfilled, (state, action) => {
      state.message = action.payload.message;
      window.localStorage.setItem("message", action.payload.message);
      if (action.payload.message !== "success") return;
      window.localStorage.setItem("name", action.payload.name);
      window.localStorage.setItem("email", action.payload.email);
      window.localStorage.setItem("token", action.payload.token);
      window.localStorage.setItem("message", "success");

    });
    builder.addCase(createUser.pending, (state) => {
      state.isLoading = true;
    });
    builder.addCase(createUser.rejected, (state, action) => {
      state.isLoading = false;
      state.isError = true;
      state.message = action.payload.message;
    });
  },
});

export default registerUserSlice.reducer;
