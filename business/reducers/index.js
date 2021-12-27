import { combineReducers, createStore, applyMiddleware } from "redux";
import { multiClientMiddleware } from "redux-axios-middleware";
import axios from "axios";
import promise from "redux-promise-middleware";

import genders from "./genders";
import movies from "./movies";
import authentication from "./authentication";
import account from "./account";

const reducers = combineReducers({
  genders,
  movies,
  authentication,
  account,
});

const client = {
  ["default"]: {
    client: axios.create({
      baseURL: "https://api.themoviedb.org",
      responseType: "json",
    }),
  },
};

const LocalRequestHandler = async (x) => {
  try {
    let urlKey = "?api_key=eee2e7844658340bec82cff45eb50c15";
    if (x.url.indexOf("?") > -1) {
      urlKey = "&api_key=eee2e7844658340bec82cff45eb50c15";
    }
    x.url = x.url + urlKey;
    x.reduxSourceAction.payload.request.url = x.url;
  } catch {}
  return x;
};

const LocalResponseHandler = async (x) => {
  return x;
};

client.default.client.interceptors.request.use((x) => LocalRequestHandler(x));
client.default.client.interceptors.response.use((x) => LocalResponseHandler(x));

export default createStore(
  reducers,
  {},
  applyMiddleware(promise, multiClientMiddleware(client))
);
