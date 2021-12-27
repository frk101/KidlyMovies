import {
  ACCOUNT_FAVORITE,
  ACCOUNT_FAVORITE_SUCCESS,
  ACCOUNT_FAVORITE_FAIL,
  ACCOUNT_GETDETAILS,
  ACCOUNT_GETDETAILS_SUCCESS,
  ACCOUNT_GETDETAILS_FAIL,
} from "../types/account";

const INITIAL_STATE = {
  accoutFavoriteLoading: false,
  accoutFavoriteResult: {},
  accoutFavoriteFail: false,

  accountDetailLoading: false,
  accountDetailResult: {},
  accountDetailFail: false,
};

export default (state = INITIAL_STATE, action) => {
  switch (action.type) {
    case ACCOUNT_FAVORITE:
      return {
        ...state,
        accoutFavoriteLoading: true,
        accoutFavoriteResult: {},
        accoutFavoriteFail: false,
      };
    case ACCOUNT_FAVORITE_SUCCESS:
      return {
        ...state,
        accoutFavoriteLoading: false,
        accoutFavoriteResult: action.payload.data,
        accoutFavoriteFail: false,
      };
    case ACCOUNT_FAVORITE_FAIL:
      return {
        ...state,
        accoutFavoriteLoading: false,
        accoutFavoriteResult: {},
        accoutFavoriteFail: true,
      };

    case ACCOUNT_GETDETAILS:
      return {
        ...state,
        accountDetailLoading: true,
        accountDetailResult: {},
        accountDetailFail: false,
      };
    case ACCOUNT_GETDETAILS_SUCCESS:
      return {
        ...state,
        accountDetailLoading: false,
        accountDetailResult: action.payload.data,
        accountDetailFail: false,
      };
    case ACCOUNT_GETDETAILS_FAIL:
      return {
        ...state,
        accountDetailLoading: false,
        accountDetailResult: {},
        accountDetailFail: true,
      };

    default:
      return state;
  }
};
