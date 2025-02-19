import * as actions from './actiontypes';

export const bugAdded = (description) => ({
  type: actions.BUG_ADDED,
  payload: {
    description: 'Bug1',
  },
});
