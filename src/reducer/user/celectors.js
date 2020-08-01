import NameSpace from "../name-space";

// const NAME_SPACE = NameSpace.USER;

export const getAuthorizationStatus = (state) => {
  return state[NameSpace].authorizationStatus;
};
