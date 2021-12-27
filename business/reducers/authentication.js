import {
  AUTHENTICATION_TOKEN_NEW,
  AUTHENTICATION_TOKEN_NEW_SUCCESS,
  AUTHENTICATION_TOKEN_NEW_FAIL,
  AUTHENTICATION_SESSION_NEW,
  AUTHENTICATION_SESSION_NEW_FAIL,
  AUTHENTICATION_SESSION_NEW_SUCCESS,
  AUTHENTICATION_TOKEN_VALIDATE_WITH_LOGIN,
  AUTHENTICATION_TOKEN_VALIDATE_WITH_LOGIN_SUCCESS,
  AUTHENTICATION_TOKEN_VALIDATE_WITH_LOGIN_FAIL,
} from "../types/authentication";

const INITIAL_STATE = {
  authenticationTokenNewLoading: false,
  authenticationTokenNewResult: {},
  authenticationTokenNewFail: false,

  authenticationTokenSessionLoading: false,
  authenticationTokenSessionResult: {},
  authenticationTokenSessionFail: false,

  authenticationTokenValidateWithLoginLoading: false,
  authenticationTokenValidateWithLoginResult: {},
  authenticationTokenValidateWithLoginFail: false,
};

export default (state = INITIAL_STATE, action) => {
  switch (action.type) {
    case AUTHENTICATION_TOKEN_NEW:
      return {
        ...state,
        authenticationTokenNewLoading: true,
        authenticationTokenNewResult: {},
        authenticationTokenNewFail: false,
      };
    case AUTHENTICATION_TOKEN_NEW_SUCCESS:
      return {
        ...state,
        authenticationTokenNewLoading: false,
        authenticationTokenNewResult: action.payload.data,
        authenticationTokenNewFail: false,
      };
    case AUTHENTICATION_TOKEN_NEW_FAIL:
      return {
        ...state,
        authenticationTokenNewLoading: false,
        authenticationTokenNewResult: {},
        authenticationTokenNewFail: true,
      };

    case AUTHENTICATION_SESSION_NEW:
      return {
        ...state,
        authenticationTokenSessionLoading: true,
        authenticationTokenSessionResult: {},
        authenticationTokenSessionFail: false,
      };
    case AUTHENTICATION_SESSION_NEW_SUCCESS:
      return {
        ...state,
        authenticationTokenSessionLoading: false,
        authenticationTokenSessionResult: action.payload.data,
        authenticationTokenSessionFail: false,
      };
    case AUTHENTICATION_SESSION_NEW_FAIL:
      return {
        ...state,
        authenticationTokenSessionLoading: false,
        authenticationTokenSessionResult: {},
        authenticationTokenSessionFail: true,
      };

    case AUTHENTICATION_TOKEN_VALIDATE_WITH_LOGIN:
      return {
        ...state,
        authenticationTokenValidateWithLoginLoading: true,
        authenticationTokenValidateWithLoginResult: {},
        authenticationTokenValidateWithLoginFail: false,
      };
    case AUTHENTICATION_TOKEN_VALIDATE_WITH_LOGIN_SUCCESS:
      return {
        ...state,
        authenticationTokenValidateWithLoginLoading: false,
        authenticationTokenValidateWithLoginResult: action.payload.data,
        authenticationTokenValidateWithLoginFail: false,
      };
    case AUTHENTICATION_TOKEN_VALIDATE_WITH_LOGIN_FAIL:
      return {
        ...state,
        authenticationTokenValidateWithLoginLoading: false,
        authenticationTokenValidateWithLoginResult: {},
        authenticationTokenValidateWithLoginFail: true,
      };
    default:
      return state;
  }
};
