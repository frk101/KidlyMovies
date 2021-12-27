import React, { useEffect } from "react";
import { VStack, Text, FlatList } from "native-base";
import { useDispatch, useSelector } from "react-redux";
import { RefreshControl } from "react-native";

import MovieItem from "./Components/MovieItem";
import { getMovieList } from "../../business/actions/genders";
import {
  authenticationTokenNew,
  authenticationTokenSession,
  authenticationTokenValidateWithLogin,
} from "../../business/actions/authentication";
import { getDetails } from "../../business/actions/account";

const MovieListScreen = () => {
  const dispatch = useDispatch();
  const username = "farukalbayrak";
  const password = "faruk1234.";
  const { getMovieListLoading, getMovieListResult } = useSelector(
    (state) => state.genders
  );
  const {
    authenticationTokenNewLoading,
    authenticationTokenNewResult,
    authenticationTokenSessionResult,
    authenticationTokenValidateWithLoginResult,
    authenticationTokenValidateWithLoginaLoading,
    authenticationTokenSessionLoading,
  } = useSelector((state) => state.authentication);

  useEffect(() => {
    if (
      !authenticationTokenNewLoading &&
      authenticationTokenNewResult &&
      authenticationTokenNewResult.success
    ) {
      dispatch(
        authenticationTokenValidateWithLogin(
          username,
          password,
          authenticationTokenNewResult.request_token
        )
      );
    }
    return () => {};
  }, [authenticationTokenNewLoading, authenticationTokenNewResult]);

  useEffect(() => {
    if (
      !authenticationTokenValidateWithLoginaLoading &&
      authenticationTokenValidateWithLoginResult &&
      authenticationTokenValidateWithLoginResult.success
    ) {
      dispatch(
        authenticationTokenSession(authenticationTokenNewResult.request_token)
      );
    }
    return () => {};
  }, [
    authenticationTokenValidateWithLoginaLoading,
    authenticationTokenValidateWithLoginResult,
  ]);

  useEffect(() => {
    if (
      !authenticationTokenSessionLoading &&
      authenticationTokenSessionResult
    ) {
      dispatch(getDetails(authenticationTokenSessionResult.session_id));
    }
    return () => {};
  }, [authenticationTokenSessionResult, authenticationTokenSessionLoading]);

  useEffect(() => {
    initPage();
    generateToken();
    return () => {};
  }, [dispatch]);

  const initPage = () => {
    dispatch(getMovieList());
  };

  const generateToken = async () => {
    dispatch(authenticationTokenNew());
  };

  return (
    <VStack>
      <FlatList
        data={getMovieListResult}
        renderItem={({ item, index }) => <MovieItem item={item} />}
        keyExtractor={(item) => item.id.toString()}
        refreshControl={
          <RefreshControl
            refreshing={getMovieListLoading}
            onRefresh={initPage}
          />
        }
      />
    </VStack>
  );
};

MovieListScreen.propTypes = {};

export default MovieListScreen;
