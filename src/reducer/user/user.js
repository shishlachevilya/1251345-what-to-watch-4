import {extend} from "../../helpers";
import {AuthorizationStatus} from "../../constants";
import {setUserAdapter} from "../../adapters/user-adapter";

const initialState = {
  authorizationStatus: AuthorizationStatus.NO_AUTH,
  profile: {}
};

const ActionType = {
  SET_AUTHORIZATION: `SET_AUTHORIZATION`,
  SET_USER_PROFILE: `SET_USER_PROFILE`
};

const ActionCreator = {
  setAuthorization: (status) => {
    return {
      type: ActionType.SET_AUTHORIZATION,
      payload: status,
    };
  },
  setUserProfile: (profile) => {
    return {
      type: ActionType.SET_USER_PROFILE,
      payload: profile
    };
  }
};

const reducer = (state = initialState, action) => {
  switch (action.type) {
    case ActionType.SET_AUTHORIZATION:
      return extend(state, {
        authorizationStatus: action.payload,
      });
    case ActionType.SET_USER_PROFILE:
      return extend(state, {
        profile: action.payload
      });
  }

  return state;
};

const Operation = {
  checkAuth: () => (dispatch, getState, api) => {
    return api.get(`/login`)
    .then((response) => {
      dispatch(ActionCreator.setAuthorization(AuthorizationStatus.AUTH));
      dispatch(ActionCreator.setUserProfile(setUserAdapter(response.data)));
    })
    .catch(() => {
      dispatch(ActionCreator.setAuthorization(AuthorizationStatus.NO_AUTH));
    });
  },

  login: (authData) => (dispatch, getState, api) => {
    return api.post(`/login`, {email: authData.login, password: authData.password})
    .then((response) => {
      dispatch(ActionCreator.setAuthorization(AuthorizationStatus.AUTH));
      dispatch(ActionCreator.setUserProfile(setUserAdapter(response.data)));
    });
  },
};

export {
  ActionCreator,
  ActionType,
  AuthorizationStatus,
  Operation,
  reducer,
};
