import { find, merge } from 'lodash';
import { IdeaActionTypes } from '../actions/idea-actions';

const getIdeas = (state) => ({
  ...state,
  isLoading: true,
});

const storeNewIdea = (state, payload) => {
  const { id, created_date } = payload;
  return {
    ...state,
    newIdeaId: id,
    records: [
      {
        id,
        created_date,
      },
      ...state.records,
    ]
  };
};

const storeIdeas = (state, payload) => ({
  ...state,
  records: payload,
  isLoading: false,
})

const updateIdea = (state, payload) => {
  const { id, name, value } = payload;
  const existingIdea = find(state.records, ['id', id]);
  const updatedIdea = merge(existingIdea, { [name]: value }, {});

  return {
    ...state,
    records: [
      ...merge(state.records, updatedIdea, {}),
    ]
  }
}

const ideas = (state = {}, { type, payload }) => {
  switch (type) {
    case IdeaActionTypes.GET_IDEAS:
      return getIdeas(state);
    case IdeaActionTypes.STORE_IDEAS:
      return storeIdeas(state, payload);
    case IdeaActionTypes.STORE_NEW_IDEA:
      return storeNewIdea(state, payload);
    case IdeaActionTypes.UPDATE_IDEA:
      return updateIdea(state, payload);
    default:
      return state;
  }
 };

 export default ideas;
