import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";

const initialState = {
  countryData: [],
  loading: false,
  searchTerm: "",
  singleItem: [],
  openModel: false,
};

export const getAllData = createAsyncThunk("getAllData", async () => {
  const res = await fetch("https://restcountries.com/v3.1/all");
  const data = await res.json();

  return data;
});

export const getSearchData = createAsyncThunk("getSearchData", async (name) => {
  const res = await fetch(`https://restcountries.com/v3.1/name/${name}`);
  const data = await res.json();
  //   console.log(data)

  return data;
});

const countrySlice = createSlice({
  name: "country",
  initialState,
  reducers: {
    changeSearch: (state, action) => {
      state.searchTerm = action.payload;
    },
    setOpenModel: (state, action) => {
      state.openModel = true;
    },
    setOpenModelFalse: (state, action) => {
        state.openModel = false;
      },
    clearInput: (state, action) => {
        state.searchTerm = "";
    },
  },
  extraReducers: (builder) => {
    builder.addCase(getAllData.pending, (state, action) => {
      state.loading = true;
    });
    builder.addCase(getAllData.fulfilled, (state, action) => {
      state.countryData = action.payload;
      state.loading = false;
    });
    builder.addCase(getSearchData.pending, (state, action) => {
      state.loading = true;
    });
    builder.addCase(getSearchData.fulfilled, (state, action) => {
      state.singleItem = action.payload;
      state.loading = false;
    });
  },
});

export const { changeSearch, setOpenModel, clearInput,setOpenModelFalse } = countrySlice.actions;

export const countryReducer = countrySlice.reducer;
