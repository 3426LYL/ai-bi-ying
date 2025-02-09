import { createSlice } from '@reduxjs/toolkit';

const detailSlice = createSlice({
  name: "detail",
  initialState: {
    detailInfo: {}
  },
  reducers: {
    changeDetailInfosAction(state, { payload }) {
      state.detailInfo = payload;
    }
  }
});

export const { changeDetailInfosAction } = detailSlice.actions;
export default detailSlice.reducer;