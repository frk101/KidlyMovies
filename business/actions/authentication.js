import {
  AUTHENTICATION_TOKEN_NEW,
  AUTHENTICATION_TOKEN_NEW_URL,
  AUTHENTICATION_SESSION_NEW,
  AUTHENTICATION_SESSION_NEW_URL,
  AUTHENTICATION_TOKEN_VALIDATE_WITH_LOGIN,
  AUTHENTICATION_TOKEN_VALIDATE_WITH_LOGIN_URL,
} from "../types/authentication";

export function authenticationTokenNew() {
  return {
    type: AUTHENTICATION_TOKEN_NEW,
    payload: {
      request: {
        url: `${AUTHENTICATION_TOKEN_NEW_URL}`,
      },
    },
  };
}

export function authenticationTokenSession(requestToken) {
  return {
    type: AUTHENTICATION_SESSION_NEW,
    payload: {
      request: {
        method: "POST",
        url: `${AUTHENTICATION_SESSION_NEW_URL}`,
        data: {
          request_token: requestToken,
        },
      },
    },
  };
}

export function authenticationTokenValidateWithLogin(
  username,
  password,
  requestToken
) {
  return {
    type: AUTHENTICATION_TOKEN_VALIDATE_WITH_LOGIN,
    payload: {
      request: {
        method: "POST",
        url: `${AUTHENTICATION_TOKEN_VALIDATE_WITH_LOGIN_URL}`,
        data: {
          username: username,
          password: password,
          request_token: requestToken,
        },
      },
    },
  };
}
