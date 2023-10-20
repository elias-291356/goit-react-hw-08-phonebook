import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import { currentRequest, loginRequest, logoutRequest, registerRequest, setToken } from "service/api";



export const registerThunk = createAsyncThunk(
  'user/registerThunk',
  async (formData, thunkAPI) => {
    try {
      const data = await registerRequest(formData);
      console.log(data)
      return data;
    } catch (error) {
      return thunkAPI.rejectWithValue(error.message);
    }
  }
);
export const loginThunk = createAsyncThunk(
  'user/loginThunk',
  async (formData, thunkAPI) => {
    try {
      const data = await loginRequest(formData);
      console.log(data)
      return data;
    } catch (error) {
      return thunkAPI.rejectWithValue(error.message);
    }
  }
);
export const logOutThunk = createAsyncThunk(
  'user/logOutThunk',
  async (_, thunkAPI) => {
    try {
      await logoutRequest();
    } catch (error) {
      return thunkAPI.rejectWithValue(error.message);
    }
  }
);
export const refreshUserThunk = createAsyncThunk(
  'user/refreshUserThunk',
  async (_, thunkAPI) => {
    const state = thunkAPI.getState()
    const token = state.user.token;
    if (!token) return
    try {
      setToken(token)
      const data = await currentRequest()
      console.log('data', data)
      return data
    } catch (error) {
      return thunkAPI.rejectWithValue(error.message);
    }
  }
);

const initialState = {
  isLoading: false,
  error: null,
  userData: null,
  token: null,
};


const userSlice = createSlice({
  name: 'user',
  initialState,
  extraReducers: builder =>
    // ========================== register below
    builder
      .addCase(registerThunk.pending, (state, action) => {
        state.isLoading = true
        state.error = null
      })
      .addCase(registerThunk.fulfilled, (state, action) => {
        state.isLoading = false;
        state.userData = action.payload.user;
        state.token = action.payload.token;
      })
      .addCase(registerThunk.rejected, (state, action) => {
        state.isLoading = false;
        state.error = action.payload;
      })

      // ==========================login below

      .addCase(loginThunk.pending, (state, action) => {
        state.isLoading = true
        state.error = null
      })
      .addCase(loginThunk.fulfilled, (state, action) => {
        state.isLoading = false;
        state.userData = action.payload.user;
        state.token = action.payload.token;
      })
      .addCase(loginThunk.rejected, (state, action) => {
        state.isLoading = false;
        state.error = action.payload;
      })
      // ==========================logout below

      .addCase(logOutThunk.pending, (state, action) => {
        state.isLoading = true
        state.error = null
      })
      .addCase(logOutThunk.fulfilled, (state, action) => {
        state.isLoading = false;
        state.userData = null;
        state.token = null;
      })
      .addCase(logOutThunk.rejected, (state, action) => {
        state.isLoading = false;
        state.error = action.payload;
      })

      // ==========================refresh below
      .addCase(refreshUserThunk.pending, (state, action) => {
        state.isLoading = true
        state.error = null
      })
      .addCase(refreshUserThunk.fulfilled, (state, action) => {
        state.isLoading = false;
        state.userData = action.payload;

      })
      .addCase(refreshUserThunk.rejected, (state, action) => {
        state.isLoading = false;
        state.error = action.payload;
      })
})

export const userReducer = userSlice.reducer
export default initialState;