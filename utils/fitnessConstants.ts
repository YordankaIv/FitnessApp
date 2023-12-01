import {auth, wizard} from './constants';

export const fitnessWorkouts = [
  {label: 'Full Body', checked: false},
  {label: 'Upper body', checked: false},
  {label: 'Lower body', checked: false},
  {label: 'Middle body', checked: false},
  {label: 'Cardio/HIIT', checked: false},
  {label: 'Triceps and chest', checked: false},
  {label: 'Back and biceps', checked: false},
  {label: 'Legs and shoulder', checked: false},
  {label: 'Core', checked: false},
];

export const fitnessWizardSummary = [
  {label: auth.NAME_LABEL, name: auth.NAME},
  {label: wizard.AGE, name: wizard.AGE.toLocaleLowerCase()},
  {label: wizard.WEIGHT_LABEL, name: wizard.WEIGHT},
  {label: wizard.HEIGHT_LABEL, name: wizard.HEIGHT},
  {label: wizard.LEVEL, name: wizard.LEVEL.toLocaleLowerCase()},
  {label: wizard.GOAL, name: wizard.GOAL.toLocaleLowerCase()},
];
