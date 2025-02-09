import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';
import { getEntireList } from '@/serices/index'; // 确保路径正确

// 定义异步thunk用于获取数据，并在其中直接分派同步actions
export const fetchEntireListAction = createAsyncThunk(
  'entire/fetchdata', // 注意action type前缀应为模块名
  async (page = 0, { dispatch }) => {
    const offset = page * 20;
    try {
      const res = await getEntireList(offset);
      console.log('Fetched house list:', res.list); 
      // 分派相应的同步actions来更新状态
      dispatch(changeHouseList({ list: res.list }));
      dispatch(changeTotalCount({ totalCount: res.totalCount }));
      dispatch(changeCurrentPage({ page }));
    } catch (error) {
      console.error("Failed to fetch data:", error);
    }
  }
);

// 创建slice
const entireSlice = createSlice({
  name: 'entire',
  initialState: {
    houseList: [],
    totalCount: 0,
    currentPage: 0
  },
  reducers: {
    changeHouseList(state, action) {
      state.houseList = action.payload.list;
    },
    changeTotalCount(state, action) {
      state.totalCount = action.payload.totalCount;
    },
    changeCurrentPage(state, action) {
      state.currentPage = action.payload.page;
    }
  }
});

// 导出actions
export const { 
  changeHouseList, 
  changeTotalCount, 
  changeCurrentPage 
} = entireSlice.actions;

export default entireSlice.reducer;