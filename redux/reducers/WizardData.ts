import {createSlice} from '@reduxjs/toolkit';
import {RootState} from '../../types/CommonTypes';

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

export const selectWizard = (state: RootState) => state.wizard;
