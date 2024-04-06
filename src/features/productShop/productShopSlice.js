// // productShopSlice.js

// import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
// import baseUrl from "../../Api/baseURL";

// const initialState = {
//   productData: [],
//   isLoading: false,
//   error: null,
// };

//  const getProduct = createAsyncThunk('get/product', async (_, thunkAPI) => {
//   try {
//     const response = await baseUrl.get(
//       'product/Get');
      
//     return response.data;
//   } catch (error) {
//     return error
//   }
// });




// const categorySlice = createSlice({
//   name: 'productData',
//   initialState,
//   reducers: {},
//   extraReducers: (builder) => {
//     builder
//       .addCase(getProduct.pending, (state) => {
//         state.isLoading = true;
//         state.error = null;
//       })
//       .addCase(getProduct.fulfilled, (state, action) => {
//         state.productData = action.payload;
//         state.isLoading = false;
//         state.error = null;
//       })
//       .addCase(getProduct.rejected, (state, action) => {
//         state.isLoading = false;
//         state.error = action.payload;
//       })
// 	  }}
//       );
// export { getProduct};

// export default productShopSlice.reducer;