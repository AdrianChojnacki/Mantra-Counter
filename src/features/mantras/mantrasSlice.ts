/* eslint-disable @typescript-eslint/strict-boolean-expressions */
/* eslint-disable @typescript-eslint/restrict-plus-operands */
import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";

const API_URL: any = process.env.NEXT_PUBLIC_API_URL;

export interface MantrasState {
  mantras: any;
  status: string;
  error: any;
}

const initialState: MantrasState = {
  mantras: [],
  status: "idle", // 'idle' | 'loading' | 'succeeded' | 'failed'
  error: null,
};

export const fetchMantras = createAsyncThunk(
  "mantras/fetchMantras",
  async () => {
    try {
      const response = await fetch(`${API_URL}.json`);
      const data = await response.json();

      const mantras = [];

      for (const key in data) {
        mantras.push({
          id: key,
          ...data[key],
        });
      }

      return mantras;
    } catch (err: any) {
      return err.message;
    }
  }
);

export const updateMantra = createAsyncThunk(
  "mantras/updateMantra",
  async (initialState: any) => {
    const { id, name, done, toDo } = initialState;
    try {
      const response = await fetch(`${API_URL}/${id}.json`, {
        method: "PUT",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          id,
          name,
          done,
          toDo,
        }),
      });
      const data = await response.json();
      return data;
    } catch (err: any) {
      return err.message;
    }
  }
);

const mantrasSlice = createSlice({
  name: "mantras",
  initialState,
  reducers: {},
  extraReducers(builder) {
    builder
      .addCase(fetchMantras.pending, (state) => {
        state.status = "loading";
      })
      .addCase(fetchMantras.fulfilled, (state, action) => {
        state.status = "succeeded";
        state.mantras = action.payload;
      })
      .addCase(fetchMantras.rejected, (state, action) => {
        state.status = "failed";
        state.error = action.error.message;
      })
      .addCase(updateMantra.fulfilled, (state, action) => {
        if (!action.payload?.id) {
          console.log("Update could not complete");
          return;
        }
        const { id } = action.payload;
        const mantras = state.mantras.filter((mantra: any) => mantra.id !== id);
        state.mantras = [...mantras, action.payload];
      });
  },
});

export const selectAllMantras = (state: any): any => state.mantras.mantras;
export const getMantrasStatus = (state: any): any => state.mantras.status;
export const getMantrasError = (state: any): any => state.mantras.error;
export const selectMantraById = (state: any, id: any): any =>
  state.mantras.mantras.find((mantra: any) => mantra.id === id);

export default mantrasSlice.reducer;
