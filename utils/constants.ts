const wizard = {
  NEXT: 'Next',
  BACK: 'Back',
  SAVE: 'Save',
  FINISH: 'Finish',
  GENDER: 'Gender',
  AGE: 'Age',
  WEIGHT_LABEL: 'Weight (kg)',
  HEIGHT_LABEL: 'Height (cm)',
  WEIGHT: 'weight',
  HEIGHT: 'height',
  LEVEL: 'Level',
  GOAL: 'Goal',
  WORKOUTS_LABEL: 'Fitness workout',
  ABOUT_YOU: 'What are your body measurements?',
  FITNESS_LEVEL: 'What is your level of fitness?',
  FITNESS_GOAL: 'What is your primary fitness goal?',
  FITNESS_WORKOUTS: 'What is your kind of fitness workouts?',
  SUMMARY: 'Did I got it correct?',
  FINAL: "Let's save your data",
  BEGINNER: 'Beginner',
  INTERMEDIATE: 'Intermediate',
  ADVANCED: 'Advanced',
  LOSE_WEIGHT: 'Lose weight',
  BUILD_STRENGTH: 'Build strength',
  STAY_FIT: 'Stay fit',
  FAT_BURNING: 'Fat burning',
  WORKOUTS: 'workouts',
  REGULAR_TRAINING: 'Regular training',
  WORKOUT_ERROR: 'There is already an existing one',
  WORKOUT_ERROR_REQUIRED: 'Workout field cant be empty',
  DEFAULT_WIZARD_INDEX: 0,
  NONE_INDEX: -1,
  WORKOUT_INPUT_PLACEHOLDER: 'Enter your kind of workouts...',
  FOOTER_HEIGHT: 90,
};

const iconSizes = {
  MSize: 22,
  LSize: 28,
};

const paths = {
  USERS_PATH: 'users',
  WORKOUTS_PATH: 'workouts',
  EXERCISES_PATH: 'exercises',
};

const tabs = {
  PROFILE: 'Profile',
  EXERCISES: 'Exercises',
  WORKOUTS: 'Workouts',
};

const intro = {
  APP_NAME: 'Fitness App',
  HEADER: 'FIND OUT EXACTLY TRAINING WILL WORK SPECIFICALLY FOR YOU',
};

const errors = {
  USER_IN_USE_EMAIL_ERROR: 'Email address already in use',
  USER_INVALID_EMAIL_ERROR: 'Invalid email',
  USER_CREATE_ERROR: 'Something went wrong',
};

const auth = {
  SIGN_IN: 'Sign in',
  SIGN_UP: 'Sign up',
  EMAIL_LABEL: 'Email',
  EMAIL_PLACEHOLDER: 'Enter your email...',
  PASSWORD_LABEL: 'Password',
  PASSWORD_PLACEHOLDER: '*******',
  NAME_LABEL: 'Full name',
  NAME: 'name',
  NAME_PLACEHOLDER: 'Enter your name...',
  REGISTRATION_SUCCESS: 'You have successfully registered!',
};

const exercises = {
  USER_KEY: 'user',
  EXERCISES_KEY: 'exercises',
  EXERCISE: 'Exercise',
  ADD_EXERCISE: 'Add exercise',
  EDIT_EXERCISE: 'Edit exercise',
  LIST: 'Exercises List',
  CATEGORIES: 'Exercises Categories',
  NO_EXERCISES_TEXT: 'No exercises yet. Please add your exercises',
  EXERCISE_NAME: 'Exercise Name',
  DURATION: 'Duration',
  DESCRIPTION: 'Description',
  TIMES: 'Times',
  DEFAULT_NUMBER_OF_TEXTAREA: 5,
};

export {intro, errors, auth, wizard, paths, tabs, exercises, iconSizes};
