import { createSlice, PayloadAction } from '@reduxjs/toolkit';

export type TOrder = {
  name: string;
  number: number;
};

export type TCurrentOrderState = {
  order: TOrder | null;
  isLoading: boolean;
  isModalOpen: boolean;
};

type TAddCurrentOrderPayload = {
  name: string;
  number: number;
};

export const initialState: TCurrentOrderState = {
  order: null,
  isLoading: false,
  isModalOpen: false,
};

const currentOrderSlice = createSlice({
  name: 'currentOrder',
  initialState,
  reducers: {
    addCurrentOrderStart(state) {
      state.isLoading = true;
    },
    addCurrentOrderSuccess(
      state,
      action: PayloadAction<TAddCurrentOrderPayload>,
    ) {
      state.isLoading = false;
      state.order = action.payload;
      state.isModalOpen = true;
    },
    addCurrentOrderFailure(state) {
      state.isLoading = false;
      state.order = initialState.order;
    },
    closeCurrentOrderModal(state) {
      state.isModalOpen = false;
    },
  },
});

export const {
  addCurrentOrderStart,
  addCurrentOrderSuccess,
  addCurrentOrderFailure,
  closeCurrentOrderModal,
} = currentOrderSlice.actions;

export default currentOrderSlice.reducer;
