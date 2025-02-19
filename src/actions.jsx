import * as actions from './actiontypes';

export const bugAdded = (description) => ({
  type: actions.BUG_ADDED,
  payload: {
    description: description, // or shorthand code to just: description
  },
});

export const bugResolved = (id) => ({
  type: actions.BUG_RESOLVED,
  payload: {
    id: id,
  },
});
