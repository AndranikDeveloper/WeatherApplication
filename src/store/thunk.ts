import { createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";

const API_KEY = "e76bd38c141833ead1fb984b98b48602";

export const getCurrentWeather = createAsyncThunk(
  `weather/getCurrentWeather`,
  async ({ q, units }: { q: string; units: string }) => {
    const response = await axios.get(
      `https://api.openweathermap.org/data/2.5/forecast?q=${q}&units=${units}&appid=${API_KEY}`
    );
    return response.data.list;
  }
);
