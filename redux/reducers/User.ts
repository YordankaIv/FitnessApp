import {createSlice} from '@reduxjs/toolkit';

const initialState = {
  isLoggedIn: false,
};

export const User = createSlice({
  name: 'user',
  initialState: initialState,
  reducers: {
    logIn: (state, action) => {
      return {...state, ...{isLoggedIn: true}, ...action.payload};
    },
    resetToInitialState: () => {
      return initialState;
    },
    updateToken: (state, action) => {
      state.token = action.payload;
    },
  },
});

export const {logIn, resetToInitialState, updateToken} = User.actions;
export default User.reducer;

export const selectUser = (state: {user: {[key: string]: string}}) =>
  state.user;
