import { createSlice } from '@reduxjs/toolkit';

const initialState = {
  image: 'https://fakestoreapi.com/img/81fPKd-2AYL._AC_SL1500_.jpg',
};

const imageSlice = createSlice({
  name: 'image',
  initialState,
  reducers: {
    changeImage: {
      reducer(state, action) {
        state.image = action.payload
      },
    },
  },
});

export const getImage = (state) => state.image.image;

export const {changeImage} = imageSlice.actions;

export default imageSlice.reducer
