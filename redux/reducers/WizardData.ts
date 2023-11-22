import {createSlice} from '@reduxjs/toolkit';

const initialState = {};

export const WizardData = createSlice({
  name: 'wizard',
  initialState: initialState,
  reducers: {
    updateUserData: (state, action) => {
      return {...state, ...action.payload};
    },
    resetToInitialState: () => {
      return initialState;
    },
  },
});

export const {updateUserData, resetToInitialState} = WizardData.actions;
export default WizardData.reducer;
