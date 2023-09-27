import { createSlice } from "@reduxjs/toolkit";
import { getCurrentWeather } from "./thunk.ts";

type TWeather = {
  list: {
    dt_txt: string;
    dt: number;
    wind: {
      speed: number;
    };

    main: {
      temp: number;
      temp_min: number;
      temp_max: number;
      feels_like: number;
      humidity: number;
    };
  }[];
  weekDayData: {
    main: {
      feels_like: number;
      humidity: number;
      temp: number;
      temp_max: number;
      temp_min: number;
    };
    weather: {
      main: string;
      icon: string;
    }[];
    wind: {
      speed: number;
    };
  }[];

  error: string;
};

const initialState = {
  list: [],
  error: "",
  weekDayData: [],
} as TWeather;

const weatherReducer = createSlice({
  name: "weather-reducer",
  initialState,
  reducers: {
    changeDataOfWeekDay(state, action) {
      state.weekDayData = action.payload;
    },
  },
  extraReducers: (builder) => {
    builder.addCase(getCurrentWeather.fulfilled, (state, action) => {
      state.list = action.payload;
    });
    // .addCase(getCurrentWeather.rejected, (state, action) => {
    //     state.error = action.payload
    // })
  },
});
export default weatherReducer.reducer;
export const { changeDataOfWeekDay } = weatherReducer.actions;

// export const {} = weatherReducer.reducer
