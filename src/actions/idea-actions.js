import actionCreator from './action-creator';

export const IdeaActionTypes = {
  GET_IDEAS: '@@bcgdv.GET_IDEAS',
  STORE_IDEAS: '@@bcgdv.STORE_IDEAS',
  STORE_NEW_IDEA: '@@bcgdv.STORE_NEW_IDEA',
  UPDATE_IDEA: '@@bcgdv.UPDATE_IDEA',
  CREATE_IDEA: '@@bcgdv.CREATE_IDEA',
};

export default actionCreator(IdeaActionTypes);
