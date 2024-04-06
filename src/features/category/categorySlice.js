// // categorySlice.js

// import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
// import baseUrl from "../../Api/baseURL";

// const initialState = {
//   categoryData: [],
//   isLoading: false,
//   error: null,
// };

//  const getCategory = createAsyncThunk('get/category', async (_, thunkAPI) => {
//   try {
//     const response = await baseUrl.get(
//       'category/Get');
      
//     return response.data;
//   } catch (error) {
//     return error
//   }
// });




// const categorySlice = createSlice({
//   name: 'categoryData',
//   initialState,
//   reducers: {},
//   extraReducers: (builder) => {
//     builder
//       .addCase(getCategory.pending, (state) => {
//         state.isLoading = true;
//         state.error = null;
//       })
//       .addCase(getCategory.fulfilled, (state, action) => {
//         state.eldersData = action.payload;
//         state.isLoading = false;
//         state.error = null;
//       })
//       .addCase(getCategory.rejected, (state, action) => {
//         state.isLoading = false;
//         state.error = action.payload;
//       })
// 	  }}
//       );
// export { getCategory};

// export default categorySlice.reducer;