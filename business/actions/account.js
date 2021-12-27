import {
  ACCOUNT_FAVORITE_URL,
  ACCOUNT_FAVORITE,
  ACCOUNT_GETDETAILS,
  ACCOUNT_GETDETAILS_URL,
} from "../types/account";

export function accountFavorite(
  media_type,
  media_id,
  favorite,
  sessionId,
  accountId
) {
  return {
    type: ACCOUNT_FAVORITE,
    payload: {
      request: {
        method: "POST",
        url: `${ACCOUNT_FAVORITE_URL}/${accountId}/favorite?session_id=${sessionId}`,
        data: {
          media_type: media_type,
          media_id: media_id,
          favorite: favorite,
        },
      },
    },
  };
}

export function getDetails(sessionId) {
  return {
    type: ACCOUNT_GETDETAILS,
    payload: {
      request: {
        url: `${ACCOUNT_GETDETAILS_URL}?session_id=${sessionId}`,
      },
    },
  };
}
