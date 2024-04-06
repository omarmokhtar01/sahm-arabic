// // productFactorySlice.js

// import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
// import baseUrl from "../../Api/baseURL";

// const initialState = {
//   productFactoryData: [],
//   isLoading: false,
//   error: null,
// };

//  const getproductFactory = createAsyncThunk('get/productFactory', async (_, thunkAPI) => {
//   try {
//     const response = await baseUrl.get(
//       'productFactory/Get');
      
//     return response.data;
//   } catch (error) {
//     return error
//   }
// });




// const categorySlice = createSlice({
//   name: 'productFactorytData',
//   initialState,
//   reducers: {},
//   extraReducers: (builder) => {
//     builder
//       .addCase(getproductFactory.pending, (state) => {
//         state.isLoading = true;
//         state.error = null;
//       })
//       .addCase(getproductFactory.fulfilled, (state, action) => {
//         state.productFactoryData = action.payload;
//         state.isLoading = false;
//         state.error = null;
//       })
//       .addCase(getproductFactory.rejected, (state, action) => {
//         state.isLoading = false;
//         state.error = action.payload;
//       })
// 	  }}
//       );
// export { getproductFactory};

// export default productFactorySlice.reducer;